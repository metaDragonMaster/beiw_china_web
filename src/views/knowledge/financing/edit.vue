<template>
	<div class="limit-max-width view">
		<el-card>
			<el-form ref="Form" :model="Form" :rules="Rules" inline label-position="right" label-width="8rem">
				<h1 class="form-type-title">知识产权融资服务表单</h1>
				<el-form-item prop="name" label="联系人昵称"><el-input v-model="Form.name"></el-input></el-form-item>
				<el-form-item prop="phone" label="联系电话"><el-input v-model="Form.phone"></el-input></el-form-item>
				<el-form-item prop="projectName" label="项目名称"><el-input v-model="Form.projectName"></el-input></el-form-item>
				<el-form-item prop="email" label="邮箱"><el-input v-model="Form.email"></el-input></el-form-item>
				<el-form-item prop="enterprise" label="融资企业"><el-input v-model="Form.enterprise"></el-input></el-form-item>
				<el-form-item prop="financingSubject" label="融资标的"><el-input v-model="Form.financingSubject"></el-input></el-form-item>
				<el-form-item prop="subjectIntroduce" label="项目介绍">
					<el-input v-model.trim="Form.subjectIntroduce" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
			</el-form>
			<el-button class="submit-button" type="primary" @click="submit">提交表单</el-button>
		</el-card>
	</div>
</template>
<script>
import Api from '@/api/rz.js';
export default {
	data() {
		return {
			Form: {
				email: '',//邮箱
				enterprise: '',//融资企业
				financingSubject: '',//融资标的
				name: '', //联系人名称
				phone: '', //联系电话
				projectName: '', //项目名称
				subjectIntroduce: '' //项目及转化需求介绍
			},
			Rules: {
				email: [{ required: true, message: '请输入邮箱', trigger: 'blur' }],
				enterprise: [{ required: true, message: '请输入融资企业', trigger: 'blur' }],
				financingSubject: [{ required: true, message: '请输入融资标的', trigger: 'blur' }],
				name: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
				phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
				projectName: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
				subjectIntroduce: [{ required: true, message: '请输入内容', trigger: 'blur' }]
			},
		};
	},
	methods: {
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let { code, data, msg } = await Api.add(this.Form);
					if (code == 10200) {
						this.$refs['Form'].resetFields();
						this.$confirm('上传成功，是否进入知识产权融资服务?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'success'
						}).then(() => {
							this.$routerUtil.toPath('/knowledge/financing');
						});
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
	margin-left: 8rem;
}
</style>
