<template>
	<el-input v-model="value" @input="inputFunc" clearable placeholder="请输入短信验证码">
		<template slot="prepend">
			<img src="@/assets/images/register/icon_dongtm.png" alt="" />
		</template>
		<template slot="append">{{appendText}}</template>
	</el-input>
</template>
<script>
export default {
	data(){return{
		timer:null,
		value:"",
	}},
	components: {

	},
	computed: {
		appendText() {
			return "发送动态码"
		}
	},
	mounted() {

	},
	methods:{
		inputFunc() {
			$emit("emitValue",this.value);
		}
	}
}
</script>
<style  lang="scss" scoped="scoped">
// ::v-deep .el-input .el-input-group__append {
// 	font-size: 14px;
// }
</style>
