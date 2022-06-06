import request from '@/utils/request'
let Api = {};

/*
	获取OSS上传凭证
*/
Api.getOssPolicy = function() {
	return request({
		url: '/user/getOssPolicy',
		method: 'post',
	})
}


/*
	获取图形验证码
	phoneNo!:string:"",//手机号
*/
Api.getImageCode = function(data) {
	return request({
		url: '/user/imageCode',
		method: 'post',
		params: data
	})
}

/*
	根据短信验证码登录
	phoneNo!:string:"",//手机号
	code!:string:"",//短信验证码
*/
Api.loginByCode = function(data) {
	return request({
		url: '/user/login/code',
		method: 'post',
		params: data
	})
}
/*
	根据密码登录
	phoneNo!:string:"",//手机号
	password!:string:"",//密码
*/
Api.loginByPassword = function(data) {
	return request({
		url: '/user/login/pass',
		method: 'post',
		params: data
	})
}
/*
	用户登出
*/
Api.logout = function() {
	return request({
		url: '/user/loginOut',
		method: 'post',
	})
}

/*
	用户注册
	code!:string:"",//短信验证码
	password!:string:"",//密码
	phoneNo!:string:"",//手机号码
*/
Api.registry = function(data) {
	return request({
		url: '/user/registry',
		method: 'post',
		params: data
	})
}

/*
	获取短信验证码
	imageAuth!:string:"",//图形验证码
	phoneNo!:string:"",//手机号码
*/
Api.getCodeByImageAuth = function(data) {
	return request({
		url: '/user/telCode',
		method: 'post',
		params: data
	})
}

export default Api;
