import request from '@/utils/request'
let Api = {};

/*
	上传专利信息
*/
Api.setInsertPatentInfo = function(data) {
	return request({
		url: '/patent/insertPatentInfo',
		method: 'post',
		data: data
	})
}
/*
	查询专利信息
*/
Api.setInsertPatentInfoById = function(id) {
	return request({
		url: `/patent/selectPatentInfoById?id=${id}`,
		method: 'post',
	})
}
/*
	查询专利信息列表
	createSort
	pageNum
	pageSize
	type
*/
Api.selectPatentInfoList = function(data) {
	return request({
		url: '/patent/selectPatentInfoList',
		method: 'post',
		params: data
	})
}
//通过企业名称查询专利信息列表
Api.selectPatentInfoListByName = function(data) {
	return request({
		url: '/patent/selectPatentInfoListByName',
		method: 'post',
		params: data
	})
}

export default Api;
