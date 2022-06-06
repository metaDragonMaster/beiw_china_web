import request from '@/utils/request'

//api 模块对象
let api = {};

/*
	{
	 "address": "string",
	 "enterpriseDetails": "string",
	 "enterpriseName": "string",
	 "image": "string",
	 "name": "string",
	 "phone": "string"
	}
*/
api.add = function(data) {
	return request({
		url: '/wqzx/insertWqzxInfo',
		method: 'post',
		data: data,
	})
}
/*
	keyWord 关键字
	pageNum pageNum
	pageSize pageSize
*/
api.selectList = function(data) {
	return request({
		url: '/wqzx/selectWqzxList',
		method: 'post',
		params: data,
	})
}

export default api
