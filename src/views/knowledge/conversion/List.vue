<template>
	<div class="item-list">
		<!--
			conversion	string
			转化融资规模
			funds	string
			自有资金规模
			model	integer($int32)
			模式（1.与相关企业合作；2.单独成立企业落户产业园转化）
			name	string
			联系人名称
			phone	string
			联系电话
			projectName	string
			项目名称
			subjectIntroduce	string
			项目及转化需求介绍
		-->
		<h4 class="title">
			{{item.projectName}}
		</h4>
		<p>
			<span>自有资金：</span>
			<span class="price">
				{{item.funds}}
			</span>
		</p>
		<p>
			<span>转化模式：</span>
			<span>
				{{modelLabel(item.model)}}
			</span>
		</p>
		<p>
			<span>转化规模：</span>
			<span>
				{{item.conversion}}
			</span>
		</p>
		<p>
			<span>联系人名称：</span>
			<span>
				{{item.name}}
			</span>
		</p>
		<p>
			<span>联系方式：</span>
			<span>
				{{item.phone}}
			</span>
		</p>
		<p class="infor">
			<span>项目详情：</span>
			<span >
				{{item.subjectIntroduce}}
			</span>
		</p>
	</div>
</template>
<script>
export default {
	props: {
		item: {
			type: Object,
			required: true,
		}
	},
	methods:{
		modelLabel(val) {
			const list = [
				{value:1,label:"与相关企业合作"},
				{value:2,label:"单独成立企业落户产业园转化"},
			]
			let label = '';
			list.map(item=> {
				if(item.value==val) {
					label = item.label
				}
			})
			return label
		},
	},
};
</script>
<style lang="scss" scoped="scoped">
.item-list {
	padding: 25px 0 ;
	&:not(:last-of-type) {
		border-bottom: 1px dashed #EEEEEE;
	}
	& > *:not(:last-child) {
		margin-bottom: 14px;
	}
	.title {
		color: #002E73;
	}
	span {
		color: #666666;
		font-size: 14px;
	}
	.price {
		color: #FF2525;
		font-size: 16px;
	}
	.infor {
		display: grid;
		grid-template-columns: 4.625rem auto;
	}
}
</style>
