<template>
	<div id="layout">
		<div>
			<TopNavBar ref="TopNavBar"></TopNavBar>
			<div ref="AppMain" class="app-main">
				<router-view></router-view>
			</div>
		</div>
		<BottomFooter></BottomFooter>
	</div>
</template>
<script>
import TopNavBar from './modules/TopNavBar/index.vue';
import BottomFooter from './modules/BottomFooter/index.vue';
import { mapActions } from 'vuex';
import { getToken } from '@/utils/auth.js';
export default {
	components: {
		TopNavBar,
		BottomFooter
	},
	watch: {
		$route(newRoute, oldRoute) {
			// if (newRoute.meta.needLogin && !getToken()) {
				// this.$store.dispatch('user/setUserInfo', null);
				// this.$routerUtil.toName('userLogin');
			// }
		},
	},
	created() {
		// this.getUserInfo()
	},
	methods: {
		// ...mapActions({ getUserInfo: 'user/getUserInfo' })
	}
};
</script>
<style lang="scss" scoped="scoped">
#layout {
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.app-main {
		box-shadow: inset 0 3px 5px rgba($color: #000000, $alpha: 0.1) ;
		// &>* {
		// 	// padding-top: 1px;
		// 	padding: 1px 0 0 0;
		// }
	}
}
</style>
