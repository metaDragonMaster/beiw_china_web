import request from '@/utils/request'

//api 模块对象
let api = {};

/*
	newsTypeId		资讯类型
	current
	size
*/
api.selectList = function(data) {
	return request({
		url: '/news/newsList',
		method: 'post',
		params: data,
	})
}

api.selectTypesList = function() {
	return request({
		url: '/news/newsTypeList',
		method: 'post',
	})
}

api.selectDetailById = function(newsId) {
	return request({
		url: '/news/newsDetail',
		method: 'post',
		params: {
			newsId:newsId
		}
	})
}

api.getHotNews = function() {
	return request({
		url: '/news/hotNews',
		method: 'post',
	})
}

export default api
