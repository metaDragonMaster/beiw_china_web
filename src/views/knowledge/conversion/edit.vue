<template>
	<div class="limit-max-width view">
		<el-card>
			<!--
				conversion: 'string', //转化融资规模
				funds: 'string', //自有资金规模
				projectName: 'string', //项目名称
				subjectIntroduce: 'string' ,//项目及转化需求介绍
			-->
			<el-form ref="Form" :model="Form" :rules="Rules" inline label-position="right" label-width="8rem">
				<h1 class="form-type-title">知识产权转换服务表单</h1>
				<el-form-item prop="name" label="联系人昵称"><el-input v-model="Form.name"></el-input></el-form-item>
				<el-form-item prop="phone" label="联系电话"><el-input v-model="Form.phone"></el-input></el-form-item>
				<el-form-item prop="model" label="模式">
					<el-select v-model="Form.model"><el-option v-for="item in selectModels" :key="item.value" :value="item.value" :label="item.label"></el-option></el-select>
				</el-form-item>
				<el-form-item prop="projectName" label="项目名称"><el-input v-model="Form.projectName"></el-input></el-form-item>
				<el-form-item prop="conversion" label="转化融资规模"><el-input v-model="Form.conversion"></el-input></el-form-item>
				<el-form-item prop="funds" label="自有资金规模"><el-input v-model="Form.funds"></el-input></el-form-item>
				<br>
				<el-form-item prop="subjectIntroduce" label="项目介绍">
					<el-input v-model.trim="Form.subjectIntroduce" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
			</el-form>
			<el-button class="submit-button" type="primary" @click="submit">提交表单</el-button>
		</el-card>
	</div>
</template>
<script>
import Api from '@/api/zh.js';
export default {
	data() {
		return {
			Form: {
				conversion: '', //转化融资规模
				model: null, //模式（1.与相关企业合作；2.单独成立企业落户产业园转化）
				funds: '', //自有资金规模
				name: '', //联系人名称
				phone: '', //联系电话
				projectName: '', //项目名称
				subjectIntroduce: '' ,//项目及转化需求介绍
			},
			Rules: {
				funds: [{ required: true, message: '请输入自有资金规模', trigger: 'blur' }],
				model: [{ required: true, message: '请选择模式', trigger: 'blur' }],
				conversion: [{ required: true, message: '请输入转化融资规模', trigger: 'blur' }],
				name: [{ required: true, message: '请输入联系人姓名', trigger: 'blur' }],
				phone: [{ required: true, message: '请输入联系电话', trigger: 'blur' }],
				projectName: [{ required: true, message: '请输入项目名称', trigger: 'blur' }],
				subjectIntroduce: [{ required: true, message: '请输入内容', trigger: 'blur' }]
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
			],
		};
	},
	methods: {
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let { code, data, msg } = await Api.add(this.Form);
					if (code == 10200) {
						this.$refs['Form'].resetFields();
						this.$confirm('上传成功，是否进入知识产权转换服务?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'success'
						}).then(() => {
							this.$routerUtil.toPath('/knowledge/conversion');
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
	margin-left: 8rem;
}
</style>
