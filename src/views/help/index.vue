<template>
	<div class="view limit-max-width">
		<img src="../../assets/images/information/logo_kuaibao.png" alt="" class="logo" />
		<h1 class="logo-title">帮助中心</h1>
		<ol class="tabs flex">
			<li v-for="item in tabs" :class="{ active: active == item.value }" :key="item.value">{{ item.label }}</li>
		</ol>
		<div class="swiper-container">
			<ul class="swiper-wrapper">
				<li class="swiper-slide" v-for="(item, index) in list" :key="index">
					<div class="info">
						<img :src="item.src" />
						<div class="swiper-info">
							<div class="swiper-title">{{ item.text }}</div>
						</div>
					</div>
				</li>
			</ul>
			<div class="swiper-button-next" style="--swiper-navigation-size: 26px"></div>
			<div class="swiper-button-prev" style="--swiper-navigation-size: 26px"></div>
			<div class="swiper-pagination"></div>
		</div>
	</div>
</template>
<script>
import Swiper from 'swiper/swiper-bundle.min.js';
import 'swiper/swiper-bundle.min.css';
export default {
	data() {
		return {
			active: 1,
			tabs: [{ value: 1, label: '常见问题' }, { value: 2, label: '新手必读' }, { value: 3, label: '收费标准' }, { value: 4, label: '视频演示' }],
			list: [
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' },
				{ src: require('@/assets/images/help/img.png'), text: '如何注册申报知识产权' }
			]
		};
	},
	mounted() {
		this.$nextTick(() => {
			this.swiperInit();
		});
	},
	methods: {
		swiperInit() {
			let swiperOption = {
				el: '.swiper-container',
				loop: true, //循环
				// autoplay : true,
				slidesPerView: 4,
				// autoplay: {
				// 	delay: 3000 //自动切换的时间间隔，单位ms
				// },
				pagination: {
					//分页符
					el: '.swiper-pagination',
					clickable: true //此参数设置为true时，点击分页器的指示点分页器会控制Swiper切换。
				},
				navigation: {
				      nextEl: '.swiper-button-next',
				      prevEl: '.swiper-button-prev',
				    },
			};
			this._swiper = new Swiper('.swiper-container', swiperOption);
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	padding-bottom: 120px;
}
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
		color: #0068b7;
	}
}
.swiper-container {
	padding-bottom: 80px;
}
.swiper-slide {
	.info {
		width: fit-content;
		margin:  0 auto;
		border-radius: 1rem;
		box-shadow: 0px 4px 8px 0px rgba(214, 220, 223, 0.75);
		.swiper-info {
			text-align: center;
			padding: 18px;
		}
	}
}
.swiper-button-next {
	right: 0;
}
.swiper-button-prev {
	left: 0;
}
</style>
