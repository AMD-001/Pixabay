<template>
  <div class="home">
    <div class="kuan">
      <el-row :gutter="20" type="flex" justify="space-around">
        <!-- <el-col :span="2">
        <img alt="Vue logo" src="../assets/img/pixoboy.jpg" />
        </el-col>-->
        <el-col :span="10" :xs="24" :md="16" :lg="15" class="header_left">
          <div class="grid-content bg-purple">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item>
                <router-link to="/">
                  <img alt="Vue logo" src="../assets/img/pixoboy.jpg" />
                </router-link>
                
              </el-menu-item>
              <el-menu-item index="1">
                <router-link to="/search?search=人物">人物</router-link>
              </el-menu-item>
              <el-menu-item index="2">
                <router-link to="/search?search=鲜花">鲜花</router-link>
              </el-menu-item>
              <el-menu-item index="3">
                <router-link to="/search?search=城市">城市</router-link>
              </el-menu-item>
              <el-menu-item index="4">
                <router-link to="/search?search=健身">健身</router-link>
              </el-menu-item>
              <el-menu-item index="5">
                <router-link to="/search?search=浪漫">浪漫</router-link>
              </el-menu-item>
              <el-menu-item index="6" disabled>
                <router-link to>动物</router-link>
              </el-menu-item>
              <el-menu-item index="7" disabled>
                <router-link to>汽车</router-link>
              </el-menu-item>
              <el-menu-item index="8" disabled>
                <router-link to>海洋</router-link>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :span="10">
          <div class="grid-content bg-purple header_right">
            <el-menu
              :default-active="activeIndex"
              class="el-menu-demo"
              mode="horizontal"
              @select="handleSelect"
            >
              <el-menu-item id="login" v-if="!this.$store.state.isLogin">
                <router-link to="/register" >注册&nbsp;/&nbsp;登录</router-link>
              </el-menu-item>
              <el-menu-item id="login" v-else>
                <el-dropdown>             
                    <span class="el-dropdown-link" >
                      登录成功
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>                
                  <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item ><span @click="logout()">注销</span> </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </el-menu-item>
              <el-menu-item>
                <router-link to="#" id="upload">
                  <img src="../assets/img/_20200908201834.png" />
                  上传
                </router-link>
              </el-menu-item>
            </el-menu>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  inject:['reload'],
  created(){
      console.log(`这是默认状态${!this.$store.state.isLogin}`)
  },
    
  data() {
    return {
      index: "",
      activeIndex: "1",

    };
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    //注销按钮
    logout(){
     this.$store.commit("logined",false);
     //清除登录记录
     localStorage.clear();
     //刷新当前页面，因为清除记录后不会立即返回注册状态，必须刷新一下，才会显示注册状态。
     //location.reload()
     this.$router.go(0)
    }
  },
 
};
</script>

<style>
.el-menu.el-menu--horizontal {
  border: 0 !important;
}
.kuan {
  max-width: 2300px;
  margin: 0 auto;
}
.header_right {
  min-width: 320px;
  display: flex;
  justify-content: flex-end;
}
.bg-purple {
  background-color: white !important;
}
a {
  text-decoration: none;
}
.el-col {
  border-radius: 4px;
}

.bg-purple {
  background: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.header_left {
  min-width: 750px;
}
.header_right img {
  width: 20px;
}

.header_right .el-menu--horizontal > .el-menu-item:last-child > a {
  padding: 10px 20px;
  border-radius: 25px;
  color: white;
  background-color: #02be6e;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 3px solid black !important;
}
.home {
  width: 100%;
  height: 65px;
  margin: 0 auto;
  background-color: white;
}
#login,
#upload {
  border: 0 !important;
}
</style>