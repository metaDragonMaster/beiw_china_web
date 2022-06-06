<template>
	<div class="limit-max-width view">
		<div class="content ">
			<img src="@/assets/images/homepage/logo_lan.png" alt="" class="logo" />
			<h1 class="logo-title">注册会员</h1>
			<el-form ref="Form" :model="Form" :rules="Rules" class="form-dom">
				<el-form-item prop="phoneNo">
					<el-input v-model="Form.phoneNo" clearable placeholder="请输入手机号码">
						<template slot="prepend">
							<img src="@/assets/images/register/icon_shouji.png" alt="" />
						</template>
					</el-input>
				</el-form-item>
				<el-form-item prop="imageAuth">
					<!-- <el-input v-model="Form.smsCode" clearable placeholder="请输入验证码">
						<template slot="prepend">
							<img src="../../../assets/images/register/icon_yanzm.png" alt="" />
						</template>
						<template slot="append">6HMB</template>
					</el-input> -->
					<el-input v-model="Form.imageAuth" clearable placeholder="请输入验证码" class="image-auth-src">
						<template slot="prepend">
							<img src="@/assets/images/register/icon_yanzm.png" alt="" />
						</template>
						<template slot="append">
							<button v-show="imageAuthSrcBase64.length <= 0" type="button" @click="submitSendImageAuth">获取图形码</button>
							<img v-if="imageAuthSrcBase64.length > 0" @click="submitSendImageAuth" :src="imageAuthSrc" alt="" />
						</template>
						<!-- <button slot="append">获取图形码</button> -->
					</el-input>
				</el-form-item>
				<el-form-item prop="smsCode">
					<el-input v-model="Form.smsCode" clearable placeholder="请输入短信验证码">
						<template slot="prepend">
							<img src="@/assets/images/register/icon_dongtm.png" alt="" />
						</template>
						<div slot="append" :disabled="verifyType" class="smsCodeButton" :class="{ 'is-loading': loading == true, 'is-disabled': verifyType }" @click="submitSendVerify">
							<i :class="{ 'el-icon-loading': loading == true }"></i>
							{{ verifyType ? `${timer}s` : '获取验证码' }}
						</div>
					</el-input>
					<!-- <SendVerifyInput :phoneNo="Form.phoneNo" :imageAuth="Form.imageAuth" v-model="Form.smsCode" @submit="submitSendVerify"></SendVerifyInput> -->
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="Form.password" show-password clearable placeholder="请输入密码">
						<template slot="prepend">
							<img src="@/assets/images/register/icon_mim.png" alt="" />
						</template>
					</el-input>
				</el-form-item>
				<el-checkbox v-model="checked">
					<p class="read">
						我已阅读并接受
						<span>《用户协议》</span>
					</p>
				</el-checkbox>
				<button type="button" class="submit-button" @click="submit">注册</button>
			</el-form>
		</div>
	</div>
</template>
<script>
import Api from '@/api/user.js';
import REGEXP from '@/utils/RegExpUtil.js';
import SendVerifyInput from '../modules/SendVerifyInput.vue';
export default {
	data() {
		return {
			checked: false,
			timer: 0,
			maxtimer: 60,
			loading:false,
			Form: {
				phoneNo: '',
				imageAuth: '',
				smsCode: '',
				password: ''
			},
			imageAuthSrcBase64: '',
			// Form: {
			// 	phoneNo: '15581609046',
			// 	imageAuth: '',
			// 	smsCode: '707050',
			// 	password: '123456'
			// },
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
	beforeDestroy() {
		this.clearTimer();
	},
	components: {
		SendVerifyInput
	},
	computed: {
		imageAuthSrc() {
			return 'data:image/png;base64,' + this.imageAuthSrcBase64;
		},
		verifyType() {
			return !!this.timer;
		}
	},
	methods: {
		clearTimer() {
			this.timer = 0;
		},
		settimer() {
			this.timer = this.maxtimer;
			let time = setInterval(() => {
				--this.timer;
				console.log(this.timer);
				if (this.timer <= 0) {
					this.timer = null;
					clearInterval(time);
				}
			}, 1000);
		},
		async submitSendImageAuth() {
			console.log('submitSendImageAuth');
			this.$refs['Form'].validateField('phoneNo', res => {
				if (res.length <= 0) {
					this.getImageCode();
				}
			});
		},
		async getImageCode() {
			let params = {
				phoneNo: this.Form.phoneNo
			};
			let { code, data, msg } = await Api.getImageCode(params);
			this.imageAuthSrcBase64 = data;
		},
		submitSendVerify() {
			if(this.loading||this.timer>0) return;
			let valids = ['phoneNo', 'imageAuth'];
			let res = true;
			valids.map(item => {
				this.$refs['Form'].validateField(item, res => {
					if (res.length > 0) {
						res = false;
					}
				});
			});
			if(res) {
				this.getCodeByImageAuth();
			}
		},
		async getCodeByImageAuth() {
			this.loading = true;
			let params = {
				phoneNo: this.Form.phoneNo,
				imageAuth: this.Form.imageAuth,
			};
			let { code, data, msg } = await Api.getCodeByImageAuth(params).finally(e=>this.loading = false);
			console.log(code,data,msg);
			if (code == 10200) {
				this.Form.smsCode = data
				this.settimer();
			} else {
				this.$message.warning(msg)
			}
		},

		submit() {
			if(!this.checked) {
				this.$message.warning('请阅读《用户协议》')
				return;
			}
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let params = {
						...this.Form
					};
					let { code, data, msg } = await Api.registry(params);
					this.success(code, msg);
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
		success(code, msg) {
			if (code == 10200) {
				this.$routerUtil.toPath('/userSign/login');
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
.form-dom {
	width: 332px;
	margin: 60px auto 90px auto;
}
.image-auth-src {
	::v-deep.el-input-group__append {
		padding: 0;
	}
	::v-deep.el-input-group__append button {
		margin: 0 20px;
	}
	::v-deep.el-input-group__append img {
		width: 110px;
		cursor: pointer;
	}
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
::v-deep .el-input .el-input-group__append button {
	font-size: 14px;
}
.smsCodeButton {
	cursor: pointer;
	&.is-loading {
		opacity: 0.6;
		cursor: not-allowed;
	}
	&.is-disabled {
		cursor: not-allowed;
		&:hover {
			opacity: 0.6;
		}
	}
}
</style>
