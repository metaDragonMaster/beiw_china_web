<template>
	<div>
		<h1>
			热门
			<span>资讯</span>
		</h1>
		<div class="hr"></div>
		<ul>
			<li v-for="item in tableData" @click="toDetails(item.newsId)">
			<!-- 	<div class="card" v-show="hotAlive == item.newsId">
					<img :src="item.newsTitleImage" alt="" />
					<div>
						<p class="font-hide">{{item.newsTitle}}</p>
						<span class="font-hide" style="--line-clamp:2">{{item.newsContent}}</span>
					</div>
				</div> -->
				<!-- v-show="hotAlive != item" -->
				<p class="font-hide" >{{item.newsTitle}}</p>
			</li>
		</ul>
	</div>
</template>
<script>
import Api from '@/api/news.js';
export default {
	data() {
		return {
			// hotAlive:0,
			tableData:[],
		};
	},
	created() {
		this.getHotNews()
	},
	methods: {
		toDetails(id) {
			this.$routerUtil.toName('informationDetails', { id: id });
		},
		async getHotNews() {
			let {code,data,msg} = await Api.getHotNews();
			this.tableData = data;
			// this.hotAlive = data[0].newsId;
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
h1 {
	font-size: 24px;
	font-weight: 500;
	padding-bottom: 12px;
	// border-bottom: 1px solid #f2f2f2;
	span {
		color: #FF0000;
	}
}

.hr {
	background-color: #F2F2F2;
	height: 1px;
	margin-bottom: 20px;
}
ul {
	padding-left: 1rem;
}
li {
	margin: 8px 0;
	cursor: pointer;
	list-style: decimal;
	// text-indent: 1rem;
	// padding-left: 1rem;
	& > p {
		// padding-left: 1rem;
		position: relative;
		// &::before {
		// 	position: absolute;
		// 	left: 0;
		// 	top: 50%;
		// 	content: '';
		// 	width: 4px;
		// 	height: 4px;
		// 	transform: translateY(-2px);
		// 	border-radius: 50%;
		// 	background-color: #999999;
		// 	display: block;
		// }
	}
	// .card {
	// 	display: grid;
	// 	grid-template-columns: 120px auto;
	// 	grid-column-gap: 16px;
	// 	img {
	// 	}
	// 	p {
	// 		margin-bottom: 1rem;
	// 	}
	// 	span {
	// 		font-size: 12px;
	// 	}
	// }
}
</style>
