<template>
	<div>
		<div class="searchImg">
			<!-- 设置图片模糊效果 -->
			<!-- <div class="bg bg-blur"></div> -->
			<div class="searchContent">
				<!-- 搜索框上面的标题文字 -->
				<div class="searchText">
					<span>令人惊叹的免费图片和免版税库存</span>
					<span>我们的才华横溢的社区分享了超过180万种高品质的图片和视频。</span>
				</div>
				<!-- 搜索框 -->
				<input type="text" placeholder="搜索图片" class="searchInput" v-model="searchs" @keyup.enter="btn">
				<!-- <button class="search" @click="btn">搜索</button> -->

				<!-- 搜索框下面的分类 -->
				<div class="searchAssortment">
					<span>流行图片：</span>
					<span>背景，</span>
					<span>自然，</span>
					<span>学校，</span>
					<span>商业，</span>
					<span>食品，</span>
					<span>办公室，</span>
					<span>计算机，</span>
					<span>爱情，</span>
					<span>金钱，</span>
					<span>鲜花，</span>
					<span>狗</span>
					<span>....</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				searchs: ""
			}
		},
		methods: {
			btn() {
				this.$router.push({
					path: '/search',
					query: {
						search: this.searchs
					}
				});
			}
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
	}

	.searchImg {
		height: 528px;
		/* 背景图片居中 */
		background-position: center center;
		/* 设置背景图片 */
		/* background-image: url(../assets/img/12-48-41-329_1920x430.webp); */
		background-image: url(../assets/img/20-58-28-361_1920x430.webp);
		/* 背景不重复 */
		background-repeat: no-repeat;
		/* 背景从满div */
		background-size: cover;
	}

	/* 内容区 */
	.searchContent {
		/* width: 100%; */
		height: 100%;
		margin: 0 auto;
		text-align: center;
		/* border: 1px solid red; */
	}

	/* 文字设置 */
	.searchText {
		padding-top: 160px;
	}

	.searchText span:first-child {
		font-size: 32px;
		font-weight: bold;
		color: #fff;
		display: block;
	}

	.searchText span:last-child {
		margin: 25px;
		font-size: 16px;
		color: #fff;
		display: block;
	}

	/* input 输入框*/
	.searchInput {
		width: 600px;
		height: 30px;
		margin-top: 12px;
		border-radius: 5px;
		padding: 11px 0px 11px 20px;
		border: 0;
	}

	.search {
		width: 80px;
		height: 50px;
		border: 0px;
		background-color: #0aa1eb;
		color: #fff;
		font-size: 20px;
		outline: none; 
		border-radius: 5px;
		margin-left: 5px;
	}

	/* 标签文字 */
	.searchAssortment {
		margin-top: 8px;
	}

	.searchAssortment span {
		font-size: 14px;
		color: #fff;
	}
</style>
