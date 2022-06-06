<template>
	<div class="limit-max-width view">
		<el-card>
			<el-form ref="Form" :model="Form" :rules="Rules" inline label-position="right" label-width="6rem">
				<h1 class="form-type-title">表单</h1>
				<el-form-item prop="newsAuthor" label="作者昵称"><el-input v-model="Form.newsAuthor"></el-input></el-form-item>
				<el-form-item prop="newsTitle" label="资讯标题"><el-input v-model="Form.newsTitle"></el-input></el-form-item>
				<el-form-item prop="newsTypeId" label="资讯类型">
					<el-select v-model="Form.newsTypeId">
						<el-option v-for="item in selectTypes" :key="item.newsTypeId" :value="item.newsTypeId" :label="item.newsTypeName"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item  prop="createTime" label="发布时间">
					<el-date-picker v-model="Form.createTime" type="date" value-format="yyyy-MM-dd" placeholder="选择日期"></el-date-picker>
				</el-form-item>
				<el-form-item prop="isRelease" label="是否发布">
					<el-radio v-model="Form.isRelease" :label="true">是</el-radio>
					<el-radio v-model="Form.isRelease" :label="false">否</el-radio>
				</el-form-item>
				<h1 class="form-type-title">上传封面</h1>
				<el-form-item prop="newsTitleImage" label="封面"><uploadImg ref="UploadImg" moduleName="web" v-model="Form.newsTitleImage"></uploadImg></el-form-item>
				<h1 class="form-type-title">编辑内容</h1>
				<el-form-item prop="newsContent" label="资讯内容"><WangEditor ref="Editor" v-model="Form.newsContent" /></el-form-item>
			</el-form>
			<el-button class="submit-button" type="primary" @click="submit">提交表单</el-button>
		</el-card>
	</div>
</template>
<script>
import UploadImg from '@/components/UploadImg/index.vue';
import WangEditor from '@/components/WangEditor/index.vue';
// import ApiNews from '@/api/news.js';
import Api from '@/api/newsManage.js';
export default {
	data() {
		return {
			// Form: {
			// 	attr: '',
			// 	img:"",
			// },
			Form: {
				isRelease: true, //	是否发布	query	false	boolean
				newsAuthor: '', //	作者(转载)	query	false	string
				newsContent: '', //	内容	query	false	string
				newsTitle: '', //	标题	query	false	string
				newsTitleImage: '', //	标题图片	query	false	string
				newsTypeId: '' ,//	新闻类型ID	query	false	integer(int32)
				createTime:"",
			},
			Rules: {
				newsAuthor: [{ required: true, message: '请输入作者姓名', trigger: 'blur' }],
				newsContent: [{ required: true, message: '请编辑内容', trigger: 'blur' }],
				newsTitle: [{ required: true, message: '请输入标题', trigger: 'blur' }],
				newsTitleImage: [{ required: true, message: '请上传标题图片', trigger: 'blur' }],
				newsTypeId: [{ required: true, message: '请选择新闻类型', trigger: 'blur' }],
				createTime: [{ required: true, message: '请选择发布时间', trigger: 'blur' }],
			},
			selectTypes: []
		};
	},
	components: {
		WangEditor,
		UploadImg
	},
	mounted() {
		this.selectTypesList();
		this.openWang();
	},
	deactivated() {
		this.closeWang();
	},
	methods: {
		async selectTypesList() {
			let { code, data, msg } = await Api.getNewsTypeList();
			console.log(data);
			if (code == 10200) {
				this.selectTypes = data;
				// if(data[0]) {
				// 	this.Form.newsTypeId = data[0].newsTypeId;
				// }
			}
		},
		submit() {
			this.$refs['Form'].validate(async valid => {
				if (valid) {
					let { code, data, msg } = await Api.addInfo(this.Form);
					if (code == 10200) {
						this.$refs['Form'].resetFields();
						this.$confirm('上传成功，是否进入资讯列表?', '提示', {
							confirmButtonText: '确定',
							cancelButtonText: '取消',
							type: 'success'
						}).then(() => {
							this.$routerUtil.toPath("/information/details")
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
		openWang() {
			this.$refs['Editor'].startEditor();
		},
		closeWang() {
			this.$refs['Editor'].destroyEditor();
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
	margin-left: 6rem;
}
</style>
