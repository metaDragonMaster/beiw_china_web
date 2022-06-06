<template>
	<div class="view limit-max-width-inset">
		<el-row :gutter="10">
			<el-col class="centent" :span="17">
				<el-card>
					<div slot="header" class="card-header"><span>常见问题</span></div>
					<ul class="problem-ul">
						<li v-for="item in list" :key="item.id">
							<p>{{item.text}}</p>
						</li>
					</ul>
				</el-card>
				<el-card>
					<div slot="header" class="card-header"><span>您的问题</span></div>
					<el-input v-model="attr" type="textarea" :autosize="{ minRows: 12, maxRows: 18}" placeholder="请输入您要咨询的问题"></el-input>
				</el-card>
			</el-col>
			<el-col class="sticky" :span="7">
				<el-card>
					<div slot="header" class="card-header"><span>常见问题</span></div>
					<ul class="kefu" >
						<li class="flex-align-center" v-for="item in 3">
							<img src="../../assets/iconImages/icon_kefu.png" alt="">
							<div>
								<p>客服</p>
								<span>123456</span>
							</div>
						</li>
					</ul>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
<script>
export default {
	data() {
		return {
			attr:"",
			list:[
				{
					id:"1",text:"如何查看我的手机号绑定情况？",
				},
				{
					id:"2",text:"如何绑定换绑手机号？",
				},
				{
					id:"3",text:"为什么我需要绑定手机号？",
				},
				{
					id:"4",text:"手机号绑定和实名认证手机号绑定的含义和区别？",
				},
				{
					id:"5",text:"如何查看已有会员和会员到期时间？",
				},
				{
					id:"6",text:"支持对公转账吗？",
				},
				{
					id:"7",text:"我充值VIP的话是立刻生效吗？",
				},
				{
					id:"8",text:"充值了会员，还是不能下载？",
				},
			]
		};
	},
	components: {},
	mounted() {},
	methods: {}
};
</script>
<style lang="scss" scoped="scoped">
.view {
	position: relative;
	padding-top: 1rem;
	padding-bottom: 1rem;
	.sticky {
		position: sticky;
		top: 80px;
		left: 0;
	}
	.centent {
		min-height: 900px;
	}
	.problem-ul {
		display: flex;
		flex-wrap: wrap;
		color: #666666;
		li {
			width: 50%;
			margin: 15px 0;
		}
	}
	.el-card {
		margin-bottom: 20px;
	}
	.card-header {
		font-size: 22px;
	}
	::v-deep .el-card__header {
		background-color: #FAFAFA;
	}
	.kefu li.flex-align-center{
		&:not(:last-child) {
			margin-bottom: 1rem;
		}
		img {
			width: 30px;
			height: 30px;
			margin-right: 1rem;
		}
		img + div {
			p {
				color: #666666;
			}
			span {
				color: #999999;
			}
		}
	}
}
</style>
