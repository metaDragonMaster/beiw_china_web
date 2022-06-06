<template>
	<div class="view limit-max-width">
		<div class="head-box flex">
			<h1>知识产权投资交易中心</h1>
			<button class="drift-right">我要交易</button>
		</div>
		<div class="image-box"><img src="@/assets/images/transaction/knowledge/banner.png" alt="" /></div>
		<div class="content">
			<h4>知识产权投资交易中心介绍</h4>
			<p>
				中国用30年时间，完成了发达国家100～200年间的城市化进程，城市化超高速发展为经济社会进一步发展带来了严重挑战：环境污染、能源短缺、通货膨胀的压力、交通拥堵、流动人口治安问题等。近年来，随着信息技术的迅猛发展，城市智慧化已成为继工业化、电气化、信息化之后的“第四次浪潮”。建设智慧城市，是当今世界城市发展的前沿趋势，是城市转变经济发展方式、提升城市功能品质、更好地保障和改善民生的重大举措，网络宽带化、管理智能化、产业高端化和应用普及化的城市，是信息时代城市发展的新模式。智慧城市的顶层设计就是要是以信息、知识为核心资源，以新一代信息技术为支撑手段，通过广泛的信息获取和全面感知，快速、安全的信息传输，科学、有效的信息处理，创新城市管理模式、提高城市运行效率、改善城市公共服务水平，全面推进信息化与工业化、城市化、市场化和国际化的融合发展，提升城市综合竞争力。
			</p>
			<p>
				立足城市发展现状，在分析城市发展面临的形势的基础上，提出智慧城市建设的发展目标、体系架构、智慧应用领域工程和建设运行保障，并对城市未来发展的重点领域进行认真分析和谋划，力求通过高水平的顶层设计、系统设计、构架设计和制度设计，使顶层设计更具前瞻性、科学性和操作性，成为引领区域城市发展的行动纲领。
			</p>
		</div>
		<ul class="images flex">
			<li v-for="item in list">
				<img :src="item" alt="">
			</li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		return {
			list:[
				require("@/assets/images/transaction/knowledge/list-1.png"),
				require("@/assets/images/transaction/knowledge/list-2.png"),
				require("@/assets/images/transaction/knowledge/list-3.png"),
				require("@/assets/images/transaction/knowledge/list-4.png"),
			]
		};
	},
	components: {},
	computed: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	padding-top: 22px;
}
.head-box {
	padding: 36px 72px ;
	box-shadow: 0px 4px 8px 0px rgba(214, 220, 223, 0.75);
	border-radius: 1.5rem;
	margin-bottom: 78px;
	button {
		background-color: #3144FF;
		border-radius: 10rem;
		padding: 16px 58px;
		color: #FFFFFF;
	}
}
.image-box img{
	width: 100%;
	margin-bottom: 70px;
}
.content {
	margin-bottom: 100px;
	h4 {
		font-weight: bold;
		margin-bottom: 1rem;
	}
	p {
		text-indent: 24px;
		line-height: 20px;
		font-size: 12px;
	}
}
.images {
	justify-content: center;
	align-items: center;
	padding-bottom: 116px;
	li:not(:last-child) {
		margin-right: 1rem;
	}
}
</style>
