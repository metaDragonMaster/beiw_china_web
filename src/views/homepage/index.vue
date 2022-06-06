<template>
	<div id="homepage">
		<div class="banner">
			<h4>北纬三十加速器</h4>
			<h1>创造神奇的智慧链</h1>
			<div class="select">
				<input type="text" />
				<!-- <button @click="$routerUtil.newWindow('http://www.hnipo.net/')">专利检索</button> -->
				<button @click="$routerUtil.newWindow('http://pat.hnipo.net:8088/mytreesubject.do')">专利检索</button>
			</div>
		</div>
		<div class="no-1">
			<img class="logo" src="@/assets/images/homepage/logo_lan.png" alt="" />
			<p class="no-1-title">——北纬三十全球知识产权联盟∙知识产权服务链——</p>
			<ul class="flex-center-js-sb">
				<li>
					<img src="@/assets/images/homepage/img1.png" alt="" />
					<h3>全球知识产权服务链</h3>
					<span>以知识产权服务+互联网+区块链技术+人工智能技术打造的知识产权服务主链，服务功能强大。</span>
				</li>
				<li>
					<img src="@/assets/images/homepage/img2.png" alt="" />
					<h3>全球知识产权服务链</h3>
					<span>以知识产权服务+互联网+区块链技术+人工智能技术打造的知识产权服务主链，服务功能强大。</span>
				</li>
				<li>
					<img src="@/assets/images/homepage/img3.png" alt="" />
					<h3>全球知识产权服务链</h3>
					<span>以知识产权服务+互联网+区块链技术+人工智能技术打造的知识产权服务主链，服务功能强大。</span>
				</li>
				<li>
					<img src="@/assets/images/homepage/img4.png" alt="" />
					<h3>全球知识产权服务链</h3>
					<span>以知识产权服务+互联网+区块链技术+人工智能技术打造的知识产权服务主链，服务功能强大。</span>
				</li>
			</ul>
		</div>
		<div class="no-2">
			<p class="no-title">加速器产品与服务</p>
			<ul class="grid">
				<li v-for="item in no2List" class="flex-column-js-sb" title="点击图片跳转到相应页面">
					<p>{{ item.p }}</p>
					<p>{{ item.span }}</p>
					<img :src="item.src" alt=""  @click="jump(item.path)" />
				</li>
			</ul>
		</div>
		<div class="no-3">
			<p class="no-title">公司动态</p>
			<ul class="flex-js-sard">
				<li v-for="item in no3List">
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
			<button class="submit-button" @click="$routerUtil.toPath('/information/details')">更多资讯</button>
		</div>
		<!-- <div class="no-4">
			<p class="title">让我们一起体验北纬三十加速器的产品与服务</p>
			<el-form ref="no4Form" :model="no4Form" :rules="no4Rules" label-position="top" inline>
				<el-form-item prop="name" label="您的姓名"><el-input v-model="no4Form.name"></el-input></el-form-item>
				<el-form-item prop="phoneNO" label="您的手机号码"><el-input v-model="no4Form.phoneNO"></el-input></el-form-item>
				<el-form-item prop="email" label="您的邮箱"><el-input v-model="no4Form.email"></el-input></el-form-item>
				<el-form-item prop="comName" label="公司全称"><el-input v-model="no4Form.comName"></el-input></el-form-item>
				<el-form-item prop="comPhoneNo" label="公司联系电话"><el-input v-model="no4Form.comPhoneNo"></el-input></el-form-item>
				<el-form-item prop="job" label="您的职务"><el-input v-model="no4Form.job"></el-input></el-form-item>
			</el-form>
			<button class="submit-button">立即开通免费账号</button>
		</div>
		<div class="no-5 limit-max-width">
			<p class="title">扫码下载北纬三十加速器客户端</p>
			<ul class="flex-center-js-sard">
				<li>
					<img src="../../assets/images/homepage/icon_lanz.png" alt="">
					<span>安卓系统手机下载</span>
					<br>
					<img class="code" src="../../assets/images/homepage/icon_anzhuo.png" alt="">
				</li>
				<li>
					<img src="../../assets/images/homepage/icon_lios.png" alt="">
					<span>安卓系统手机下载</span>
					<br>
					<img class="code" src="../../assets/images/homepage/icon_ios.png" alt="">
				</li>
			</ul>
		</div> -->
	</div>
