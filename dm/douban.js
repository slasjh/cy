var rule = {
    title:'drpy',
    host:'https://frodo.douban.com',
    apidoc:'https://www.doubanapi.com',
    homeUrl:'',
    searchUrl:'',
    searchable:1,
    quickSearch:1,
    filterable:1,
    // 分类链接fypage参数支持1个()表达式
    url:'/?pg=fypage&class=fyclass&douban={{douban}}',
    filter_url:'fl={{fl}}',
    headers:{
            "Host": "frodo.douban.com",
            // "Host": "api.douban.com",
            "Connection": "Keep-Alive",
            "Referer": "https://servicewechat.com/wx2f9b06c1de1ccfca/84/page-frame.html",
            // "content-type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.143 Safari/537.36 MicroMessenger/7.0.9.501 NetType/WIFI MiniProgramEnv/Windows WindowsWechat"
    },
    timeout:5000,
    //class_name:'我的豆瓣&热门电影&热播剧集&热播综艺&电影筛选&电视筛选&电影榜单&电视榜单',
    //class_url:'interests&hot_gaia&tv_hot&show_hot&movie&tv&rank_list_movie&rank_list_tv',
   class_name:'热门电影&热播剧集&热播综艺&电影筛选&电视筛选&电影榜单&电视榜单',
 class_url:'hot_gaia&tv_hot&show_hot&movie&tv&rank_list_movie&rank_list_tv',
    filter:{'interests': [{'key': 'status', 'name': '状态', 'value': [{'n': '想看', 'v': 'mark'}, {'n': '在看', 'v': 'doing'}, {'n': '看过', 'v': 'done'}]}, {'key': 'subtype_tag', 'name': '形式', 'value': [{'n': '全部', 'v': ''}, {'n': '电影', 'v': 'movie'}, {'n': '电视', 'v': 'tv'}]}, {'key': 'year_tag', 'name': '年代', 'value': [{'n': '全部', 'v': '全部'},{'n': '2023', 'v': '2023'},{'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2010年代', 'v': '2010年代'}, {'n': '2000年
