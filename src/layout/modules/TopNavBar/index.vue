<template>
	<div id="top-nav-bar">
		<img class="logo" src="@/assets/images/homepage/logo.png" alt="" />
		<ul @mouseleave="active = 0">
			<li v-for="item in mainList" @click="toPath(item)" :key="item.id" @mouseenter="active = item.id">
				<span>{{ item.title }}</span>
				<i :class="active == item.id ? 'el-icon-arrow-down' : 'el-icon-arrow-up'" v-show="item.subs"></i>
				<ol v-show="item.subs && active == item.id">
					<li v-for="sub in item.subs" @click.stop="toPath(sub)">{{ sub.title }}</li>
				</ol>
			</li>

			<li v-show="!isLogin">
				<span @click.stop="$routerUtil.toPath('/userSign/login')">登录</span>
				/
				<span @click.stop="$routerUtil.toPath('/userSign/register')">注册</span>
			</li>
			<li v-show="isLogin"><button type="button" class="logout-button" @click="userLogout">退出登录</button></li>
		</ul>
	</div>
</template>
<script>
// import {
// 	getToken
// } from "@/utils/auth.js";

import { mapActions, mapGetters } from 'vuex';
export default {
	data() {
		return {
			active: 0,
			mainList: [
				{ id: 1, title: '首页', path: '/' },
				{ id: 2, title: '企业简介', path: '/companyProfile' },
				{
					id: 8,
					title: '产品',
					// path: '/',
					subs: [
						{ title: '专利数据库', path: '/transaction/patentDataBase' },
						{ title: '专利超市', path: '/supermarket/patent' },
						{ title: '商标超市', path: '/supermarket/trademark' },
						{ title: '版权超市', path: '/supermarket/copyright' },
						{ title: '知识产权投资交易中心', path: '/transaction/knowledge' },
						{ title: '军民融合技术交易中心', path: '/transaction/military' },
						{ title: '专题数据库', newWindow: 'http://222.240.166.58:8080/zhuantiku.html' }
					]
				},
				{
					id: 3,
					title: '校企研服务平台',
					// path: '/',
					subs: [
						{
							title: '高校转化中心',
							path: '/service/0/list',
							// params: {
							// 	type: 'universityTransformationCenter'
							// }
						},
						{
							title: '企业数据库',
							path: '/service/1/list',
							// params: {
							// 	type: 'enterpriseDatabase'
							// }
						},
						{
							title: '研究院所',
							path: '/service/2/list',
							// params: {
							// 	type: 'researchInstitute'
							// }
						}
					]
				},
				{
					id: 4,
					title: '服务',
					// path: '/',
					subs: [
						{ title: '知识产权融资服务', path: '/knowledge/financing' },
						{ title: '知识产权转化服务', path: '/knowledge/conversion' },
						{ title: '知识产权评估服务', path: '/knowledge/assessment' },
						{ title: '知识产权法律维权咨询', path: '/knowledge/lawProtection' },
					]
				},
				{ id: 5, title: '资讯快报', path: '/information/details' },
				// { id: 6, title: '帮助中心', path: '/help' },
				{ id: 7, title: '个人中心', path: '/userContent' }
				// {id:7,title:"登录/注册",path:"/"},
			]
		};
	},
	computed: {
		...mapGetters(['token']),
		isLogin() {
			// return !!getToken();
			return !!this.token;
		}
	},
	methods: {
		...mapActions({
			logout: 'user/logout'
		}),
		toPath(item) {
			if (item['path']) {
				this.$routerUtil.toPath(item['path']
				// ,item['params']
				);
			} else if (item['newWindow']) {
				this.$routerUtil.newWindow(item['newWindow']);
			}
		},
		userLogout() {
			this.logout();
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
#top-nav-bar {
	height: 115px;
	display: flex;
	align-items: center;
	// background-color: #86bdf4;
	@media screen and (max-width: 1600px) {
		height: 80px;
	}
	.logo {
		width: 416px;
		// height: 36px;
		margin: 0 auto;
		@media screen and (max-width: 1300px) {
			width: 316px;
			padding-left: 2rem;
		}
	}
	ul {
		display: flex;
		align-items: center;
		height: 100%;
		padding: 0 35px;

		& > li {
			position: relative;
			// line-height: 115px;
			padding: 0 35px;
			cursor: pointer;
			@media screen and (max-width: 1600px) {
				padding: 0 16px;
			}
		}
	}
	ol {
		z-index: 1000;
		position: absolute;
		left: 50%;
		top: 50px;
		transform: translateX(-50%);
		width: 250px;
		background-color: #ffffff;
		box-shadow: 0px 8px 19px 3px rgba(203, 204, 207, 0.65);
		padding: 1rem;
		li {
			line-height: 1.5rem;
			text-align: center;
			color: #999999;
			&:hover {
				color: #549eff;
			}
		}
	}
	.logout-button {
		background-color: #f00303;
		color: #ffffff;
		padding: 4px 8px;
		border-radius: 4px;
	}
}
</style>
