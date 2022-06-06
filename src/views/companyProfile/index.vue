<template>
	<div>
		<div class="no-1 limit-max-width">
			<img src="@/assets/images/homepage/logo_lan.png" alt="" class="logo" />
			<h1 class="logo-title">企业简介</h1>
			<p class="profile-text">
				北纬三十加速器，是常德市政府、常德经开区引进的知识产权服务平台项目，是常德市十四五规划项目，是常德市申报国家知识产权局国家级TISC机构技术与创新支持中心项目。项目重点构建技术与创新支持中心、知识产权交易中心、军民融合技术交易中心、知识产权融资平台、知识产权转化服务平台。
			</p>
			<img src="../../assets/images/companyProfile/img_qiy1.png" alt="">
			<h1 class="logo-title-2">旗下产业</h1>
			<ol class="grid">
				<li @click="$routerUtil.newWindow('https://yuanshengl.com')">
					<img src="../../assets/images/companyProfile/1.png" alt="">
				</li>
				<li >
					<img src="../../assets/images/companyProfile/2.png" alt="">
				</li>
				<li>
					<img src="../../assets/images/companyProfile/3.png" alt="">
				</li>
				<li @click="$routerUtil.newWindow('https://ncq.yuanshengl.com')">
					<img src="../../assets/images/companyProfile/4.png" alt="">
				</li>
			</ol>
		</div>
		<div class="no-2 limit-max-width">
			<h1>战略合作伙伴</h1>
			<ul class="grid">
				<li>
					<img src="../../assets/images/companyProfile/logo_01.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_02.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_03.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_04.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_01.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_02.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_03.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_04.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_01.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_02.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_03.png" alt="">
					<span>IET财金</span>
				</li>
				<li>
					<img src="../../assets/images/companyProfile/logo_04.png" alt="">
					<span>IET财金</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.logo {
	margin: 0 auto 20px auto;
	padding-top: 172px;
	width: fit-content;
}
.logo-title {
	text-align: center;
	letter-spacing: 0.5rem;
	padding-left: 0.5rem;
	margin-bottom: 126px;
}
.logo-title-2 {
	text-align: center;
	letter-spacing: 0.5rem;
	padding-left: 0.5rem;
	margin-top: 126px;
	margin-bottom: 40px;
}
.profile-text {
	text-align: center;
	margin-bottom: 20px;
	& + img {
		width: 100%;
	}
}
.no-1 .grid {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-bottom: 166px;
	li {
		cursor: pointer;
		width: 590px;
		box-shadow: 0px 7px 20px 4px rgba(229, 229, 229, 0.75);
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		// padding: 65px;
		margin-bottom: 20px;
		overflow: hidden;
		img {
			// width: fit-content;
			width: 100%;
			// margin-bottom: 1rem;
		}
	}
}
.no-2 {
	background-color: #F5F7FF;
	h1 {
		text-align: center;
		letter-spacing: 0.5rem;
		padding-left: 0.5rem;
		padding-top: 168px;
		margin-bottom: 40px;
	}
	.grid{
		// display: flex;
		display: grid;
		grid-template-columns: repeat(6,1fr);
		grid-gap: 10px;
		padding-bottom: 166px;
		li {
			border-radius: 8px;
			background-color: #FFFFFF;
			text-align: center;
			img {
				width: fit-content;
				margin: 0 auto;
			}
		}
	}
}
</style>
