<template>
	<div class="limit-max-width view">
		<div class="content ">
			<img src="@/assets/images/homepage/logo_lan.png" alt="" class="logo" />
			<h1 class="logo-title">会员登录</h1>
			<el-form ref="Form" :model="Form" :rules="Rules" class="form-dom">
				<el-form-item prop="phoneNo" >
					<el-input v-model="Form.phoneNo" clearable placeholder="请输入手机号码" >
						<template slot="prepend">
							<img src="@/assets/images/register/icon_shouji.png" alt="" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="password" >
					<el-input v-model="Form.password" type="password" clearable placeholder="请输入密码">
						<template slot="prepend">
							<img src="@/assets/images/register/icon_mim.png" alt="" />
						</template>
					</el-input>
				</el-form-item>
				<button type="button" class="submit-button"  :class="{'is-disabled':loading == true}" @click="submit" >
				<!-- <button type="button" class="submit-button" @click="submit" :disabled="loading"> -->
					<i class="el-icon-loading" v-show="loading"></i>
					<span>
						登
					</span>
					<span>
						录
					</span>
				</button>
			</el-form>
		</div>
	</div>
</template>
<script>
import Api from '@/api/user.js';
import REGEXP from '@/utils/RegExpUtil.js';
import {mapActions,mapGetters} from "vuex"
export default {
	data() {
		return {
			checked: false,
			loading:false,
			// Form: {
			// 	phoneNo: '15581609046',
			// 	password: '123456'
			// 	// password: 'zeng123456'
			// },
			Form: {
				phoneNo: '',
				password: ''
			},
			Rules: {
				phoneNo: [
					{ required: true, message: '请输入手机号码', trigger: 'blur' },
					{
						//
						validator: (rule, value, callback) => {
							if (REGEXP.phone(value)) {
								callback(new Error('请输入正确的手机号码'));
							} else {
								callback();
							}
						},
						trigger: 'blur'
					}
				],
				imageAuth: [{ required: true, message: '请输入图形验证码', trigger: 'blur' }],
				smsCode: [{ required: true, message: '请输入短信验证码', trigger: 'blur' }],
				password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
			}
		};
	},
	components: {},
	mounted() {
		// this.getOss()
	},
	methods: {
		...mapActions({
			'loginByPassword':'user/loginByPassword'
		}),
		// getOss() {
		// 	Api.getOssPolicy()
		// },
		submit() {
			if(this.loading == true) return;
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					this.loading = true;
					let params = {
						...this.Form
					};
					// let { code, data, msg } = await Api.loginByPassword(params);
					let { code, data, msg } = await this.$store.dispatch('user/loginByPassword',params).finally(()=>{
						this.loading = false;
					});
					console.log(code,data,msg);
					this.success(code, msg);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		success(code, msg) {
			if (code == 10200) {
				this.$routerUtil.toPath('/');
				this.$message.success(msg);
			} else {
				this.$message.warning(msg);
			}
		},
	}
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
.view {
	padding-top: 100px;
}
.content {
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
.submit-button {
	// padding-left: 2rem;
	// letter-spacing: 2rem;
	font-size: 20px;
	background-color: #e60012;
	width: 202px;
	height: 50px;
	color: #fff;
	margin: 50px auto 0 auto;
	display: block;
	box-shadow: 0 0 10px 2px rgba($color: #000000, $alpha: 0.3);
	span{
		padding: 1rem;
	}
}
.is-disabled {
	cursor: no-drop;
	background-color: rgba($color: #e60012, $alpha: 0.7);
}
.form-dom {
	width: 332px;
	margin: 60px auto 90px auto;
}
::v-deep .el-input .el-input__inner {
	height: 46px;
}
::v-deep .el-input .el-input-group__prepend {
	padding: 0;
	width: 3rem;
	img {
		margin: auto;
	}
}
::v-deep .el-input .el-input-group__append button{
	font-size: 14px;
}
</style>
