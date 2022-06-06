<template>
	<div class="limit-max-width view">
		<el-card>
			<el-form ref="Form" :model="Form" :rules="Rules" label-width="6rem" inline>
				<h1 class="form-type-title">校企研服务平台</h1>
				<el-form-item prop="name" label="平台名称"><el-input v-model.trim="Form.name"></el-input></el-form-item>
				<el-form-item prop="contactName" label="联系人名称"><el-input v-model.trim="Form.contactName"></el-input></el-form-item>
				<el-form-item prop="contactPhone" label="联系电话"><el-input v-model.trim="Form.contactPhone"></el-input></el-form-item>
				<el-form-item prop="address" label="地址"><el-input v-model.trim="Form.address"></el-input></el-form-item>
				<el-form-item prop="platformType" label="平台类型">
					<el-select v-model="Form.platformType" placeholder="请选择">
						<el-option v-for="item in selectPatentType" :key="item.value" :label="item.label" :value="item.value"></el-option>
					</el-select>
				</el-form-item>
				<h1 class="form-type-title">简介</h1>
				<el-form-item prop="introduction" label="简介">
					<el-input v-model.trim="Form.introduction" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
				<h1 class="form-type-title">添加图片</h1>
				<el-form-item prop="logo" label="添加图片">
					<!-- {{ Form.logo }} -->
					<UploadImg ref="UploadImg" moduleName="web" v-model="Form.logo"></UploadImg>
				</el-form-item>
				<br />
				<el-button class="submit-button" type="primary" @click="submit">提交表单</el-button>
			</el-form>
			<!-- {{Form}} -->
		</el-card>
	</div>
</template>
<script>
import UploadImg from '@/components/UploadImg/index.vue';
import Api from '@/api/platform.js';
export default {
	data() {
		return {
			// Form: {
			// 	attr: '',
			// 	img:"",
			// },
			Form: {
				address: '', //地址
				contactName: '', //联系人名称
				contactPhone: '', //联系电话
				introduction: '', //简介
				logo: '', //平台logo
				name: '', //平台名称
				platformType: null //平台类型
			},
			Rules: {
				address: [{ required: true, message: '请输入地址', trigger: 'blur' }], //地址
				contactName: [{ required: true, message: '请输入联系人名称', trigger: 'blur' }], //联系人名称
				contactPhone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }], //联系电话
				introduction: [{ required: true, message: '请输入简介', trigger: 'blur' }], //简介
				logo: [{ required: true, message: '请上传图片', trigger: 'blur' }], //平台logo
				name: [{ required: true, message: '请输入平台名称', trigger: 'blur' }], //平台名称
				platformType: [{ required: true, message: '请选择平台类型', trigger: 'blur' }] //平台类型
			},
			selectPatentType: [
				{
					value: 0,
					label: '高校转化中心'
				},
				{
					value: 1,
					label: '企业数据库'
				},
				{
					value: 2,
					label: '研究院所'
				}
			]
		};
	},
	components: {
		UploadImg
	},
	methods: {
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let { code, data, msg } = await Api.add(this.Form);
					if (code == 10200) {
						this.$routerUtil.toPath('/service/0/list');
					} else {
						this.$message.warning(msg);
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	padding-top: 1rem;
	padding-bottom: 1rem;
}
.form-type-title {
	$color: #002e73;
	font-size: 24px;
	color: $color;
	border-bottom: 1px solid $color;
	padding: 20px 0;
	margin-bottom: 35px;
}
.el-input,
.el-input-number,
.el-select {
	min-width: 260px;
}
.el-textarea {
	width: 1000px;
	display: block;
}
.submit-button {
	margin-left: 96px;
}
</style>
