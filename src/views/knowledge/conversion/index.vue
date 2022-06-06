<template>
	<div class="view">
		<!-- 高校转化中心 -->
		<div class="banner limit-max-width">
			<p class="title">北纬三十加速器</p>
			<p class="sub-title">知识产权转化服务</p>
		</div>
		<!-- {{Form}} -->
		<!-- <div id="anchor" ref="Anchor"></div> -->
		<div class="tabs limit-max-width">
			<el-form :model="Form">
				<el-form-item prop="name">
					<el-input class="key-word" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="Form.name" clearable @clear="startGetTableData()">
						<el-button class="submit" slot="append" @click="startGetTableData()">搜索</el-button>
					</el-input>
				</el-form-item>
			</el-form>
			<div class="content">
				<List v-for="item in tableData" :key="item.id" :item="item"></List>
			</div>
			<TablePagination
				:total="tableQueryOption.total"
				:current="tableQueryOption.pageNum"
				:size="tableQueryOption.pageNum"
				:sizes="[5,10]"
				@currentChange="
					val => {
						tableQueryOption.pageNum = val;
						getTableData();
					}
				"
				@sizeChange="
					val => {
						tableQueryOption.pageSize = val;
						getTableData();
					}
				"
			/>
		</div>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import List from './List.vue';
import Api from "@/api/zh.js";
export default {
	data() {
		return {
			Form: {
				name: '',
			},
			tableData: [],
			tableQueryOption: {
				pageNum: 1,
				pageSize: 5,
				total: 0
			}
		};
	},
	components: {
		TablePagination,
		List
	},
	mounted() {
		// console.log(this.$route)
		this.startGetTableData();
	},
	methods: {
		startGetTableData() {
			this.tableQueryOption.pageNum = 1;
			this.getTableData();
		},
		async getTableData() {
			let params = {
				...this.Form,
				pageNum: this.tableQueryOption.pageNum,
				pageSize: this.tableQueryOption.pageSize
			};
			let { code, data, msg } = await Api.selectList(params);
			if (code == 10200) {
				this.tableData = data.records;
				this.tableQueryOption.total = data.total;
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	background-color: #FAFAFA;
	.banner {
		background-image: url(../../../assets/images/service-banner.png);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
		height: 300px;
		color: #FFFFFF;
		.title {
			font-size: 32px;
			padding-top: 78px;
			margin-bottom: 22px;
		}
		.sub-title {
			font-size: 52px;
		}
	}
	.key-word {
		width: 500px;
	}
	.submit {
		background-color: #002E73;
		color: #FFFFFF;
		border-radius: 0 4px 4px 0;
		height: 35px;
	}
	.tabs {
		margin-top: 40px;
		padding-bottom: 1rem;
	}
	.content {
		padding:0 30px ;
		background-color: #FFFFFF;
	}
}
</style>
