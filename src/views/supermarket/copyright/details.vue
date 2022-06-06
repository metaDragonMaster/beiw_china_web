<script>
// import PicZoom from 'vue-piczoom';
import Api from '@/api/copyRight.js';
import FormUtil from "@/utils/formUtil.js"
export default {
	data() {
		return {
			activeIndex: 0,
			imageList: [
				// require('../../../assets/images/supermarket/patent/img.png'),
				// require('../../../assets/images/supermarket/patent/img.png'),
				// require('../../../assets/images/supermarket/patent/img.png')
			],
			activeName: 'first',
			info: {
				description: '', //	版权信息DTO
				icp: '', //	string				IPC分类号
				image: '', //	string				图片
				inventor: '', //	string				发明设计人
				msgOne: '', //	string				版权摘要
				msgTwo: '', //	string				主权项
				name: '', //	string				版权名称
				number: '', //	string				版权编号
				openDate: '', //	string				公开日
				openNumber: '', //	string				公开号
				protectDate: '', //	string				保护年限
				price:"",
				proxy: '', //	string				代理机构
				proxyer: '', //	string				代理人
				realName: '', //	string				申请人姓名
				type: '' //	string类型
			}
		};
	},
	components: {
		// PicZoom
	},
	mounted() {
		let id = this.$route.query.id;
		this.selectCopyRightInfoById(id);
	},
	methods: {
		async selectCopyRightInfoById(id) {
			let { code, data, msg } = await Api.selectCopyRightInfoById(id);
			if (code == 10200) {
				this.imageList[0] = data.image;
				this.info = FormUtil.combineAttrs(this.info,data);
			}
		}
	}
};
</script>
<template>
	<div class="view supermarket-patent-details limit-max-width">
		<div class="details-info-box">
			<div class="details-image">
				<!-- <pic-zoom ref="picZoom" :url="imageList[activeIndex]" class="pic-zoom" :scale="3"></pic-zoom> -->
				<img class="pic-zoom" :src="imageList[0]" alt="">
				<!-- <div class="over">
					<ul class="scroll-list">
						<li v-for="(item, index) in imageList" :key="index">
							<el-image :src="item" fit="scale-down"></el-image>
						</li>
					</ul>
				</div> -->
			</div>
			<div class="details-info">
				<h3 class="font-hide">{{info.name}}</h3>
				<p class="flex-center-js-sb">
					<span>
						交易价格：
						<span class="span-red">￥{{info.price}}</span>
					</span>
					<span>
						交易方式：
						<span class="span-red">转让</span>
					</span>
				</p>
				<p>
					<span>
						申请号：
						<span class="span-red">{{info.number}}</span>
					</span>
					<span>
						权利人：
						<span class="span-red">{{info.inventor}}</span>
					</span>
					<span>
						版权类型：
						<span class="span-red">{{info.type}}</span>
					</span>
					<span>
						发明人：
						<span class="span-red">{{info.inventor}}</span>
					</span>
				</p>
				<div class="inquiry-info flex"><el-button type="primary" @click="$routerUtil.toPath('/pay/details',{name:info.name,price:info.price})">购买</el-button></div>
				<!-- <div class="flex inquiry-info">
					<el-button class="drift-right" type="primary">购买</el-button>
				</div> -->
			</div>
		</div>
		<div class="inquiry flex-column-center-js-sb">
			<img src="../../../assets/images/supermarket/patent/logo.png" alt="" />
			<p class="flex-align-center">
				<img src="../../../assets/images/supermarket/patent/wx.png" alt="" />
				<span>在线咨询</span>
			</p>
			<el-button type="primary" :style="{ width: 'fit-content' }" @click="$routerUtil.toPath('/supermarket/copyright')">返回超市</el-button>
		</div>
		<div class="content">
			<el-tabs v-model="activeName" type="card">
				<el-tab-pane label="商品详情" name="first">
					<p class="title">{{info.inventor}}</p>
					<p class="sub-title">{{info.name}}</p>
					<el-descriptions class="descriptions" :column="3" size="medium" border>
						<el-descriptions-item label="版权(申请号)">{{info.number}}</el-descriptions-item>
						<el-descriptions-item label="申请人">{{info.realName}}</el-descriptions-item>
						<el-descriptions-item label="IPC分类号">{{info.icp}}</el-descriptions-item>
						<el-descriptions-item label="版权类型">{{info.type}}</el-descriptions-item>
						<el-descriptions-item label="公开号">{{info.openNumber}}</el-descriptions-item>
						<el-descriptions-item label="保护年限">{{info.protectDate}}</el-descriptions-item>
						<el-descriptions-item label="代理机构">{{info.proxy}}</el-descriptions-item>
						<el-descriptions-item label="代理人">{{info.proxyer}}</el-descriptions-item>
						<el-descriptions-item label="公开日">{{info.openDate}}</el-descriptions-item>
						<el-descriptions-item label="发明设计人">{{info.realName}}</el-descriptions-item>
					</el-descriptions>
					<p class="title">摘要</p>
					<span class="text">{{ info.msgOne }}</span>
					<!-- <span class="text">
						一种轮胎烘干装置包括轮胎清洗工具箱、烘干设备以及支撑框架，所述轮胎清洗工具箱包括：沥水隔板、箱体及箱门；所述轮胎清洗具箱包括：沥水隔板、箱体及箱门；所述沥水隔板包括沥水框及若干沥水件，所述烘干设备包括：底座、风机、加热器、风管以及导风壳，所述导风壳包括壳体、若干第一导风板、若干第二导风板以及若干第三导风板。上述轮胎烘干装置，通过轮胎清洗工具箱以及烘干设备，可以在深层次地将轮胎上的杂质清洗干净后对轮胎进行受热均衡的烘干，满足轮胎回收的要求。并且，该轮胎清洗装置的自动化程度高，烘干效率高。
					</span> -->
					<p class="title">主权项</p>
					<span class="text">{{ info.msgTwo }}</span>
					<!-- <span class="text">
						1.一种轮胎烘干装置，其特征在于，包括轮胎清洗工具箱、烘干设备以及支撑框架，所述轮胎清洗工具箱包括：沥水隔板、箱体及箱门；所述沥水隔板包括沥水框及若干沥水件，所述沥水框的一侧设置有若干限位卡槽，所述沥水框的另一侧开设有若干转孔，每一所述沥水件的对应转动设置于一限位卡槽及一所述转孔；所述沥水件包括转轴及挡板，所述挡板与所述转轴连接且位于所述限位卡槽及所述转孔之间，所述转轴的一端设置有限位凸起，所述转轴的一端转动插设于一所述转孔，所述转轴的另一端卡入所述限位卡槽中，所述限位凸起位于所述限位卡槽的槽口；所述箱体具有用于承接轮胎的承重壁、与所述承重壁对应的空置壁、位于所述承重壁两侧的两个接水壁以及位于所述承重壁底部的泄水板，所述箱体于顶部开设入料口，所述箱门与所述箱体连接并盖设所述入料口；所述沥水隔板设置于所述箱门，所述箱门内侧设置有安装环槽，所述沥水框背向所述沥水件的一侧卡设于所述安装环槽上；所述烘干设备包括：底座、风机、加热器、风管以及导风壳，所述风机及所述加热器设置于所述底座上；所述风机的输出端与所述加热器的输入端连通，所述加热器的输出端与所述风管连通；所述导风壳包括壳体、若干第一导风板、若干第二导风板以及若干第三导风板，所述壳体具有集风腔，所述壳体开设有连通所述集风腔的入风口，所述风管的末端与所述入风口连通；所述壳体背向所述入风口开设有若干第一出风口、若干第二出风口以及若干第三出风口，每一所述第一导风板对应一所述第一出风口，所述第一导风板邻近所述第一出风口倾斜设置于所述壳体上；每一所述第二导风板对应一所述第二出风口，所述第二导风板邻近所述第二出风口垂直设置于所述壳体上；每一所述第三导风板对应一所述第三出风口，所述第三导风板邻近所述第三出风口倾斜设置于所述壳体上，且所述第一导风板相对于所述壳体的倾斜方向与所述第三导风板相对于所述壳体的倾斜方向相反。所述空置壁开设有送风孔，所述风管穿设于所述送风孔与所述空置壁连接，所述壳体位于所述箱体内且与所述空置壁抵接；所述支撑框架设置于所述泄水板背向所述箱门的表面上，用于将所述轮胎清洗工具箱撑离地面。
					</span> -->
				</el-tab-pane>
				<!-- <el-tab-pane label="服务详情" name="second">
					<el-descriptions class="descriptions" :column="2" v-for="(item, index) in 10" :key="index">
						<el-descriptions-item label="服务时间">2020.2.18</el-descriptions-item>
						<el-descriptions-item label="服务员编码">AZ01L000008</el-descriptions-item>
						<el-descriptions-item label="服务内容">
							<el-tag size="small">服务1</el-tag>
							<br />
							<el-tag size="small">学校</el-tag>
						</el-descriptions-item>
					</el-descriptions>
				</el-tab-pane>
				<el-tab-pane label="产品咨询" name="third">
					<p class="head-title">资产评估报告（版权）</p>
					<p class="head-sub-title">
						<span>资产评估报告书</span>
						<br />
						<span>XX评报字（2011）第003号</span>
					</p>
					<p class="paragraph">
						<span>A公司：</span>
						<span>
							珠海XX资产评估有限责任公司接受A公司的委托，根据国家关于资产评估的有关规定，本着客观、独立、公正、科学的原则，对A公司拥有的“大功率电热转换体及其技术”的所有权进行了评估。我公司评估人员按照必要的评估程序，对评估对象进行了市场调查与询证，对受托评估的对象在评估基准日二○一一年十一月一日所表现的预期收益价值作出了公允反映。现将资产评估情况及评估结果报告如下：
						</span>
					</p>
					<p>
						<span>一、委托方、资产持有方及评估报告其他使用方</span>
						<span>1、委托方、资产持有方：A公司，A公司于5年前自行研发了该项大功率电热转换体及其处理技术，并获得了发明版权证书，版权的保护期为20年。</span>
						<span>2、评估报告其他使用方：企业版权技术转让相对应的机构及法律、法规另有规定的使用方。</span>
					</p>
					<p>
						<span>二、评估目的</span>
						<span>
							根据评估委托协议的约定，A公司拟将其拥有的专有技术“大功率电热转换体及其技术”出售给B公司合作，本次评估目的为对上述专有技术于评估基准日的预期收益价值进行评估，以对A公司的出售行为提供价值参考依据。
						</span>
					</p>
					<p>
						<span>三、评估对象及评估范围</span>
						<span>本次评估对象为委托方委托评估的“大功率电热转换体及其技术”在未来预期收益的现值。</span>
						<span>
							本次评估的范围为委托方拟进行出售的“大功率电热转换体及其技术”预期收益价值，具体包含大功率电热转换体设计、制造、工艺方面的技术，以及生产产品销售的收入预测和收益预测。
						</span>
					</p>
					<p>
						<span>四、价值类型及定义</span>
						<span>本次评估所使用的价值类型为预期收益价值。</span>
						<span>“预期收益价值”，在此被定义为，该版权技术所生产的产品在未来销售过程中为企业带来的利润收入现值。</span>
					</p>
					<p>
						<span>五、评估基准日</span>
						<span>
							本项目评估基准日定为2011年11月1日，这样与实际现场勘察、评估信息资料分析以及评估目的的实现日期较为接近，有利于评估目的的实现。评估中所采用的价值标准是评估基准日有效的持续经营价值标准。
						</span>
					</p>
					<p>
						<span>六、评估依据</span>
						<span>1、法律法规依据</span>
						<span>(1)中华人民共和国国务院令第91 号(1991 年)《国有资产评估管理办法》;</span>
						<span>(2)原国家国有资产管理局国资发[1992]第36 号《国有资产评估管理办法施行细则》;</span>
						<span>(3)国务院国有资产监督管理委员会第12 号令(2005 年)《企业国有资产评估管理暂行办法》;</span>
						<span>(4)其他与本项评估有关的法律法规。</span>
						<span>2、评估准则依据</span>
						<span>
							(1)财政部发布的《资产评估准则—基本准则》、《资产评估职业道德准则—基本准则》、《资产评估准则—评估报告》、《资产评估准则—评估程序》、《资产评估准则—工作底稿》、《资产评估价值类型指导意见》;
						</span>
						<span>(2)财政部发布的《企业会计准则》、《企业会计制度》;</span>
					</p>
				</el-tab-pane>
				<el-tab-pane label="价值评估报告" name="fourth">
					<el-descriptions class="descriptions" :column="2" v-for="(item, index) in 10" :key="index">
						<el-descriptions-item label="资讯时间" :span="2">2020.02.18.09.32</el-descriptions-item>
						<el-descriptions-item label="资讯内容" :span="2" :contentStyle="{ color: '#46A0E3' }">请问这个版权的价格可以优惠吗？</el-descriptions-item>
						<el-descriptions-item label="回复时间">2020.02.18.16.20</el-descriptions-item>
						<el-descriptions-item label="服务员编码">AZ01L00008</el-descriptions-item>
						<el-descriptions-item label="回复内容" :contentStyle="{ color: '#46A0E3' }">这已经是最低价</el-descriptions-item>
					</el-descriptions>
				</el-tab-pane> -->
			</el-tabs>
		</div>
	</div>
