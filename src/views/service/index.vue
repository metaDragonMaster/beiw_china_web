<template>
	<div class="view">
		<!-- 高校转化中心 -->
		<div class="banner limit-max-width">
			<p class="title">北纬三十加速器</p>
			<p class="sub-title">{{subTitle}}</p>
		</div>
		<!-- {{Form}} -->
		<!-- <div id="anchor" ref="Anchor"></div> -->
		<el-tabs  v-model="Form.platformType"  class="tabs limit-max-width" @tab-click="handleClick">
			<el-form :model="Form">
				<el-form-item prop="name">
					<el-input class="key-work" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="Form.name" clearable @clear="startGetTableData()">
						<el-button class="submit" slot="append" @click="startGetTableData()">搜索</el-button>
					</el-input>
				</el-form-item>
			</el-form>
			<el-tab-pane label="高校转化中心" name="0"><List v-for="item in tableData" :key="item.id" :item="item"></List></el-tab-pane>
			<el-tab-pane label="企业数据库" name="1"><List v-for="item in tableData" :key="item.id" :item="item"></List></el-tab-pane>
			<el-tab-pane label="研究院所" name="2"><List v-for="item in tableData" :key="item.id" :item="item"></List></el-tab-pane>
			<TablePagination
				:total="tableQueryOption.total"
				:current="tableQueryOption.pageNum"
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
		</el-tabs>
	</div>
</template>
<script>
import TablePagination from '@/components/TablePagination/index.vue';
import List from './components/list.vue';
import Api from "@/api/platform.js";
export default {
	data() {
		return {
			subTitle:'',
			Form: {
				name: '',
				platformType: '0'
			},
			tabtype: {
				0: '校企研服务平台',
				1: '企业数据库',
				2: '知识产权评估服务',
				// 0 高校； 1 企业；  2 研究院
			},
			tableData: [
				// {
				// 	id: '1'
				// }
			],
			tableQueryOption: {
				pageNum: 1,
				pageSize: 10,
				total: 0
			}
		};
	},
	components: {
		TablePagination,
		List
	},
	computed:{
		typeValidator() {
			return Object.keys(this.tabtype).includes(this.$route.params.type)
		},
	},
	watch:{
		$route(newR,oldR) {
			// console.log(this.typeValidator);
			if(!this.typeValidator) {
				this.$routerUtil.toPath('/404')
			} else {
				this.setSubTitle()
				this.init()
			}
		}
	},
	mounted() {
		// console.log(this.$route)
		this.init();
	},
	methods: {
		// scrollTo() {
		// 	this.$nextTick(() => {
		// 		let dom = this.$refs['Anchor'];
		// 		console.log(dom)
		// 		let top = dom.offsetTop - 40;
		// 		console.log(top)
		// 		window.scrollTo({
		// 			top: top,
		// 			behavior: 'smooth'
		// 		});
		// 	});
		// },
		setSubTitle() {
			// console.log("设置")
			for (let key in this.tabtype) {
				if(this.Form.platformType == key) this.subTitle = this.tabtype[key]
			}
		},
		handleClick() {
			this.$routerUtil.toPath(`/service/${this.Form.platformType}/list`);
		},
		init() {
			this.Form.platformType = this.$route.params.type;
			this.tableQueryOption.pageNum = 1;
			this.setSubTitle()
			this.getTableData();
		},
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
	.banner {
		background-image: url(../../assets/images/service-banner.png);
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
	.key-work {
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
}
</style>
