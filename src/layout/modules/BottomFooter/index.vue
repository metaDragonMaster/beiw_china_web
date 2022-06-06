<template>
	<div id="bottom-footer" class="limit-max-width">
		<div class="flex before">
			<img class="logo" src="@/assets/images/homepage/logo_dibai.png" />
			<dl>
				<dd>专利数据库</dd>
				<dd>知识产权融资服务</dd>
				<dd>知识产权转化服务</dd>
				<dd>知识产权代理服务</dd>
			</dl>
			<dl>
				<dd>知识产权管理</dd>
				<dd>知识产权评估</dd>
				<dd>知识产权培训</dd>
				<dd>知识产权咨询</dd>
			</dl>
			<dl>
				<dd>专利超市</dd>
				<dd>商标超市</dd>
				<dd>版权超市</dd>
			</dl>
			<dl>
				<dd>知识产权投资交易中心</dd>
				<dd>军民融合技术交易中心</dd>
				<dd>校企研服务平台</dd>
				<dd>数字企业服务平台</dd>
				<dd>艺术品身份证信息库</dd>
			</dl>
			<dl>
				<dt>关于北纬三十加速器</dt>
				<dd>公司介绍</dd>
				<dd>最新动态</dd>
				<dd>加入我们</dd>
				<dd>联系我们</dd>
			</dl>
		</div>
		<hr />
		<div class="after">
			<div class="flex-column-js-sb">
				<p>
					<!-- <span>ICP证：湘B2-202000**</span> -->
					<a href="https://beian.miit.gov.cn"  target='_blank'>ICP备案号：湘ICP备2021001272号-1</a>
					<!-- https://beian.miit.gov.cn -->
					<!-- <span>湘公网安备：</span> -->
				</p>
				<p>公司名称：湖南北纬三十知识产权服务有限公司</p>
				<p>Copyright© 2020 - 2022 常德经济技术开发区北纬三十知识产权服务有限公司 版权所有. 隐私权政策</p>
			</div>
			<div class="right">
				<p class="title">分享到：</p>
				<ul class="flex">
					<li><img src="@/assets/images/homepage/icon_xinlang.png" alt="" /></li>
					<li><img src="@/assets/images/homepage/icon_tenx.png" alt="" /></li>
					<li><img src="@/assets/images/homepage/icon_QQ.png" alt="" /></li>
					<li><img src="@/assets/images/homepage/icon_weixin.png" alt="" /></li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {},
	components: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
#bottom-footer {
	// padding: 55px 170px 36px 170px;
	padding-top: 55px;
	padding-bottom: 36px;
	background-color: #676767;
	color: #ffffff;
	.logo {
		width: 416px;
		height: 36px;
		margin-right: auto;
		// margin-right: 70px;
	}
	.logo ~ dl {
		margin-left: 30px;
		dt {
			margin-bottom: 1rem;
		}
		dd {
			font-size: 12px;
			margin-bottom: 0.5rem;
		}
	}
	hr {
		margin: 100px 0;
	}
	.after {
		display: grid;
		grid-template-columns: 3fr 1fr;
		.flex-column-js-sb span {
			margin-right: 100px;
		}
		.right {
			// margin-left: 400px;
			.title {
				margin-bottom: 1rem;
			}
			li {
				padding-right: 1rem;
			}
		}
	}
}
</style>
