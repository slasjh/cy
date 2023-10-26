// 地址发布页 https://subaibai.vip/
var rule = {
    title: '素白白',
    host: 'https://www.subaibaiys.com',
    // url:'/fyclass/page/fypage',
    url: '/fyclassfyfilter',
    filterable: 1,//是否启用分类筛选,
    
    searchUrl: '/search?q=**',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'UC_UA',
    },
    // class_parse:'.navlist&&li;a&&Text;a&&href;.*/(\\w+)',
    class_name: '影视筛选&电影&电视剧&热门电影&高分电影&动漫电影&香港经典电影&国产剧&欧美剧&韩剧&动漫剧&漫威宇宙电影系列&速度与激情电影系列&007系列(25部正传+2部外传)',//静态分类名称拼接
    class_url: 'movie_bt&new-movie&tv-drama&hot-month&high-movie&cartoon-movie&hongkong-movie&domestic-drama&american-drama&korean-drama&anime-drama&marvel-movies&fastfurious&zero-zero-seven',//静态分类标识拼接
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.leibox&&li;*;*;*;*',
    // double:true, // 推荐内容是否双层定位
    一级: '.mrb&&li;img&&alt;img&&data-original;.jidi&&Text;a&&href',
    二级: {
        "title": "h1&&Text;.moviedteail_list&&li:eq(0)&&Text",
        "img": ".dyimg&&img&&src",
        "desc": ".moviedteail_list&&li:eq(-1)&&Text;;;.moviedteail_list&&li:eq(7)&&Text;.moviedteail_list&&li:eq(5)&&Text",
        "content": ".yp_context&&p&&Text",
        "tabs": ".mi_paly_box .ypxingq_t",
        "lists": ".paly_list_btn:eq(#id) a"
    },
    搜索: '.search_list&&li;*;*;*;*',
}
