muban.mxpro.二级.desc = '.module-info-item:eq(4)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.tabs = '#y-playList .tab-item';
var rule = {
	title: 'dsx影视',
	模板: 'mxpro',
	// host:'https://dsxys.com',
	host: 'https://dsxys.pro',
	// url:'/vodshow/fyclass--------fypage---.html',
	url: '/vodshow/fyfilter.html',
	filterable: 1,//是否启用分类筛选,
filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-{{fl.lang}}-{{fl.letter}}---fypage---{{fl.year}}',

	tab_remove:[ '热门资讯','电影','电视剧','综艺'],
	class_name:'动漫',
    class_url:'4',

	filter: {

		"4": [{ "key": "cateId", "name": "类型", "value": [{ "n": "全部", "v": "4" }, { "n": "国产动漫", "v": "33" }, { "n": "日韩动漫", "v": "34" }, { "n": "欧美动漫", "v": "35" }, { "n": "港台动漫", "v": "36" }, { "n": "海外动漫", "v": "37" }, { "n": "动漫电影", "v": "39" }, { "n": "番剧", "v": "60" }, { "n": "国创", "v": "61" }] }, { "key": "class", "name": "剧情", "value": [{ "n": "全部", "v": "" }, { "n": "情感", "v": "情感" }, { "n": "科幻", "v": "科幻" }, { "n": "热血", "v": "热血" }, { "n": "推理", "v": "推理" }, { "n": "搞笑", "v": "搞笑" }, { "n": "冒险", "v": "冒险" }, { "n": "萝莉", "v": "萝莉" }, { "n": "校园", "v": "校园" }, { "n": "动作", "v": "动作" }, { "n": "机战", "v": "机战" }, { "n": "运动", "v": "运动" }, { "n": "战争", "v": "战争" }, { "n": "少年", "v": "少年" }, { "n": "少女", "v": "少女" }, { "n": "社会", "v": "社会" }, { "n": "原创", "v": "原创" }, { "n": "亲子", "v": "亲子" }, { "n": "益智", "v": "益智" }, { "n": "励志", "v": "励志" }, { "n": "其他", "v": "其他" }] }, { "key": "area", "name": "地区", "value": [{ "n": "全部", "v": "" }, { "n": "国产", "v": "国产" }, { "n": "日本", "v": "日本" }, { "n": "欧美", "v": "欧美" }, { "n": "其他", "v": "其他" }] }, { "key": "lang", "name": "语言", "value": [{ "n": "全部", "v": "" }, { "n": "国语", "v": "国语" }, { "n": "英语", "v": "英语" }, { "n": "粤语", "v": "粤语" }, { "n": "闽南语", "v": "闽南语" }, { "n": "韩语", "v": "韩语" }, { "n": "日语", "v": "日语" }, { "n": "其它", "v": "其它" }] }, { "key": "year", "name": "年份", "value": [{ "n": "全部", "v": "" }, { "n": "2024", "v": "2024" }, { "n": "2023", "v": "2023" }, { "n": "2022", "v": "2022" }, { "n": "2021", "v": "2021" }, { "n": "2020", "v": "2020" }, { "n": "2019", "v": "2019" }, { "n": "2018", "v": "2018" }, { "n": "2017", "v": "2017" }, { "n": "2016", "v": "2016" }, { "n": "2015", "v": "2015" }, { "n": "2014", "v": "2014" }, { "n": "2013", "v": "2013" }, { "n": "2012", "v": "2012" }, { "n": "2011", "v": "2011" }, { "n": "2010", "v": "2010" }, { "n": "2009", "v": "2009" }, { "n": "2008", "v": "2008" }, { "n": "2007", "v": "2007" }, { "n": "2006", "v": "2006" }, { "n": "2005", "v": "2005" }, { "n": "2004", "v": "2004" }] }, { "key": "letter", "name": "字母", "value": [{ "n": "全部", "v": "" }, { "n": "A", "v": "A" }, { "n": "B", "v": "B" }, { "n": "C", "v": "C" }, { "n": "D", "v": "D" }, { "n": "E", "v": "E" }, { "n": "F", "v": "F" }, { "n": "G", "v": "G" }, { "n": "H", "v": "H" }, { "n": "I", "v": "I" }, { "n": "J", "v": "J" }, { "n": "K", "v": "K" }, { "n": "L", "v": "L" }, { "n": "M", "v": "M" }, { "n": "N", "v": "N" }, { "n": "O", "v": "O" }, { "n": "P", "v": "P" }, { "n": "Q", "v": "Q" }, { "n": "R", "v": "R" }, { "n": "S", "v": "S" }, { "n": "T", "v": "T" }, { "n": "U", "v": "U" }, { "n": "V", "v": "V" }, { "n": "W", "v": "W" }, { "n": "X", "v": "X" }, { "n": "Y", "v": "Y" }, { "n": "Z", "v": "Z" }] }, { "key": "by", "name": "排序", "value": [{ "n": "时间", "v": "time" }, { "n": "人气", "v": "hits" }, { "n": "评分", "v": "score" }] }]
	},
	filter_def: {

		4: { cateId: '4' }
	},
	class_parse: '.navbar-items.swiper-wrapper li;a&&title;a&&href;/(\\d+).html',
	lazy: "js:var html=JSON.parse(request(input).match(/r player_.*?=(.*?)</)[1]);var url=html.url;if(html.encrypt=='1'){url=unescape(url)}else if(html.encrypt=='2'){url=unescape(base64Decode(url))}if(/m3u8|mp4/.test(url)){input=url}else{input}",

	// searchUrl:'/search-**----------fypage---/',
	searchUrl: '/index.php/ajax/suggest?mid=1&wd=**&limit=50',
	detailUrl: '/v/fyid.html', //非必填,二级详情拼接链接
	二级访问前: 'log(MY_URL);MY_URL=MY_URL.replace("/p","/v").replace("-1-1","")',
	搜索: 'json:list;name;pic;;id',
}