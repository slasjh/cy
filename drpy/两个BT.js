var rule = {
    title:'两个BT',
    host:'https://www.bttwoo.com',
    // homeUrl:'/',
    url:'/fyclass/page/fypage',
    searchUrl:'/xssearch?q=**&f=_all&p=1',
    searchable:0,
    quickSearch:0,
    headers:{
        'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36',
        'method':'GET',
        'Content-Type':'text/html;charset=UTF-8',
        'Referer':'https://www.bttwoo.com/xsssearch?q=%E7%8E%AB%E7%91%B0%E7%9A%84%E6%95%85%E4%BA%8B&f=_all&p=1'

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
