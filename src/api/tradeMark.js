import request from '@/utils/request'
let Api = {};

/*
	上传商标信息
*/
Api.setInsertTradeMarkInfo = function(data) {
	return request({
		url: '/tradeMark/add',
		method: 'post',
		data: data
	})
}
/*
	查询商标信息
*/
Api.selectTradeMarkInfoById = function(id) {
	return request({
		url: `/tradeMark/selectById?id=${id}`,
		method: 'post',
	})
}
/*
	查询商标信息列表
	createSort
	pageNum
	pageSize
	type
*/
Api.selectTradeMarkInfoList = function(data) {
	return request({
		url: '/tradeMark/list',
		method: 'post',
		params: data
	})
}

export default Api;
