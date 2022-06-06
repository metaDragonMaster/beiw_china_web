import request from '@/utils/request';

//api 模块对象
let api = {};

/*
	新增 新闻咨询
	isRelease	是否发布	query	false	boolean
	newsAuthor	作者(转载)	query	false	string
	newsContent	内容	query	false	string
	newsSort	优先级（越大越先）	query	false	integer(int32)
	newsTitle	标题	query	false	string
	newsTitleImage	标题图片	query	false	string
	newsTypeId	新闻类型ID	query	false	integer(int32)
*/
api.addInfo = function(data) {
	return request({
		url: '/newsManage/addNewsInfo',
		method: 'post',
		data: data
	})
}

/*
	修改 新闻咨询
	newsId	newsId	path	true	integer(int32)
	isRelease	是否发布	query	false	boolean
	newsAuthor	作者(转载)	query	false	string
	newsContent	内容	query	false	string
	newsSort	优先级（越大越先）	query	false	integer(int32)
	newsTitle	标题	query	false	string
	newsTitleImage	标题图片	query	false	string
	newsTypeId	新闻类型ID	query	false	integer(int32)
*/
api.updateById = function(newsId,data) {
	return request({
		url: `/newsManage/editNewsInfo/${newsId}`,
		method: 'put',
		data: data
	})
}


/*
	删除 新闻资讯
	newsId	newsId	path	true	integer(int32)
*/
api.deleteById = function(newsId) {
	return request({
		url: `/newsManage/deleteNewsInfo/${newsId}`,
		method: 'post',
	})
}

/*
	新闻资讯-管理列表
	current	当前页码	query	false	integer(int32)
	newsTitle	标题（模糊搜索）	query	false	string
	newsTypeId	新闻资讯类型ID	query	false	integer(int32)
	platformTypeId	平台类型ID	query	false	integer(int32)
	size	当前页面数据量	query	false	integer(int32)
*/
api.selectList = function(data) {
	return request({
		url: `/newsManage/newsList`,
		method: 'get',
		params: data
	})
}
/*
	新闻资讯类型列表
*/
api.getNewsTypeList = function() {
	return request({
		url: `/newsManage/newsTypeList`,
		method: 'get',
	})
}

export default api;
