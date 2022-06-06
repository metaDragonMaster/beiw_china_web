<template>
	<div class="view ">
		<div class="banner limit-max-width-inset">
			<img src="@/assets/images/information/logo_kuaibao.png" alt="" class="logo" />
			<h1 class="logo-title">专利超市</h1>
		</div>
		<ul class="goods-list ">
			<li v-for="(item, index) in tableData" :key="index">
				<img :src="item.image" alt="" @click="toDetails(item.id)" />
				<div class="info">
					<span class="price">￥{{ item.price }}</span>
					<p class="font-hide-2">{{ item.msgOne }}</p>
					<p class="flex-js-sb">
						<span class="font-hide">{{ item.name }}</span>
						<span class="span-red font-hide">{{ item.type }}</span>
					</p>
					<div class="flex-center"><el-button type="success" @click="toDetails(item.id)">查看专利</el-button></div>
				</div>
			</li>
		</ul>
		<div class="limit-max-width">
			<TablePagination
				:total="tableQueryOption.total"
				:current="tableQueryOption.current"
				:size="tableQueryOption.size"
				:sizes="[8,16]"
				@currentChange="
					val => {
						tableQueryOption.current = val;
						getTableData();
					}
				"
				@sizeChange="
					val => {
						tableQueryOption.size = val;
						getTableData();
					}
				"
			></TablePagination>
		</div>
	</div>
</template>
<script>
import Api from '@/api/patent.js';
import TablePagination from '@/components/TablePagination/index.vue';
export default {
	data() {
		return {
			tableData: [
			],
			tableQueryOption: {
				size: 8,
				current: 1,
				total: 0
			},
		};
	},
	components: {
		TablePagination
	},
	mounted() {
		this.getTableData();
	},
	methods: {
		startGetTable() {
			this.tableQueryOption.current = 1;
			this.getTableData()
		},
		toDetails(id) {
			this.$routerUtil.toPath('/supermarket/patent/details', { id: id });
		},
		async getTableData() {
			let name = this.$route.params.name;
			if(!name) {
				this.$routerUtil.toPath('/service/0/list')
			}
			let params = {
				name:name
			};
			let { size, current } = this.tableQueryOption;
			params.pageNum = current;
			params.pageSize = size;
			let { code, data, msg } = await Api.selectPatentInfoListByName(params);
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
	padding-bottom: 5rem;
}
.logo {
	margin: 0 auto 22px auto;
	padding-top: 122px;
}
.logo-title {
	text-align: center;
	margin-bottom: 30px;
}
.span-red,
.price {
	color: #d32d25;
}

.goods-list {
	display: grid;
	grid-template-columns: repeat(4, 300px);
	width: fit-content;
	min-width: 1120px;
	margin: 0 auto;
	li {
		border-radius: 8px;
		// width: 280px;
		height: 480px;
		margin: 23px 10px;
		box-shadow: 0px 2px 8px 3px rgba(203, 204, 207, 0.65);
		.info {
			padding: 34px 27px;
			.font-hide-2 {
				margin-top: 24px;
				min-height: 2.625rem;
			}
			p.flex-js-sb {
				margin: 20px 0;
				.font-hide {
					max-width: 6rem;
				}
			}
		}
		img {
			border-radius: 8px 8px 0 0;
			width: 100%;
			height: 230px;
			cursor: pointer;
		}
	}
}
</style>
