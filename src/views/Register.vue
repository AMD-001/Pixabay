<template>
  <div class="bg_img">
    <img src="../assets/img/download.webp" alt />
    <My_header></My_header>

    <table></table>
    <div class="user">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label=""></el-tab-pane>
        <el-tab-pane label=""></el-tab-pane>
        <el-tab-pane label=""></el-tab-pane>
        <el-tab-pane label=""></el-tab-pane>
        <el-tab-pane label="注册" name="first">
            <username></username>
        </el-tab-pane>
        <el-tab-pane label="登录" name="second">
            <Username_login></Username_login>
        </el-tab-pane>

      </el-tabs>
    </div>
  </div>
</template>
<script>
//引入的头部组件
import My_header from "../components/My_header";
import Username from "../components/Username";
import Username_login from "../components/Username_login";

export default {
  components: {
    //引入的头部组件
    My_header,
    Username,
    Username_login,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>


<style scoped>
.el-tabs__nav{
  margin: 0 auto !important;
  
}
.user{
  width: 400px;
  height: 450px;
  background-color: white;
  margin: 80px auto;
  text-align: center;
  border-radius: 5px;
}
img {
  position: fixed;
  left: -23%;
  z-index: -2;
  height: 100vh;
  transform: scale(1);
  filter: blur(5px);
}
.el-form {
  margin-top: 30px;
  text-align: left;
}
</style>