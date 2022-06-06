<template>
	<div class="limit-max-width view">
		<EasyBreadCrumb :breads="['更多资讯']"></EasyBreadCrumb>
		<el-row :gutter="10">
			<el-col :span="17">
				<div id="anchor" ref="Anchor"></div>
				<!-- v-for="(item,index) in newsTypes" :label="item.newsTypeName" :name="item.newsTypeId + ''" -->
				<div class="header" v-show="newsTypes.length > 0">
					<div class="border">
						<ul class="tabs">
							<li v-for="item in newsTypes" :key="item.newsTypeId" :class="{ alive: Form.newsTypeId == item.newsTypeId }" @click="changeTable(item.newsTypeId)">
								{{ item.newsTypeName }}
							</li>
						</ul>
					</div>
				</div>
				<el-card>
					<!-- <ul class="infor-mation-list" >
						<li v-for="item in 10">
							<h1 class="font-hide" @click="toDetails(item)">全球知识产权服务链全球知识产权服务链全球知识产权服务链全球知识产权服务链</h1>
							<div class="flex">
								<img src="../../assets/images/homepage/img1.png" alt="">
								<img src="../../assets/images/homepage/img2.png" alt="">
								<img src="../../assets/images/homepage/img3.png" alt="">
								<img src="../../assets/images/homepage/img4.png" alt="">
								<img src="../../assets/images/homepage/img4.png" alt="">
							</div>
							<time>1小时前</time>
						</li>
					</ul> -->
					<ul class="infor-mation-list">
						<li v-for="item in tableData" :key="item.newsId">
							<img :src="item.newsTitleImage" alt="" />
							<div class="right">
								<h1 class="font-hide" @click="toDetails(item.newsId)" :title="item.newsTitle">{{ item.newsTitle }}</h1>
								<div class="news-content font-hide-2">{{ item.newsContent }}</div>
								<time>{{ item.createTime }}</time>
							</div>
						</li>
					</ul>
					<el-empty v-show="tableData.length <= 0"></el-empty>
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
					/>
				</el-card>
			</el-col>
			<el-col :span="7" class="sticky">
				<el-card><HotNews></HotNews></el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
import EasyBreadCrumb from '@/components/EasyBreadCrumb/index.vue';
import HotNews from './modules/HotNews.vue';
import TablePagination from '@/components/TablePagination/index.vue';
import Api from '@/api/news.js';
import { htmlToText } from '@/utils/formUtil.js';
export default {
	data() {
		return {
			tableData: [],
			Form: {
				newsTypeId: ''
			},
			tableQueryOption: {
				current: 1,
				size: 8,
				total: 0
			},
			newsTypes: []
		};
	},
	components: {
		EasyBreadCrumb,
		HotNews,
		TablePagination
	},
	computed: {},
	mounted() {
		this.init()
	},
	methods: {
		scrollTo() {
			this.$nextTick(() => {
				let dom = this.$refs['Anchor'];
				// console.log(this.$refs);
				let top = dom.offsetTop - 150;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			});
		},
		toDetails(id) {
			console.log(id);
			// this.$routerUtil.toPath('/information/details', { id: id });
			this.$routerUtil.toName('informationDetails', { id: id });
		},
		changeTable(id) {
			this.Form.newsTypeId = id;
			this.tableQueryOption.current = 1;
			this.getTableData();
		},
		async init() {
			await this.selectTypesList();
			await this.getTableData();
		},
		startGetTable() {
			this.tableQueryOption.current = 1;
			this.getTableData();
		},
		async getTableData() {
			this.scrollTo();
			let { current, size } = this.tableQueryOption;
			let params = {
				...this.Form,
				current,
				size
			};
			let { code, data, msg } = await Api.selectList(params);
			// console.log(data)
			let records = data.records.map(item => {
				item.newsContent = htmlToText(item.newsContent);
				// if(item.newsContent.length>100) {
				// 	item.newsContent = item.newsContent.slice(0,100) + '...'
				// } else {
				// 	item.newsContent = item.newsContent.slice(0,100)
				// }
				// // console.log(item.newsContent.length)
				return item;
			});
			if (code == 10200) {
				this.tableQueryOption.total = data.total;
				this.tableData = records;
			}
		},
		async selectTypesList() {
			let { code, data, msg } = await Api.selectTypesList();
			console.log(data);
			if (code == 10200) {
				this.newsTypes = data;
				this.Form.newsTypeId = data[0].newsTypeId
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.header {
	// padding-bottom: 25px;
	position: sticky;
	top: 0;
	left: 0;
	z-index: 100;
	margin-bottom: 1rem;
	.border {
		background-color: #ffffff;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
	}
	.tabs {
		min-height: 80px;
		padding-top: 25px;
		padding-left: 30px;
		border-bottom: 1px solid #002E73;
		display: flex;
		border-top-right-radius: 4px;
		border-top-left-radius: 4px;
		li {
			padding: 16px 48px;
			cursor: pointer;
			&.alive {
				background-color: #002E73;
				color: #ffffff;
			}
		}
	}
}
.infor-mation-list {
	li:not(:first-child) {
		padding-top: 30px;
	}
	li {
		padding-bottom: 20px;
		border-bottom: 1px solid #f2f2f2;
		display: grid;
		grid-template-columns: 220px auto;
		grid-column-gap: 1rem;
		img {
			width: 100%;
			height: 150px;
		}
	}
	h1 {
		cursor: pointer;
		margin-bottom: 25px;
		font-size: 26px;
	}
	.news-content {
		margin-bottom: 20px;
	}
	// .flex {
	// 	margin-bottom: 20px;
	// 	img {
	// 		width: 140px;
	// 		margin-right: 8px;
	// 		cursor: pointer;
	// 	}
	// }
}
.view {
	padding-bottom: 5rem;
}
.el-row {
	position: relative;
}
.sticky {
	position: sticky;
	top: 10px;
}
</style>
