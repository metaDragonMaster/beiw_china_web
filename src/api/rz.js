import request from '@/utils/request'

//api 模块对象
let api = {};

/*
	{
	  "email": "string",
	  "enterprise": "string",
	  "financingSubject": "string",
	  "name": "string",
	  "phone": "string",
	  "projectName": "string",
	  "subjectIntroduce": "string"
	}
*/
api.add = function(data) {
	return request({
		url: '/rz/insertRzInfo',
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
		url: '/rz/selectRzList',
		method: 'post',
		params: data,
	})
}

export default api
