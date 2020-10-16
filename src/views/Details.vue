<template>
	<!-- 唯一的根div -->
	<div>
		<!-- 第一行头导航开始-->
		<My_header></My_header>
		<!-- 第一行头导航结束 -->
		<!-- 内容区域开始 -->
		<div id="content">
			<div class="left">
				<!-- 详情页图片已获取到！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！ -->
				<img v-for="(k,v) of maximg" :key="v" :src="k.src" alt="">
				<div class="hidden">
				</div>
				<!-- 评论框 -->
			</div>
			<!-- 右侧侧边栏 -->
			<div class="inside">
				<div class="once">
					<!-- 作者头像已获取到！！！！！！！！！！！！！ -->
					<div href="#" class="writer"><img v-for="(k,v) of maximg" :key="v" :src="k.Photo" alt=""></div>
					<!-- 作者名称已获取到！！！！！！！！！！！！！！！！！！ -->
					<span v-for="(k,v) of maximg" :key="v">{{k.writer}}</span>
				</div>
				<div class="two">
					<el-button type="primary" round size="mini"><img src="../assets/img/dianzan-shixin.png" alt="">42</el-button>
					<el-button type="primary" round size="mini"><img src="../assets/img/xingxing.png" alt="">12</el-button>
					<el-button type="info" round size="mini"><img src="../assets/img/fenxiang.png" alt=""></el-button>
				</div>
				<div class="four">
					<el-button type="success" round size="medium" icon="el-icon-download" @click="down">免费下载</el-button>
				</div>
				<div class="xinxi">
					<div v-for="(k,v) of maximg" :key="v">
						<p>分辨率:</p><span>{{k.width}} × {{k.height}}</span>
						<p>作者:</p><span>{{k.writer}}</span>
						<p>下载量:</p><span>9999</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import My_header from '../components/My_header.vue';
	export default {
		components: {
			My_header
		},
		data() {
			return {
				input: '',
				nav: false,
				footer: false,
				maximg: [],
			}
		},
		mounted() {
			let details = this.$route.query.id;
			console.log(details)
			this.axios.get('/details?details=' + details).then((res) => {
				console.log(res)
				let data = res.data.results;
				data.forEach((item) => {
					console.log(item)
					item.src = require("../assets/content/" + item.src);
					item.Photo = require("../assets/content/" + item.Photo);

					this.maximg.push(item);
					console.log(this.maximg)
				});
			})
		},
		methods: {
			down() {
				var a = document.createElement('a')
				let details = this.$route.query.id;
				console.log(details)
				this.axios.get('/details?details=' + details).then((res) => {
					console.log(res)
					let data = res.data.results;
					data.forEach((item) => {
						console.log(item)
						a.download = require("../assets/content/" + item.src)
						// 设置图片地址
						a.href = require("../assets/content/" + item.src)
						a.click();
					});
				})
			}
		},
	}
</script>

<style scoped>
	.writer {
		display: inline-block;
		width: 50px;
	}

	#header {
		position: relative;
		width: 100%;
		margin: 10px;
	}

	/* 图片 */
	.left {
		position: relative;
		width: 58%;
		margin-left: 5%;
		float: left;
	}

	/* 图片大小 */
	.left>img {
		width: 100%;
		border-radius: 5px;
		height: auto;
	}

	/* 右部分 */
	.inside {
		width: 30%;
		float: right;
		margin-right: 2%;
	}



	.once>div>img {
		margin-right: 5PX;
		border-radius: 50%;
		vertical-align: middle;
		width: 100%;
	}

	.once span {
		padding-left: 25px;
	}

	.two {
		margin-top: 25px;
	}



	/* 按钮 */
	.four>button {
		width: 100%;
		margin: 20px 0;
	}

	.xinxi {
		padding: 10px;
		background-color: rgba(0, 0, 0, 0.1);
	}

	.xinxi p {
		margin: 10px;
	}

	.xinxi span {
		margin: 10px;
	}
</style>