</template>
<style lang="scss" scoped="scoped">
::v-deep .el-tabs__nav-scroll {
	padding-left: 115px;
	padding-top: 1rem;
}
.el-tabs {
	box-shadow: 0px 0px 13px 9px rgba(229, 229, 229, 0.75);
	margin-bottom: 150px;
}

#pane-third.el-tab-pane {
	padding: 45px 110px;
	.head-title {
		text-align: center;
		font-size: 24px;
		margin-bottom: 4rem;
	}
	.head-sub-title {
		text-align: center;
	}
	.paragraph,
	.paragraph ~ p {
		span {
			text-indent: 2rem;
			display: block;
			line-height: 28px;
			&:first-child {
				font-weight: 700;
			}
			&:not(:first-child) {
			}
		}
	}
}
#pane-first.el-tab-pane {
	padding: 45px 115px;
	.title {
		font-size: 26px;
	}
	.sub-title {
		font-size: 14px;
		padding-bottom: 1rem;
	}
	.title + .text {
		margin: 2rem;
		font-size: 14px;
		line-height: 20px;
	}
	.descriptions {
		margin-bottom: 60px;
	}
}
#pane-fourth.el-tab-pane,
#pane-second.el-tab-pane {
	padding: 25px 115px;
	max-height: 600px;
	overflow-y: auto;
	.descriptions {
		&:not(:last-child) {
			margin-bottom: 2rem;
		}
		::v-deep .el-descriptions__body {
			background-color: #f2f2f2;
			padding: 20px 30px;
		}
	}
	.el-tag {
		margin-bottom: 10px;
	}
}

