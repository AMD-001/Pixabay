<template>
  <div class="swiperBox">
    <div class="directionIcon">
      <div class="imgLeft" @click="clickLeft"></div>
      <div class="imgRight" @click="clickRight"></div>
    </div>
    <div id="swiper">
      <div class="imgBox" @mouseenter="enter" @mouseleave="leave">
        <div class="imgDiv" v-for="(item, index) of imgList" :key="index">
          <img :src="item" />
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    speed: Number,
    direction: String
  },
  data() {
    return {
      imgList: [
        require("../../assets/content/ia_300006810.jpeg"),
        require("../../assets/content/ia_300006811.jpeg"),
        require("../../assets/content/ia_300006808.jpeg"),
        require("../../assets/content/ia_300006688.jpeg"),
        require("../../assets/content/ia_300006859.jpeg"),
        require("../../assets/content/ia_300006860.jpeg"),
        require("../../assets/content/ia_300006937.jpeg"),
        require("../../assets/content/ia_300007011.jpg"),
        require("../../assets/content/ia_300007087.jpg"),

      ],
      timer: null,
      theSpeed: this.speed,
      imgWidth: 260,
      theDirection: this.direction
    };
  },
  created() {},
  mounted() {
    this.move();
  },
  methods: {
    //   左边
    clickLeft() {
      this.theDirection = "left";
    },
    // 右边
    clickRight() {
      this.theDirection = "right";
    },
    // 移入
    enter() {
      this.timer = clearInterval(this.timer);
    },
    leave() {
        this.move()
    },
    move() {
      var imgBox = document.getElementsByClassName("imgBox")[0];
      imgBox.innerHTML += imgBox.innerHTML;
      var imgDiv = document.getElementsByClassName("imgDiv");
      imgBox.style.width = imgDiv.length * this.imgWidth + "px"; //设置ul的宽度使图片可以放下
      let that = this;
      function autoScroll() {
        if (imgBox.offsetLeft < -(imgBox.offsetWidth / 2)) {
          //向左滚动
          imgBox.style.left = 0;
        }
        if (imgBox.offsetLeft > 0) {
          //向右滚动
          imgBox.style.left = -(imgBox.offsetWidth / 2) + "px";
        }
        if (that.theDirection == "left") {
          that.theSpeed = -Math.abs(that.theSpeed);
        } else {
          that.theSpeed = Math.abs(that.theSpeed);
        }
        imgBox.style.left = imgBox.offsetLeft + that.theSpeed + "px";
      }
        clearInterval(this.timer)
        this.timer = setInterval(autoScroll, 30); //全局变量 ，保存返回的定时器
        
    }
  },
 
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }
};
</script>
<style scoped lang="less">
.swiperBox {
  height: 365px;
  width: 1200px;
  margin: 20px auto;
  position: relative;
}
.swiperBox .directionIcon {
  position: absolute;
  top: 45%;
  width: 100%;
  left: -10%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  opacity: 0.5;
  z-index: 9;
  pointer-events: none;
}
 
.swiperBox .directionIcon .imgLeft {
  position: absolute;
  left: 80px;
  width: 100px;
  height: 100px;
  background-size: 80%;
  background: red;
  cursor: pointer;
}
 
.swiperBox .directionIcon .imgRight {
  position: absolute;
  right: -160px;
  width: 100px;
  height: 100px;
  background-size: 80%;
  background: red;
  -webkit-transform: rotateY(180deg);
  transform: rotateY(180deg);
  cursor: pointer;
}
.swiperBox #swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.swiperBox #swiper .imgBox {
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
.swiperBox #swiper .imgBox .imgDiv {
  width: 240px;
  height: 365px;
  margin-left: 15px;
  cursor: pointer;
}
.swiperBox #swiper .imgBox .imgDiv img {
  height: 100%;
  width: 100%;
}
</style>
