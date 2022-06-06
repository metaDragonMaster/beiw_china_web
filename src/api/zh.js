import request from '@/utils/request'

//api 模块对象
let api = {};

/*
	{
	  "conversion": "string",
	  "funds": "string",
	  "model": 0,
	  "name": "string",
	  "phone": "string",
	  "projectName": "string",
	  "subjectIntroduce": "string"
	}
*/
api.add = function(data) {
	return request({
		url: '/zh/insertZhInfo',
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
		url: '/zh/selectZhList',
		method: 'post',
		params: data,
	})
}

export default api