</template>
<script>
export default {
	data() {
		return {
			no2List: [
				{
					p: '专利数据库',
					span: '多种方式全球海量专利信息检索',
					src: require('@/assets/images/homepage/icon_shujk.png'),
					path: '/transaction/patentDataBase'
				},
				{
					p: '知识产权融资服务',
					span: '提供知识产权质押融资服务',
					src: require('@/assets/images/homepage/icon_rongzfw.png'),
					path: '/knowledge/financing'
				},
				{
					path: '/knowledge/conversion',
					p: '知识产权转化服务',
					span: '知识产权产品转化与企业孵化服务',
					src: require('@/assets/images/homepage/icon_zhuanhfw.png')
				},
				{
					path: '/knowledge/lawProtection',
					p: '知识产权代理/法律服务',
					span: '专利、商标、版权注册代理、法律维权代理',
					src: require('@/assets/images/homepage/icon_dailfw.png')
				},
				{
					path: '/supermarket/patent',
					p: '专利超市',
					span: '汇聚全领域热门专利',
					src: require('@/assets/images/homepage/icon_zhuanlcs.png')
				},
				{
					path: '/supermarket/trademark',
					p: '商标超市',
					span: '海量注册商标与商标图案',
					src: require('@/assets/images/homepage/icon_shangbcs.png')
				},
				{
					path: '/supermarket/copyright',
					p: '版权超市',
					span: '个人、企业、高校、研究机构知识产权托管服务',
					src: require('@/assets/images/homepage/icon_banqcs.png')
				},
				{
					path: '',
					p: '知识产权线上交易',
					span: '知识产权投融资交易服务平台',
					src: require('@/assets/images/homepage/icon_jiaoy.png')
				},
				{
					path: '',
					p: '知识产权管理系统',
					span: '节省企业专利管理80%时间',
					src: require('@/assets/images/homepage/icon_guanlxt.png')
				},
				{
					path: '/knowledge/assessment',
					p: '知识产权评估服务',
					span: '知识产权评估机构与专家数据库服务',
					src: require('@/assets/images/homepage/icon_pinggfw.png')
				},
				{
					path: '',
					p: '知识产权培训',
					span: '为企业培养全能型知识产权管理人才',
					src: require('@/assets/images/homepage/icon_peix.png')
				},
				{
					path: '',
					p: '知识产权咨询服务',
					span: '知识产权全域咨询服务',
					src: require('@/assets/images/homepage/icon_zixfw.png')
				},
				{
					path: '/service/0/list',
					p: '校企研服务平台',
					span: '高校、研究机构、企业知识产权及人才无缝对接',
					src: require('@/assets/images/homepage/icon_xiaoqi.png')
				},
				{
					path: '',
					p: '数字企业服务系统',
					span: '数字企业注册登记、运营服务平台',
					src: require('@/assets/images/homepage/icon_shuzqy.png')
				},
				{
					path: '',
					p: '军民融合技术交易服务',
					span: '热门涉密军民融合技术投资交易',
					src: require('@/assets/images/homepage/icon_junmrh.png')
				},
				{
					path: '',
					p: '艺术品身份证管理系统',
					span: '为艺术品建立版权与产权身份证数据库',
					src: require('@/assets/images/homepage/icon_yisp.png')
				}
			],
			no3List: [
				{
					src: require('@/assets/images/homepage/img5.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替'
				},
				{
					src: require('@/assets/images/homepage/img6.png'),
					time: '2020-01-18',
					title: '北纬三十加速器项目入选常德入选常德入选常德',
					subTitle: '2020年1月18日，常德市政府常务会议决定会议决定会议决定'
				},
				{
					src: require('@/assets/images/homepage/img5.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替'
				},
				{
					src: require('@/assets/images/homepage/img5.png'),
					time: '2020-02-26',
					title: '北纬三十加速器入驻常德经济常德经济常德经济',
					subTitle: '“屏对屏”代替“面对面”，“线连线”代替代替代替代替代替代替'
				}
			],
			no4Form: {
				name: '',
				phoneNO: '',
				email: '',
				comName: '',
				comPhoneNo: '',
				job: ''
			},
			no4Rules: {
				name: [{ required: true, message: '请输入您的姓名', trigger: 'blur' }],
				phoneNO: [{ required: true, message: '请输入您的手机号码', trigger: 'blur' }],
				email: [{ required: true, message: '请输入您的邮箱', trigger: 'blur' }],
				comName: [{ required: true, message: '请输入公司全称', trigger: 'blur' }],
				comPhoneNo: [{ required: true, message: '请输入公司联系电话', trigger: 'blur' }],
				job: [{ required: true, message: '请输入您的职务', trigger: 'blur' }]
			}
		};
	},
	methods: {
		jump(path) {
			if (path && path != '') {
				// console.log('link', path);
				this.$routerUtil.toPath(path);
			} else {
				console.log('没有link', path);
				this.$message.warning("正在开发中...");
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.banner {
	background-image: url(../../assets/images/homepage/img_shouye.png);
	height: 600px;
	color: #ffffff;
	padding-top: 92px;
	h4 {
		font-size: 32px;
	}
	h1 {
		font-size: 52px;
		margin-top: 32px;
	}
	h1,
	h4 {
		margin-left: 387px;
	}
	.select {
		width: fit-content;
		margin: 300px auto 38px auto;
		input {
			line-height: 40px;
			width: 400px;
			border-color: #f00303;
			border-width: 1px;
			border-style: solid;
			border-radius: 2px;
		}
		button {
			line-height: 40px;
			background-color: #f00303;
			// letter-spacing: 1rem;
			// padding-left: 1rem;
			padding: 0 1rem;
			margin-left: 5px;
			border-radius: 2px;
		}
	}
}
.no-title {
	text-align: center;
	padding: 72px;
	font-size: 48px;
	font-weight: bold;
	color: #434343;
	letter-spacing: 1rem;
}
.no-1 {
	padding-top: 85px;
	.logo {
		width: fit-content;
		margin: 0 auto;
		display: block;
	}
	.no-1-title {
		text-align: center;
		margin-top: 24px;
		font-size: 27px;
	}
	.flex-center-js-sb {
		padding: 0 230px;
		margin-top: 52px;
		flex-wrap: wrap;
		li {
			width: 300px;
			padding: 24px 18px;
			margin-bottom: 1rem;
			border-radius: 8px;
			box-shadow: 0px 8px 19px 3px rgba(203, 204, 207, 0.65);
			img {
				margin-bottom: 24px;
				text-align: center;
				display: block;
				margin-left: auto;
				margin-right: auto;
			}
			h3 {
				margin-bottom: 20px;
				text-align: center;
			}
			span {
				text-align: left;
				color: #7d7d7d;
				line-height: 30px;
			}
		}
	}
}
.no-2 {
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		background-color: #d6d7dc;
		grid-gap: 1px;
		li {
			padding: 30px 116px 30px 116px;
			background-color: #f5f7ff;
		}
		img {
			width: fit-content;
			margin-left: auto;
			cursor: pointer;
		}
	}
}
.no-3 {
	ul {
		padding-bottom: 47px;
	}
	li {
		width: 360px;
		border: 1px solid #d2d2d2;
		img {
			width: 100%;
		}
		.info {
			padding: 10px 33px 20px 44px;
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
.no-4 {
	background-color: #fafafa;
	padding: 1px 350px;
	.title {
		text-align: center;
		padding: 72px 0 60px 0;
		font-size: 27px;
	}
	.el-form {
		padding-left: 1rem;
	}
	.el-input {
		width: 360px;
		margin-right: 1rem;
	}
}
.no-5 {
	.title {
		text-align: center;
		padding: 72px 0 60px 0;
		font-size: 27px;
	}
	ul {
		padding-bottom: 54px;
		span {
			margin-left: 1rem;
		}
		.code {
			margin-top: 1rem;
		}
	}
}
</style>
