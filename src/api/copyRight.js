import request from '@/utils/request'
let Api = {};

/*
	上传版权信息
*/
Api.setInsertCopyRightInfo = function(data) {
	return request({
		url: '/copyRight/add',
		method: 'post',
		data: data
	})
}
/*
	查询版权信息
*/
Api.selectCopyRightInfoById = function(id) {
	return request({
		url: `/copyRight/selectById?id=${id}`,
		method: 'post',
	})
}
/*
	查询版权信息列表
	createSort
	pageNum
	pageSize
	type
*/
Api.selectCopyRightInfoList = function(data) {
	return request({
		url: '/copyRight/list',
		method: 'post',
		params: data
	})
}

export default Api;
