<template>
	<div class="limit-max-width view">
		<!-- <EasyBreadCrumb :breads="['更多资讯', '资讯详情']"></EasyBreadCrumb> -->
		<el-breadcrumb separator=">"  ref="Anchor">
			<el-breadcrumb-item to="/information/details">原生资讯</el-breadcrumb-item>
			<el-breadcrumb-item>{{ newsTypeName }}</el-breadcrumb-item>
			<el-breadcrumb-item>{{ newsTitle }}</el-breadcrumb-item>
		</el-breadcrumb>
		<el-row :gutter="10">
			<el-col :span="17">
				<el-card>
					<h1 class="details-title">{{newsTitle}}</h1>
					<div class="flex-js-sard">
						<span>作者：{{newsAuthor}}</span>
						<time>创建时间：{{createTime}}</time>
					</div>
					<div class="hr"></div>
					<div class="content" v-html="newsContent">
						<!-- 	<p>
							国内玉米现货价格维持偏弱格局，产销区价格均有继续走弱迹象。玉米市场供应端压力仍在，进口玉米及谷物陆续到港，小麦稻谷的常规化替代等，继续挤占玉米市场份额；而需求端持续疲软，饲料养殖行业利润持续缩减，需求方基本以刚性采购为主性。东北地区玉米价格弱势震荡，企业收购报价小幅下调。东北产区贸易库存偏高，部分农户手中仍有未售余粮，再加上东北地区用粮企业前期库存较为充足，当前生产以消化库存为主，收购不积极。华北地区玉米价格保持稳定，深加工企业厂门上量有所缩减。市场主体依旧以抢购新麦为主，但国家已经开始着手调控，预计在较短时间内，新麦价格将逐步调整，进入合理价位。南方销区玉米价格维持平稳，区域报价窄幅震荡。产区现货价格相对平稳，到货成本支撑贸易商报价；养殖业利润持续下滑，下游需求主体基本以刚性采购为主，采取随用随采的策略，现货成交清淡。北方港口玉米收购价格维持稳定，受东北产区降雨天气影响，到货数量继续缩减。销区以及南方港口成交清淡、价格下滑，贸易主体发运积极性下降，贸易数量缩减。南方港口玉米价格窄幅下调，因需求方采购不积极，福建、两广港口散粮及集装箱玉米价格同步下行，现阶段玉米现货市场缺乏有力提振因素，上行艰难，供强需弱背景下，行情偏弱。
						</p>
						<img src="../../assets/images/homepage/img1.png" alt="">
						<p>
							观点：市场短期缺乏明显驱动，期货盘面窄幅波动为主。
						</p>
						<p>
							逻辑：供应方面：目前产区仍处于贸易商与用粮企业之间的博弈状态，由于北方港口价格下跌，粮商发运利润大幅度缩减，甚至出现了亏损状态，大部分粮商选择暂时停止发运，而部分粮商担心价格还会再度走低、以及急于回笼资金，选择继续装车，总体来看，市场供应有所增加。需求方面：深加工需求仍在，但短期库存偏高，企业主动提价的意愿不强。饲料方面，生猪存栏逐渐恢复，但随着猪价的大跌，养殖利润恶化，产能扩张缓慢，蛋鸡利润修复较慢，肉鸡补栏同比大增，但增幅同样受利润影响，饲料刚需仍存，但预期偏悲观。替代品方面：小麦替代优势仍存，替代压力短期仍较大，但长期难以持续替代，近期国家增大稻谷拍卖量，补充能量供应。综上，玉米市场较前期有所宽松，价格预计窄幅震荡为主，预计在2600-2650区间有较强支撑。
						</p> -->
					</div>
				</el-card>
			</el-col>
			<el-col :span="7" class="sticky">
				<el-card><HotNews></HotNews></el-card>
			</el-col>
		</el-row>
		<p class="font-hide prev">
			上一篇：
			<button @click="jump(preNewsId)">{{ preNewsTitle }}</button>
		</p>
		<p class="font-hide next">
			下一篇：
			<button @click="jump(nextNewsId)">{{ nextNewsTitle }}</button>
		</p>
	</div>
</template>
<script>
import EasyBreadCrumb from '@/components/EasyBreadCrumb/index.vue';
import HotNews from './modules/HotNews.vue';
import Api from '@/api/news.js';
export default {
	data() {
		return {
			createTime: '',
			newsAuthor: '',
			newsContent: '',
			newsId: '',
			newsTitle: '',
			newsTypeName: '',

			nextNewsId: '',
			nextNewsTitle: '',
			preNewsId: '',
			preNewsTitle: ''
		};
	},
	components: {
		EasyBreadCrumb,
		HotNews
	},
	watch: {
		$route(to, form) {
			this.getNewsDetailById();
			this.scrollTo();
		}
	},
	created() {
		if (!this.$route.params.id) {
			this.$routerUtil.toName('informationList');
			this.$message.warning('未检测到该咨询');
		} else {
			this.getNewsDetailById();
		}
	},
	mounted() {
		this.scrollTo();
		console.log(this.$route);
	},
	methods: {
		scrollTo() {
			this.$nextTick(() => {
				let dom = this.$refs['Anchor'];
				let top = dom.offsetTop - 40;
				window.scrollTo({
					top: top,
					behavior: 'smooth'
				});
			});
		},
		async jump(id) {
			if (!id) return;
			let res = await this.getNewsDetailById();
			res && this.$routerUtil.toName('informationDetails', { id: id });
		},
		async getNewsDetailById() {
			let id = this.$route.params.id;
			let { code, data, msg } = await Api.selectDetailById(id);
			if (code == 10200) {
				this.createTime = data.createTime;
				this.newsAuthor = data.newsAuthor;
				this.newsContent = data.newsContent;
				this.newsId = data.newsId;
				this.newsTitle = data.newsTitle;
				this.newsTypeName = data.newsTypeName;
				this.nextNewsId = data.nextNewsId;
				this.nextNewsTitle = data.nextNewsTitle;
				this.preNewsId = data.preNewsId;
				this.preNewsTitle = data.preNewsTitle;
				return true;
			} else {
				this.$message.warning(msg);
				return false;
			}
		}
	}
};
</script>
<style lang="scss" scoped="scoped">
.details-title {
	max-width: 80%;
	margin: 0 auto;
	font-size: 30px;
	text-align: center;
}
.el-breadcrumb {
	padding: 1rem 0;
}
time {
	display: inline-block;
	color: #999999;
	text-align: center;
}
.hr {
	border-bottom: 1px solid #f2f2f2;
}
.details-title,
time,
.hr {
	margin-bottom: 30px;
}
.content {
	img {
		width: 100%;
	}
}
.view {
	padding-bottom: 4rem;
}
.el-row {
	position: relative;
}
.sticky {
	position: sticky;
	top: 10px;
}
.prev,
.next {
	margin-top: 16px;
	button {
		color: #069b87;
		font-size: 1rem;
	}
}
</style>
