<template>
	<div class="limit-max-width view">
		<el-card>
			<div class="flex-column-center">
				<p class="pay">
					价格：
					<span>{{price}}</span>
					元
				</p>
				<div class="qrcode">
					<img src="@/assets/images/pay/zfb.png" alt="">
				</div>
			</div>
			<ul class="descriptions">
				<li>
					商品名称:{{name}}
				</li>
				<li>
					联系邮箱:821474268@qq.com
				</li>
				<li>
					收款银行:建设银行
				</li>
				<li>
					联系人:罗杰文
				</li>
				<li>
					收款账号:43050168704300000715
				</li>
				<li>
					电话号码:18973103188
				</li>
			</ul>
		</el-card>
	</div>
</template>
<script>
export default {
	data(){return{
		name:"",
		price:"",
	}},
	mounted() {
		this.name = this.$route.query.name;
		this.price = this.$route.query.price;
	},
	methods:{

	}
}
</script>
<style  lang="scss" scoped="scoped">
.view {
	padding-top: 1rem;
	padding-bottom: 50px;
}
.pay {
	padding-top: 80px;
	color: #666666;
	span {
		color: #FF0000 ;
		font-size: 36px;
	}
}
.qrcode {
	padding-top: 60px;
	padding-bottom: 60px;
	img {
		width: 180px;
		height: 180px;
	}
}
.descriptions {
	padding-top: 40px;
	padding-bottom: 40px;
	display: flex;
	flex-wrap: wrap;
	li {
		width: 50%;
		padding-left: 200px;
		margin-bottom: 30px;
		color: #666666;
	}
}
</style>
