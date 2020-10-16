<template>
<div>
  <My_header></My_header>
  <div class="waterfall-height-css">
    <div class="image-box" v-for="(img,index) of imgArr" :key="index">
      <img v-lazy="img.src" alt="">
    </div>
  </div>
</div>
</template>

<script>
	import My_header from '../components/My_header.vue'

export default {
  	components:{
			My_header,
		},
  name: 'HeightCss',
  data() {
    return {
      imgArr:[],
      // imgList: []
    }
  },
  methods:{
    loadImage() {
    const that = this;


    this.axios.get('/picture').then((res) => {
				console.log(res.data.results)
				let imgSrc=res.data.results;
				imgSrc.forEach((item)=>{
					item.src=require('../assets/content/'+item.src);
					this.imgArr.push(item)
				})
				// console.log(this.imgArr)
			})














  }},
  created() {
    this.loadImage()
  }
}
</script>
<style lang="scss" scoped>
.waterfall-height-css {
  display: flex;
  flex-wrap: wrap;
  .image-box {
    margin: 5px;
    flex-grow: 1;
  }
  img {
    display: block;
    min-width: 100%;
    height: 200px;
    object-fit: cover;
  }
  &:after {
    content: '';
    display: block;
    flex-grow: 99999;
  }
}
</style>