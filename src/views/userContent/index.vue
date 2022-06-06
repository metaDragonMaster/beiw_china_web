<template>
	<div id="user-centered" class="limit-max-width-inset" >
		<div class="shadow">
			<p class="user-centered-title">{{title}}</p>
			<div class="user-centered-content">
				<Sidebar class="sidebar" ref="Sidebar" :menus="menus" ></Sidebar>
				<div class="sub-router-view">
					<transition name="ease" mode="out-in">
						<keep-alive>
							<router-view />
						</keep-alive>
					</transition>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Sidebar from '@/components/EasySideBar/Sidebar.vue';

export default {
	data() {
		return {
			title:"个人中心",
			menus: [
				// {
				// 	title: '用户中心',
				// 	index: '/userContent/user',
				// },
				{
					title: '上传专利',
					index: '/upload/patent',
				},
				{
					title: '上传商标',
					index: '/upload/trademark',
				},
				{
					title: '上传版权',
					index: '/upload/copyright',
				},
				{
					title: '上传校企研服务',
					index: '/service/edit',
				},
				{
					title: '上传资讯快报',
					index: '/information/edit',
				},
				{
					title: '上传知识产权评估',
					index: '/knowledge/assessment/edit',
				},
				{
					title: '上传知识产权融资',
					index: '/knowledge/financing/edit',
				},
				{
					title: '上传知识产权转化',
					index: '/knowledge/conversion/edit',
				},
				{
					title: '上传知识产权法律维权咨询',
					index: '/knowledge/lawProtection/edit',
				},

			],
		};
	},
	components: {
		Sidebar,
	},
};
</script>
<style lang="scss" scoped="scoped">
@import "@/styles/transition/ease.scss";
#user-centered {
	padding-top: 102px;
	padding-bottom: 102px;
}
.shadow {
	box-shadow: 0px 0px 13px 9px rgba(229, 229, 229, 0.75);
}
.user-centered-title {
	padding: 1rem;
}
.user-centered-content {
	// position: relative;
	display: flex;
	border-top: 1px solid #DCDCDC;
}
.sidebar {
	width: 220px;
	height: 100%;
	.el-menu {
		height: 100%;
	}
	// float: left;
}
.sub-router-view {
	// float: right;
	background-color: #FFFFFF;
	margin-left: 0.0625rem;
	padding: 1rem ;
	min-height: 31.25rem;
	width: calc(100% - 221px);
}
</style>
