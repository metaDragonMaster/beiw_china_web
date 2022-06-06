<template>
	<div class="limit-max-width view">
		<el-card>
			<el-form ref="Form" :model="Form" :rules="Rules" label-width="6rem" inline>
				<h1 class="form-type-title">专利详情</h1>
				<el-form-item prop="name" label="专利名称"><el-input v-model="Form.name"></el-input></el-form-item>
				<el-form-item prop="number" label="专利申请号"><el-input v-model="Form.number"></el-input></el-form-item>
				<el-form-item prop="realName" label="申请人姓名"><el-input v-model="Form.realName"></el-input></el-form-item>
				<el-form-item prop="icp" label="IPC分类号"><el-input v-model="Form.icp"></el-input></el-form-item>
				<el-form-item prop="type" label="专利类型">
					<!-- <el-input v-model="Form.type"></el-input> -->
					<el-select v-model="Form.type" placeholder="请选择">
						<el-option v-for="item in selectPatentType" :key="item.value" :label="item.label" :value="item.label"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item prop="openNumber" label="公开号"><el-input v-model="Form.openNumber"></el-input></el-form-item>
				<el-form-item prop="protectDate" label="保护年限">
					 <el-input v-model="Form.protectDate"  label="选择年数"></el-input>
				</el-form-item>
				<el-form-item prop="proxy" label="代理机构"><el-input v-model="Form.proxy"></el-input></el-form-item>
				<el-form-item prop="proxyer" label="代理人"><el-input v-model="Form.proxyer"></el-input></el-form-item>
				<el-form-item prop="openDate" label="公开日">
					<el-date-picker v-model="Form.openDate" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item prop="inventor" label="发明设计人"><el-input v-model="Form.inventor"></el-input></el-form-item>
				<el-form-item prop="price" label="出售价格">
					<el-input v-model="Form.price" label="填写数额"></el-input>
				</el-form-item>
				<h1 class="form-type-title">专利摘要</h1>
				<el-form-item prop="msgOne" label="专利摘要">
					<el-input v-model.trim="Form.msgOne" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
				<h1 class="form-type-title">主权项</h1>
				<el-form-item prop="msgTwo" label="主权项">
					<el-input v-model.trim="Form.msgTwo" type="textarea" :autosize="{ minRows: 12, maxRows: 18 }" placeholder="请输入内容"></el-input>
				</el-form-item>
				<h1 class="form-type-title">添加图片</h1>
				<el-form-item prop="image" label="添加图片">
					<!-- {{Form.image}} -->
					<UploadImg ref="UploadImg" moduleName="web" v-model="Form.image"></UploadImg>
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
import Api from '@/api/patent.js';
export default {
	data() {
		return {
			// Form: {
			// 	attr: '',
			// 	img:"",
			// },
			Form: {
				description: '', //	专利信息DTO
				icp: '', //	string				IPC分类号
				image: '', //	string				主权项
				inventor: '', //	string				发明设计人
				msgOne: '', //	string				专利摘要
				msgTwo: '', //	string				主权项
				name: '', //	string				专利名称
				number: '', //	string				专利编号
				openDate: '', //	string				公开日
				openNumber: '', //	string				公开号
				protectDate: '', //	string				保护年限
				proxy: '', //	string				代理机构
				proxyer: '', //	string				代理人
				realName: '', //	string				申请人姓名
				type: '' ,//	string类型
				price:"",
			},
			Rules: {
				// description: [{ required: true, message: '请输入专利信息', trigger: 'blur' }],
				// icp: [{ required: true, message: '请输入IPC分类号', trigger: 'blur' }],
				image: [{ required: true, message: '请上传专利图片', trigger: 'blur' }],
				inventor: [{ required: true, message: '请输入发明设计人姓名', trigger: 'blur' }],
				msgOne: [{ required: true, message: '请输入专利摘要', trigger: 'blur' }],
				// msgTwo: [{ required: true, message: '请输入主权项', trigger: 'blur' }],
				name: [{ required: true, message: '请输入专利名称', trigger: 'blur' }],
				number: [{ required: true, message: '请输入专利编号', trigger: 'blur' }],
				// openDate: [{ required: true, message: '请输入公开日', trigger: 'blur' }],
				// openNumber: [{ required: true, message: '请输入公开号', trigger: 'blur' }],
				// protectDate: [{ required: true, message: '请输入保护年限', trigger: 'blur' }],
				// proxy: [{ required: true, message: '请输入代理机构', trigger: 'blur' }],
				// proxyer: [{ required: true, message: '请输入代理人姓名', trigger: 'blur' }],
				realName: [{ required: true, message: '请输入申请人姓名', trigger: 'blur' }],
				type: [{ required: true, message: '请输入专利类型', trigger: 'blur' }],
				price: [{ required: true, message: '请输入专利类型', trigger: 'blur' }],
			},
			selectPatentType: [
				{
					value: '1',
					label: '发明专利'
				},
				{
					value: '2',
					label: '实用新型专利'
				},
				{
					value: '3',
					label: '外观设计专利'
				}
			],
		};
	},
	components: {
		UploadImg
	},
	methods: {
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let { code, data, msg } = await Api.setInsertPatentInfo(this.Form);
					if (code == 10200) {
						this.$routerUtil.toPath("/supermarket/patent")
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
.el-input, .el-input-number, .el-select {
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
