import urllib.request
from concurrent.futures import ThreadPoolExecutor, as_completed
import time
from datetime import datetime
import os
from urllib.parse import urlparse
import socket  #check p3p源 rtp源
import subprocess #check rtmp源
import re
import requests

timestart = datetime.now()

BlackHost=["127.0.0.1:8080","live3.lalifeier.eu.org","newcntv.qcloudcdn.com"]

# 读取文件内容
def read_txt_file(file_path):
    skip_strings = ['#genre#']  # 定义需要跳过的字符串数组['#', '@', '#genre#'] 
    required_strings = ['://']  # 定义需要包含的字符串数组['必需字符1', '必需字符2'] 

    with open(file_path, 'r', encoding='utf-8') as file:
        lines = [
            line for line in file
            if not any(skip_str in line for skip_str in skip_strings) and all(req_str in line for req_str in required_strings)
        ]
    return lines

# 检测URL是否可访问并记录响应时间
def check_url(url, timeout=2):

    start_time = time.time()

    elapsed_time = None

    success = False

    headers = {

        'User-Agent': 'Lavf/58.12.100',

        'Accept': '*/*',

    }    

    try:

        if url.startswith("http") and not is_ipv6(url):

            if "/udp/" not in url and "/rtp/" not in url:  # 使用 and 而不是 or，确保 URL 中不包含 /udp/ 和 /rtp/

                response = requests.get(url, allow_redirects=True, headers=headers, timeout=timeout)

                response.raise_for_status()  # 如果响应状态码不是 200 OK，将引发 HTTPError 异常
                
                # 注意：response 对象没有 status 属性，只有 status_code 属性

                if response.status_code == 200 or response.status_code == 206:  # 部分内容响应也是成功的

                    success = True
                #req = urllib.request.Request(encoded_url, headers=headers)
                #req.allow_redirects = True  # 允许自动重定向（Python 3.4+）
                #with urllib.request.urlopen(req, timeout=timeout) as response:
                    #if response.status == 200 or response.status == 206:
                        #success = True
        elif url.startswith("p3p") or url.startswith("p2p") or url.startswith("rtmp") or url.startswith("rtsp") or url.startswith("rtp") or is_ipv6(url) or "/udp/" in url or "/rtp/" in url:
            success = False
            #print(f"{url}此链接为rtp/p2p/rtmp/rtsp等，舍弃不检测")

        # 如果执行到这一步，没有异常，计算时间
        elapsed_time = (time.time() - start_time) * 1000  # 转换为毫秒
        print(f"{url} http速度为: {elapsed_time},{success}")
    except Exception as e:
        print(f"Error checking {url}: {e}")
        record_host(get_host_from_url(url))
        # 在发生异常的情况下，将 elapsed_time 设置为 None
        elapsed_time = None
        success = False

    return elapsed_time, success

def is_ipv6(url):
    # 检查 URL 是否以 http://[IPv6 地址] 开头
    return re.match(r'^http:\/\/\[[0-9a-fA-F:]+\]', url) is not None

def is_ipv4(url):
    # 编译一个 IPv4 地址的正则表达式模式
    ipv4_pattern = re.compile(r'\b(?:\d{1,3}\.){3}\d{1,3}\b')
    
    # 使用 search 方法检查 URL 中是否包含 IPv4 地址
    # 注意：这里我们假设 url 是一个字符串，而不是字符串列表
    return ipv4_pattern.search(url) is not None



# 处理单行文本并检测URL
def process_line(line):
    if "#genre#" in line or "://" not in line :
        return None, None  # 跳过包含“#genre#”的行
    parts = line.split(',')
    if len(parts) == 2:
        name, url = parts
        elapsed_time, is_valid = check_url(url.strip())
        if is_valid:
            return elapsed_time, line.strip()
        else:
            return None, line.strip()
    return None, None

# 多线程处理文本并检测URL
def process_urls_multithreaded(lines, max_workers=30):
    blacklist =  [] 
    successlist = []

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = {executor.submit(process_line, line): line for line in lines}
        for future in as_completed(futures):
            elapsed_time, result = future.result()
            if result:
                if elapsed_time is not None:
                    successlist.append(f"{elapsed_time:.2f}ms,{result}")
                else:
                    blacklist.append(result)
    return successlist, blacklist

# 写入文件
def write_list(file_path, data_list):
    with open(file_path, 'w', encoding='utf-8') as file:
        for item in data_list:
            file.write(item + '\n')

# 增加外部url到检测清单，同时支持检测m3u格式url
# urls里所有的源都读到这里。
urls_all_lines = []

def get_url_file_extension(url):
    # 解析URL
    parsed_url = urlparse(url)
    # 获取路径部分
    path = parsed_url.path
    # 提取文件扩展名
    extension = os.path.splitext(path)[1]
    return extension

def convert_m3u_to_txt(m3u_content):
    # 分行处理
    lines = m3u_content.split('\n')
    
    # 用于存储结果的列表
    txt_lines = []
    
    # 临时变量用于存储频道名称
    channel_name = ""
    
    for line in lines:
        # 过滤掉 #EXTM3U 开头的行
        if line.startswith("#EXTM3U"):
            continue
        # 处理 #EXTINF 开头的行
        if line.startswith("#EXTINF"):
            # 获取频道名称（假设频道名称在引号后）
            channel_name = line.split(',')[-1].strip()
        # 处理 URL 行
        elif line.startswith("http"):
            txt_lines.append(f"{channel_name},{line.strip()}")
    
    # 将结果合并成一个字符串，以换行符分隔
  