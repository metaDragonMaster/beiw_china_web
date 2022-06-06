<template>
	<div class="list-item">
		<!-- <img class="left" src="@/assets/images/icon.png" alt="" /> -->
		<img class="left" :src="item.logo" alt="" />
		<div class="right">
			<h4 class="title">
				<!-- 清华大学 -->
				{{ item.name }}
			</h4>
			<p class="information ">
				<span class="font-hide-2">
					{{ item.information || item.introduction }}
					<!-- 
						清华大学（TsinghuaUniversity），简称“清华”，是中华人民共和国教育部直属的全国重点大学，位列国家“双一流”A类、“985工程”、“211工程”，入选“2011计划”、“珠峰计划”、“强基计划”、“111计划”，为九校联盟（C9）、松联盟、中国大学校长联谊会、亚洲大学联盟、环太平洋大学联盟、清华—剑桥—MIT低碳大学联盟成员、中国高层次人才培养和科学技术研究的基地，被誉为“红色工程师的摇篮”。学校前身清华学堂始建于1911年，校名“清华”源于校址“清华园”地名，是晚清政府设立的留美预备学校，其建校的资金源于1908年美国退还的部分庚子赔款。1912年更名为清华学校。1928年更名为国立清华大学。1937年抗日战争全面爆发后，南迁长沙，与国立北京大学、私立南开大学组建国立长沙临时大学，1938年迁至昆明改名为国立西南联合大学。1946年迁回清华园。1949年中华人民共和国成立，清华大学进入新的发展阶段。中国高等院校1952年院系调整后成为多科性工业大学。1978年以来逐步恢复和发展为综合性的研究型大学。
					 -->
				</span>
			</p>
			<div class="footer flex">
				<p>
					联系人 :
					<span>
						<!-- 张三 -->
						{{ item.contactName }}
					</span>
				</p>
				<p>
					联系方式 :
					<span>
						<!-- 15188888888 -->
						{{ item.contactPhone }}
					</span>
				</p>
				<button class="link drift-right" @click="$routerUtil.toName('servicePatent', { name: item.name })">专利详情 > ></button>
			</div>
		</div>
		<!-- 		address: '', //地址
		platformType: null //平台类型 -->
	</div>
</template>
<script>
export default {
	data() {
		return {};
	},
	props: {
		item: {
			type: Object,
			required: true
		}
	}
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
			border-bottom: 1px dashed #eeeeee;
		}
		.footer {
			p {
				width: 200px;
				span {
					padding-left: 1rem;
					color: #666666;
				}
			}
			.link {
				color: #ff0000;
				&:hover {
					text-decoration: underline;
				}
			}
		}
	}
}
</style>
