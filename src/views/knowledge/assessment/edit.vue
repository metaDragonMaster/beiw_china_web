<template>
	<div class="limit-max-width view">
		<el-card>
			<el-form ref="Form" :model="Form" :rules="Rules" inline label-position="right" label-width="6rem">
				<h1 class="form-type-title">知识产权评估服务表单</h1>
				<el-form-item prop="name" label="联系人"><el-input v-model="Form.name"></el-input></el-form-item>
				<el-form-item prop="phone" label="联系电话"><el-input v-model="Form.phone"></el-input></el-form-item>
				<el-form-item prop="address" label="地址"><el-input v-model="Form.address"></el-input></el-form-item>
				<el-form-item prop="enterpriseName" label="企业简介"><el-input v-model="Form.enterpriseName"></el-input></el-form-item>
				<h1 class="form-type-title">上传封面</h1>
					<el-form-item prop="image" label="企业图片"><uploadImg ref="UploadImg" moduleName="web" v-model="Form.image"></uploadImg></el-form-item>
				<h1 class="form-type-title">编辑内容</h1>
				<el-form-item prop="enterpriseDetails" label="企业详情">
					<el-input v-model.trim="Form.enterpriseDetails" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
			</el-form>
			<el-button class="submit-button" type="primary" @click="submit">提交表单</el-button>
		</el-card>
	</div>
</template>
<script>
import UploadImg from '@/components/UploadImg/index.vue';
import Api from '@/api/pg.js';
export default {
	data() {
		return {
			Form: {
				address: '',
				enterpriseDetails: '',
				enterpriseName: '',
				image: '',
				name: '',
				phone: ''
			},
			Rules: {
				address: [{ required: true, message: '请输入地址', trigger: 'blur' }],
				enterpriseDetails:[{ required: true, message: '请输入企业详情', trigger: 'blur' }],
				enterpriseName:[{ required: true, message: '请输入企业名称', trigger: 'blur' }],
				image:[{ required: true, message: '请上传图片', trigger: 'change' }],
				name:[{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
				phone:[{ required: true, message: '请输入联系电话', trigger: 'blur' }],
			},
			selectModels: [
				{
					value: 1,
					label: '与相关企业合作'
				},
				{
					value: 2,
					label: '单独成立企业落户产业园转化'
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
						this.$refs['Form'].resetFields();
						this.$confirm('上传成功，是否进入知识产权评估服务?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'success'
						}).then(() => {
							this.$routerUtil.toPath('/knowledge/assessment');
						});
					} else {
						this.$message.warning(msg);
					}
				} else {
					console.log('error submit!!');
					return false;
				}
			});
		},
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
	margin-left: 6rem;
}
</style>
