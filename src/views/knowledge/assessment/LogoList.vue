<template>
	<div class="list-item">
		<!--
			address	string 地址
			enterpriseDetails	string 企业详情
			enterpriseName	string 企业简介
			image	string 企业图片
			name	string 联系人
			phone	string 联系电话
		-->
		<img class="left" :src="item.image" alt="" />
		<div class="right">
			<h4 class="title">
				{{item.enterpriseName}}
			</h4>
			<p class="information">
				 {{item.enterpriseDetails}}
			</p>
			<div class="footer flex">
				<p>
					联系人 :
					<span>
						{{item.name}}
					</span>
				</p>
				<p>
					联系方式 :
					<span>
						{{item.phone}}
					</span>
				</p>
			</div>
		</div>
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
};
</script>
<style lang="scss" scoped="scoped">
.list-item {
	border: #eeeeee solid 1px;
	border-radius: 4px;
	padding: 26px;
	display: grid;
	grid-template-columns: 144px auto;
	grid-gap: 24px;
	margin-bottom: 1rem;
	.left {
		width: 144px;
		height: 144px;
		// margin-right: 24px;
	}
	.right {
		width: 100%;
		.title {
			margin-bottom: 12px;
			font-size: 22px;
			font-weight: 500;
		}
		.information {
			color: #666666;
			margin-bottom: 16px;
			padding-bottom: 26px;
			border-bottom: 1px dashed #EEEEEE;
		}
		.footer {
			p {
				width: 200px;
				span {
					padding-left: 1rem;
					color: #666666;
				}
			}
			// .link {
			// 	color: #FF0000;
			// 	&:hover {
			// 		text-decoration: underline;
			// 	}
			// }
		}
	}

}
</style>
