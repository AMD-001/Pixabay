<template>
	<div>
		<div id="toTop" @click="onClick">
			<div>
				<img src="../assets/img/top.png" alt="">
				<span>返回顶部</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			showIcon() {
				if (!!document.documentElement.scrollTop && document.documentElement.scrollTop > 1200) {
					// 页面高度大于1000执行操作
					document.getElementById("toTop").style.right = "0";
				} else {
					// 页面高度小于200执行操作
					document.getElementById("toTop").style.right = "-125px";
				}
			},
			onClick(e) {
				window.scroll(0,0)
			},
		},
		mounted() {
			window.addEventListener("scroll", this.showIcon);
		},

	}
</script>

<style>
	#toTop {
		width: 125px;
		height: 58px;
		position: fixed;
		right: 0px;
		bottom: 20px;
		transition: .3s;
		overflow: hidden;
		background-color: #fff;
		border-radius: 10px 0px 0px 10px;
	}

	#toTop img {
		width: 59px;
	}

	#toTop span {
		float: right;
		margin-top: 16px;
	}
</style>
