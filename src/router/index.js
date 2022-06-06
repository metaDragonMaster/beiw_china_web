import Vue from 'vue';
import VueRouter from 'vue-router';
import layout from '@/layout/index.vue';

Vue.use(VueRouter);
// Router
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err);
}

/*
	@meta
		title	标题
		isTopMenuNarBar	展示导航菜单
*/
const routes = [{
		path: '/',
		name: 'layout',
		redirect: 'homepage',
		component: layout,
		children: [
			{
				path: '/userSign/login',
				name: 'login',
				meta: {
					title: "用户登录",
				},
				component: () => import('@/views/userSign/login/index.vue'),
			},
			{
				path: '/userSign/register',
				name: 'register',
				meta: {
					title: "用户注册",
				},
				component: () => import('@/views/userSign/register/index.vue'),
			},
			{
				path: '/homepage',
				name: 'homepage',
				meta: {
					title: "首页",
				},
				component: () => import('@/views/homepage/index.vue'),
			},
			{
				path: '/companyProfile',
				name: 'companyProfile',
				meta: {
					title: "企业简介",
				},
				component: () => import('@/views/companyProfile/index.vue'),
			},
			// {
			// 	path: '/information',
			// 	name: 'information',
			// 	meta: {
			// 		title: "资讯快报",
			// 	},
			// 	component: () => import('@/views/information/index.vue'),
			// },
			{
				path: '/information/details',
				name: 'informationList',
				meta: {
					title: "更多资讯",
				},
				component: () => import('@/views/information/informationList.vue'),
			},
			{
				path: '/information/details/:id',
				name: 'informationDetails',
				meta: {
					title: "资讯详情",
				},
				component: () => import('@/views/information/details.vue'),
			},
			{
				path: '/information/edit',
				name: 'informationEdit',
				meta: {
					title: "编辑资讯",
				},
				component: () => import('@/views/information/edit.vue'),
			},
			{
				path: '/help',
				name: 'help',
				meta: {
					title: "帮助中心",
				},
				component: () => import('@/views/help/index.vue'),
			},
			{
				path: '/transaction/military',
				name: 'transactionMilitary',
				meta: {
					title: "军民融合技术交易中心",
				},
				component: () => import('@/views/transaction/military/index.vue'),
			},
			{
				path: '/transaction/knowledge',
				name: 'transactionKnowledge',
				meta: {
					title: "知识产权投资交易中心",
				},
				component: () => import('@/views/transaction/knowledge/index.vue'),
			},
			{
				path: '/transaction/patentDataBase',
				name: 'transactionPatentDataBase',
				meta: {
					title: "专利数据库",
				},
				component: () => import('@/views/transaction/patentDataBase/index.vue'),
			},

			{
				path: '/supermarket/patent',
				name: 'supermarketPatent',
				meta: {
					title: "专利超市",
				},
				component: () => import('@/views/supermarket/patent/index.vue'),
			},
			{
				path: '/supermarket/patent/details',
				name: 'supermarketPatentDetails',
				meta: {
					title: "专利详情",
				},
				component: () => import('@/views/supermarket/patent/details.vue'),
			},

			{
				path: '/supermarket/copyright',
				name: 'supermarketCopyright',
				meta: {
					title: "版权超市",
				},
				component: () => import('@/views/supermarket/copyright/index.vue'),
			},
			{
				path: '/supermarket/copyright/details',
				name: 'supermarketCopyrightDetails',
				meta: {
					title: "版权详情",
				},
				component: () => import('@/views/supermarket/copyright/details.vue'),
			},

			{
				path: '/supermarket/trademark',
				name: 'supermarketTrademark',
				meta: {
					title: "专利超市",
				},
				component: () => import('@/views/supermarket/trademark/index.vue'),
			},
			{
				path: '/supermarket/trademark/details',
				name: 'supermarketTrademarkDetails',
				meta: {
					title: "专利详情",
				},
				component: () => import('@/views/supermarket/trademark/details.vue'),
			},

			{
				path: '/upload/patent',
				name: 'uploadPatent',
				meta: {
					title: "上传专利",
					needLogin:true,
				},
				component: () => import('@/views/upload/patent/index.vue'),
			},
			{
				path: '/upload/trademark',
				name: 'uploadTrademark',
				meta: {
					title: "上传商标",
					needLogin:true,
				},
				component: () => import('@/views/upload/trademark/index.vue'),
			},
			{
				path: '/upload/copyright',
				name: 'uploadCopyright',
				meta: {
					title: "上传版权",
					needLogin:true,
				},
				component: () => import('@/views/upload/copyright/index.vue'),
			},
			{
				path: '/pay/details',
				name: 'payDetails',
				meta: {
					title: "购买信息",
					needLogin:true,
				},
				component: () => import('@/views/pay/details.vue'),
			},
			{
				path: '/consultation',
				name: 'consultation',
				meta: {
					title: "在线咨询",
				},
				component: () => import('@/views/consultation/index.vue'),
			},
			{
				path: '/userContent',
				name: 'userContent',
				meta: {
					title: "个人中心",
					needLogin:true,
				},
				component: () => import('@/views/userContent/index.vue'),
			},

			{
				path: '/service/:type/list',
				name: 'service',
				meta: {
					title: "服务中心",
				},
				component: () => import('@/views/service/index.vue'),
			},
			{
				path: '/service/edit',
				name: 'serviceEdit',
				meta: {
					title: "上传服务资料",
				},
				component: () => import('@/views/service/edit.vue'),
			},
			{
				path: '/service/patent/:name',
				name: 'servicePatent',
				meta: {
					title: "企业专利超市",
				},
				component: () => import('@/views/service/patent.vue'),
			},
			{
				path: '/knowledge/assessment',
				name: 'assessment',
				meta: {
					title: "知识产权评估服务",
				},
				component: () => import('@/views/knowledge/assessment/index.vue'),
			},
			{
				path: '/knowledge/conversion',
				name: 'conversion',
				meta: {
					title: "知识产权转化服务",
				},
				component: () => import('@/views/knowledge/conversion/index.vue'),
			},
			{
				path: '/knowledge/financing',
				name: 'financing',
				meta: {
					title: "知识产权融资服务",
				},
				component: () => import('@/views/knowledge/financing/index.vue'),
			},
			{
				path: '/knowledge/lawProtection',
				name: 'lawProtection',
				meta: {
					title: "知识产权法律维权咨询",
				},
				component: () => import('@/views/knowledge/lawProtection/index.vue'),
			},

			{
				path: '/knowledge/assessment/edit',
				name: 'assessmentEdit',
				meta: {
					title: "上传知识产权评估",
				},
				component: () => import('@/views/knowledge/assessment/edit.vue'),
			},
			{
				path: '/knowledge/conversion/edit',
				name: 'conversionEdit',
				meta: {
					title: "上传知识产权转化",
				},
				component: () => import('@/views/knowledge/conversion/edit.vue'),
			},
			{
				path: '/knowledge/financing/edit',
				name: 'financingEdit',
				meta: {
					title: "上传知识产权融资",
				},
				component: () => import('@/views/knowledge/financing/edit.vue'),
			},
			{
				path: '/knowledge/lawProtection/edit',
				name: 'lawProtectionEdit',
				meta: {
					title: "知识产权法律维权咨询",
				},
				component: () => import('@/views/knowledge/lawProtection/edit.vue'),
			},

		]
	},
	{
		path: "/404",
		name: "404",
		component: () => import('@/views/error/404.vue'),
	},
	{
		path: "*",
		name: "missView",
		redirect: '404',
		// component: () => import('@/views/error/404.vue'),
	},
]

const router = new VueRouter({
	routes,
	scrollBehavior(to, from, savedPosition) {
		return {
			x: 0,
			y: 0,
			// behavior: 'smooth',
		}
	},
})

export default router
