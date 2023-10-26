// 地址发布页 https://subaibai.vip/
var rule = {
    title: '素白白',
    host: 'https://www.subaibaiys.com',
    // url:'/fyclass/page/fypage',
    url: '/fyclassfyfilter',
    

    searchUrl: '/search?q=**',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    headers: {
        'User-Agent': 'UC_UA',
    },
    // class_parse:'.navlist&&li;a&&Text;a&&href;.*/(\\w+)',

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
