<template>
<div>
  <My_header></My_header>
  <div class="waterfall-height-css">
    <div class="image-box" v-for="(img,index) of imgArr" :key="index">

      <router-link :to="{path:'/details', query:{ id: img.id }}">	
				<img v-lazy="img.src" alt="">
			</router-link>

			<!-- 图片底部弹出框 -->
			<div><span>分类 : {{classify}}</span><span>作者 : {{img.writer}}</span></div>

    </div>
  </div>
	<scroll></scroll>
</div>
</template>
<style lang="scss" scoped>
.waterfall-height-css {
  display: flex;
  flex-wrap: wrap;
  .image-box {
    margin: 5px;
    flex-grow: 1;
		overflow: hidden;
		position: relative;
		border-radius: 3px;
  }
  img {
    display: block;
    min-width: 100%;
    height: 200px;
    object-fit: cover;
		transition: all 1.3s;
  }
	.image-box img:hover{
		transform:scale(1.1)
	}
	.image-box>div{
  width: 100%;
  height: 40px;
  background-color: rgba($color: #000000, $alpha: 0.5);
  bottom: -50px;
  transition: all 0.4s;
  position: absolute;
  color: #ccc;
  font-size: 10px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
 }
 .image-box>div>span{
  // display: block;
  padding: 0 10px;
  line-height: 40px;
  
 }
	.image-box:hover>div{
		bottom: 0px;
	}
  &:after {
    content: '';
    display: block;
    flex-grow: 99999;
  }
}
</style>
<script>
	import My_header from '../components/My_header.vue'
	import scroll from '../components/Scroll.vue'
	export default {
		components:{
			My_header,
			scroll
		},
		data() {
		  return {
				imgArr:[],
				classify:"",
		  }
		},
		mounted() {
			//获取动态URL片段信息 -- 当前文章的ID
			let search = this.$route.query.search;
			console.log(search)
			this.classify = search;
			this.axios.get('/search?search='+ search).then((res) => {
					console.log(res.data.results);
					let imgSrc=res.data.results;
					imgSrc.forEach((item)=>{
						item.src=require('../assets/content/'+item.src);
						this.imgArr.push(item)
					})
			})
		},
	}
</script>