.view {
	padding-top: 48px !important;
}

// .over {
// 	margin-top: 24px;
// 	.scroll-list {
// 		display: flex;
// 		// overflow-x: auto;
// 		li {
// 			border: 1px solid #d32d25;
// 			max-width: 60px;
// 			max-height: 60px;
// 			&:not(:last-child) {
// 				margin-right: 1rem;
// 			}
// 			.el-image {
// 				max-width: 100%;
// 				max-height: 100%;
// 			}
// 			// img {
// 			// 	max-width: 60px;
// 			// 	max-height: 60px;
// 			// }
// 		}
// 	}
// }
.details-info-box {
	display: grid;
	grid-template-columns: 320px auto;
	grid-gap: 1rem;
	margin-bottom: 74px;
	.details-image {
		width: 320px;
		height: 320px;
		display: flex;
		flex-direction: column;
	}
	.pic-zoom {
		// height: 260px;
		width: fit-content;
		margin: 0 auto;
		max-width: 320px;
		max-height: 320px;
	}
	.details-info {
		h3 {
			margin-bottom: 24px;
			min-height: 1.575rem;
		}
		p {
			background-color: #f2f2f2;
			display: grid;
			grid-row-gap: 2rem;
			grid-template-columns: 1fr 1fr;
			padding: 24px;
			margin-top: 1.25rem;
		}
		.span-red {
			color: #d32d25;
		}
		.inquiry-info {
			margin-top: 24px;
			width: 100%;
			.el-button {
				// float: right;
				display: block;
				width: fit-content;
				margin: 0 0 0 auto;
			}
		}
	}
}
.inquiry {
	width: 200px;
	height: 300px;
	box-shadow: 0px 8px 19px 3px rgba(203, 204, 207, 0.65);
	padding: 38px 0;
	border-radius: 4px;
	position: fixed;
	right: 50px;
	top: 160px;
	background-color: #ffffff;
	z-index: 1000;
}
</style>
