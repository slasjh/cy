var rule = {
    title:'两个BT',
    host:'https://www.bttwoo.com',
    // homeUrl:'/',
    url:'/fyclass/page/fypage',
    searchUrl:'/xssearch?q=**&f=_all&p=1',
    searchable:0,
    quickSearch:0,
    headers:{
      'method':'get',
         'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'Accept-Encoding':'gzip, deflate, br, zstd',
        'Accept-Language':'zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2',
         'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:126.0) Gecko/20100101 Firefox/126.0',
         'Cookie':'_ga_RCP8C4ZLB9=GS1.1.1718178210.5.1.1718178252.0.0.0; _ga=GA1.1.168495592.1717141034; myannoun=1',
        'Sec-Fetch-Dest':'document',
        'Sec-Fetch-Mode':'navigate',
       'Referer':'https://www.bttwoo.com/xsssearch?q=%E7%8E%AB%E7%91%B0%E7%9A%84%E6%95%85%E4%BA%8B'


    },//        'Referer':'/xssearch?q=**&f=_all&p=1'
    timeout:5000,
    class_name:'最新电影&国产剧&美剧&日韩剧',//静态分类名称拼接
	class_url:'new-movie&zgjun&meiju&jpsrtv',//静态分类标识拼接
	class_parse:'',
    play_parse:true,
    lazy:'',
    limit:5,
    推荐:'.leibox;li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.bt_img li;.lazy&&alt;.thumb.lazy&&data-original;.jidi span&&Text;a&&href',
    
	二级:{"title":".moviedteail_tt h1&&Text","img":".dyimg.fl img&&src","desc":".cr3.starLink&&Text","content":".yp_context&&Text","tabs":".ypxingq_t:eq(1) span","lists":".paly_list_btn:eq(#id) a"},
    搜索:'*',
	
}
