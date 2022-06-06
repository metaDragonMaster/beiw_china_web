<template>
	<div class="view">
		<el-form :model="Form" class="form-dom" label-position="right" label-width="9rem">
			<el-form-item prop="readName" label="真实姓名">
				<el-input v-model="Form.readName" clearable />
			</el-form-item>
			<el-form-item prop="job" label="企业职务">
				<el-input v-model="Form.job" clearable />
			</el-form-item>
			<el-form-item prop="email" label="联系邮箱">
				<el-input v-model="Form.email" clearable />
			</el-form-item>
			<el-form-item prop="name" label="企业全称">
				<el-input v-model="Form.name" clearable />
			</el-form-item>
			<el-form-item prop="file" label="">
				<template #label>
					<p>企业营业执照副本</p>
					<p>(盖章扫描件)</p>
				</template>
				<input type="file" name="file" accept=".doc,.jpg" ref="fileDom"/>
			</el-form-item>
			<el-form-item prop="type" label="选择分类">
				<el-select v-model="Form.type">
					<el-option v-for="item in selectType" :key="item.value" :value="item.value" :label="item.label"></el-option>
				</el-select>
			</el-form-item>
			<!-- <button type="button" class="submit-button">提交</button> -->
		</el-form>
	</div>
</template>
<script>
export default {
	data(){return{
		Form:{
			readName:"",
			job:"",
			email:"",
			name:"",
			file:"",
			type:"",
		},
		selectType:[
			{value:1,label:'type 1'},
			{value:2,label:'type 2'},
		],
	}},
	components: {

	},
	computed: {

	},
	mounted() {

	},
	methods:{

	}
}
</script>
<style  lang="scss" scoped="scoped">
.view {
	padding: 80px 200px;
}
</style>
