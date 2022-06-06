<template>
	<div class="limit-max-width">
		<img src="@/assets/images/information/logo_kuaibao.png" alt="" class="logo" />
		<h1 class="logo-title">北纬三十资讯快报</h1>
		<ol class="tabs flex">
			<li v-for="item in tabs" :class="{ active: active == item.value }" :key="item.value">{{ item.label }}</li>
		</ol>
		<ul class="flex-js-sard">
			<li v-for="item in list">
				<img :src="item.src" alt="" />
				<div class="info">
					<time>{{ item.time }}</time>
					<div class="title ">
						<p class="font-hide">{{ item.title }}</p>
					</div>
					<span class="font-hide">{{ item.subTitle }}</span>
				</div>
			</li>
		</ul>
		<button class="submit-button" @click="$routerUtil.toName('informationList')">更多资讯</button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			active: 1,
			tabs: [{ value: 1, label: '公司资讯' }, { value: 2, label: '行业资讯' }, { value: 3, label: '国家政策' }],
			list: [
				{
					src: require('@/assets/images/information/kuaibao1.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替'
				},
				{
					src: require('@/assets/images/information/kuaibao2.png'),
					time: '2020-01-18',
					title: '北纬三十加速器项目入选常德入选常德入选常德',
					subTitle: '2020年1月18日，常德市政府常务会议决定会议决定会议决定'
				},
				{
					src: require('@/assets/images/information/kuaibao2.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替'
				},
				{
					src: require('@/assets/images/information/kuaibao2.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替线连线”代替代替代替代替代替代替线连线”代替代替代替代替代替代替'
				}
			]
		};
	},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.logo {
	margin: 0 auto 22px auto;
	padding-top: 122px;
}
.logo-title {
	text-align: center;
	margin-bottom: 130px;
}
.tabs {
	margin-bottom: 40px;
	margin-left: auto;
	margin-right: auto;
	font-size: 20px;
	justify-content: center;
	align-items: center;
	li {
		cursor: pointer;
		&:not(:last-child) {
			margin-right: 2rem;
		}
	}
	li.active {
		color: #0068B7;
	}
}
.submit-button {
	background-color: #00b7ef;
	color: #ffffff;
	box-shadow: 0px 8px 7px 1px rgba(149, 222, 244, 0.75);
	width: 250px;
	height: 62px;
	border-radius: 4px;
	margin-bottom: 55px;
	margin-left: auto;
	margin-right: auto;
	display: block;
	transition: box-shadow 0.2s;
	&:hover {
		box-shadow: 0px 0px 16px 1px rgba(149, 222, 244, 0.75);
	}
}
.flex-js-sard {
	padding-bottom: 47px;
	flex-wrap: wrap;
	li {
		width: 574px;
		border-radius: 1rem ;
		margin-bottom: 32px;
		box-shadow: 0px 7px 20px 4px rgba(229, 229, 229, 0.75);
		img {
			width: 100%;
			border-radius: 1rem 1rem 0 0;
		}
		.info {
			padding: 25px 33px 44px 44px;
			time,
			span {
				font-size: 12px;
			}
			.title {
				font-size: 20px;
				font-weight: bold;
				position: relative;
				margin: 0.25rem 0;
				&::before {
					position: absolute;
					top: 20%;
					left: -1rem;
					display: block;
					content: '';
					height: 80%;
					width: 3px;
					background-color: #db3027;
				}
			}
		}
	}
}
</style>
