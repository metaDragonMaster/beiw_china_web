import request from '@/utils/request'
let Api = {};

/*
	上传平台信息
	{
	  "address": "string",地址
	  "contactName": "string",联系人名称
	  "contactPhone": "string",联系电话
	  "introduction": "string",简介
	  "logo": "string",平台logo
	  "name": "string",平台名称
	  "platformType": 0平台类型
	}
*/
Api.add = function(data) {
	return request({
		url: '/platform/add',
		method: 'post',
		data: data
	})
}
/*
	修改平台信息
*/
Api.updateById = function(platformId ,data) {
	return request({
		url: `/platform/update/${platformId}`,
		method: 'post',
		data: data
	})
}
/*
	查询平台信息列表
	platformType 	平台类型
	pageNum
	pageSize
	name			平台名称
*/
Api.selectList = function(data) {
	return request({
		url: '/platform/list',
		method: 'post',
		params: data
	})
}

export default Api;
