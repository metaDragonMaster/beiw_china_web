<template>
	<div class="limit-max-width">
		<div class="content ">
			<img src="@/assets/images/homepage/logo_lan.png" alt="" class="logo" />
			<h1 class="logo-title">注册会员</h1>
			<div class="form-box">
				<form action="" method="post">
					<div class="form-item">
						<label for="phone"><img src="../../../assets/images/register/icon_shouji.png" alt="" /></label>
						<input type="text" name="phone" placeholder="请输入手机号" v-model="Form.phone" />
					</div>
					<div class="form-item">
						<label for="verify"><img src="../../../assets/images/register/icon_yanzm.png" alt="" /></label>
						<input type="text" name="verify" placeholder="请输入验证码" v-model="Form.verify" />
						<button class="code">6HMB</button>
					</div>
					<div class="form-item">
						<label for="duanx"><img src="../../../assets/images/register/icon_dongtm.png" alt="" /></label>
						<input type="text" name="duanx" placeholder="请输入短信动态号" v-model="Form.duanx" />
						<button class="code">发送动态码</button>
					</div>
					<div class="form-item">
						<label for="password"><img src="../../../assets/images/register/icon_mim.png" alt="" /></label>
						<input type="password" name="password" placeholder="请设置密码" v-model="Form.password" />
					</div>
					<el-checkbox v-model="checked">
						<p class="read">
							我已阅读并接受
							<span>《用户协议》</span>
						</p>
					</el-checkbox>
					<br />
					<button type="submit" class="submit-button">注册</button>
				</form>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			checked: false,
			Form: {
				phone: '',
				verify: '',
				duanx: '',
				password: ''
			}
		};
	},
	components: {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.logo {
	margin: 0 auto 22px auto;
	width: 209px;
}
.logo-title {
	text-align: center;
	font-size: 26px;
	padding-bottom: 1rem;
	box-shadow: 0 18px 18px rgba($color: #b3b3b3, $alpha: 0.1);
}
.content {
	margin-top: 100px;
	margin-bottom: 100px;
	box-shadow: 0px 0px 13px 9px rgba(229, 229, 229, 0.75);
	padding: 20px 0;
}
.read {
	color: #434343;
	span {
		color: #e60012;
	}
}
.form-box {
	display: flex;
	justify-content: center;
	padding: 100px;
	.form-item {
		display: grid;
		grid-template-columns: 30px 140px 74px;
		background-color: #f2f2f2;
		border: 1px solid #a0a0a0;
		&:not(:last-child) {
			margin-bottom: 28px;
		}
		img {
			margin: 3px;
		}
		input {
			border: 0;
			background-color: transparent;
		}
		.code {
			background-color: #a0a0a0;
		}
	}
}
.submit-button {
	padding-left: 2rem;
	letter-spacing: 2rem;
	font-size: 20px;
	background-color: #e60012;
	width: 202px;
	height: 50px;
	color: #fff;
	margin: 50px auto 0 auto;
	display: block;
	box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.3);
}
</style>
