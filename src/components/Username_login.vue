<template>
  <div class="login">
    <!-- 登入  注册 -->
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    ></el-menu>
    <!-- QQ  微信 -->
    <!-- <div class="xuanze">
        <router-link to="#">QQ</router-link>
        <router-link to="#">微信</router-link>
    </div>-->

    <div>
      <el-button @click="show = !show">QQ</el-button>
      <el-button @click="show2 = !show2">微信</el-button>

      <transition name="el-fade-in-linear" class="erweima" style="position:relative;">
        <div v-show="show" class="transition-box">
          <div class="erweima">
            <img src="../assets/img/QQ_img.png" alt />
            <div>请打开QQ扫一扫,再点击一下按钮取消二维码~~</div>
          </div>
        </div>
      </transition>
      <transition name="el-fade-in-linear" style="position:relative;">
        <div v-show="show2" class="transition-box">
          <div class="erweima">
            <img src="../assets/img/weixin_img.png" alt />
            <div>请打开微信扫一扫,再点击一下按钮取消二维码~~</div>
          </div>
        </div>
      </transition>
    </div>
    <!-- 账号密码输入区域 -->
    <el-form
      :model="ruleForm2"
      status-icon
      :rules="rules2"
      ref="ruleForm2"
      label-width="100px"
      class="demo-ruleForm"
    >
      <!-- 账号输入框 -->
      <el-form-item label="账号" prop="username" class="shurukuang">
        <el-input type="text" v-model="ruleForm2.username"></el-input>
      </el-form-item>

      <!-- 密码输入框 -->
      <el-form-item label="密码" prop="checkPass" class="shurukuang">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
      </el-form-item>

      <!-- 提交按钮   重置按钮可删除 -->
      <el-form-item class="butn">
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
//引入的头部组件
import My_header from "../components/My_header";

export default {
  components: {
    //引入的头部组件
    My_header,
  },
  data() {
    var checkname = (rule, value, callback) => {
      //账号所用的正则表达式
      let usernameRegExp = /^[a-zA-Z0-9_]{6,12}$/;
      //验证用户输入的值和正则表达是否匹配，如果匹配默认为√
      if (usernameRegExp.test(this.ruleForm2.username)) {
        callback();
      } else {
        //验证用户输入的账号格式是否正确
        callback(new Error("用户名格式不正确!请重新输入"));
      }
    };

    //输入密码框
    var validatePass = (rule, value, callback) => {
      //密码所用的正则表达式
      let passwordRegExp = /^[a-zA-Z0-9_]{8,20}$/;
      //验证用户输入的值和正则表达是否匹配，如果匹配默认为√
      if (passwordRegExp.test(this.ruleForm2.checkPass)) {
        callback();
        //判断密码框是否为空
      } else if (this.ruleForm2.checkPass == "") {
        callback(new Error("密码不能为空"));
      } else {
        //判断密码格式是否正确
        callback(new Error("密码格式错误"));
      }
    };

    return {
      show: false,
      show2: false,
      //存储登录和注册的切换状态
      activeIndex: "2",
      ruleForm2: {
        //存储账号的变量
        username: "",
        //存储密码的变量
        checkPass: "",
        //存储确认密码的变量
      },
      //大概意思是模糊验证变量中的规则
      rules2: {
        //验证        变量名=函数    规则     模糊
        checkPass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkname, trigger: "blur" }],
      },
    };
  },
  methods: {
    // //监测注册和登录
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },

    // 提交表单并且验证表单区域
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          //将相关的信息提交到服务器
          this.axios
            .post(
              "/login",
              "username=" +
                this.ruleForm2.username +
                "&password=" +
                this.ruleForm2.checkPass
            )
            .then((res) => {
              //服务器相应信息中code为0的情况下表示用户名已经存在
              if (res.data.code == 0) {
                this.$alert("登录提示", "用户登录失败", {
                  confirmButtonText: "确定",
                });
              } else {
                this.$alert("登录成功!", {
                  confirmButtonText: "确定",
                });
                //提交Mutation
                this.$store.commit("logined");
                //将用户登录的状态存储到webStorage中
                localStorage.setItem("isLogin", true);
                //路由的跳转
                this.$router.push("/");
              }
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>


<style scoped>
.erweima {
  width: 100%;
}

.transition-box {
  width: 400px;
  height: 333px;
  border-radius: 4px;
  background-color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  left: 0%;
  z-index: 9999;
}
.transition-box img {
  width: 200px;
  margin: 50px 0 20px 0;
}
.butn {
  margin-top: 69px;
}

.el-form {
  margin-top: 30px;
  text-align: left;
}

.shurukuang {
  width: 300px;
}
.login {
  margin: 0 auto;
  width: 337px;
  height: 340px;
  background-color: #ffffff;
  z-index: 99;
  border-radius: 5px;
  padding: 20px 25px;
}

.dengru a {
  display: block;
  margin: 0 15px;
  font-size: 20px;
  color: #71767a;
  text-decoration: none;
  padding: 0 5px;
}
.dengru a:hover {
  color: #0a88d3;
  border-bottom: 2px solid #0a88d3;
}
/* 登入DIV */
.xuanze {
  display: flex;
  justify-content: center;
  width: 337px;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #f0f1f4;
  padding: 20px 0;
}
/* 登入按钮样式 */
.xuanze a {
  /* display:block; */
  width: 43%;
  text-decoration: none;
  border-radius: 50px;
  text-align: center;
  background-color: #d73d32;
  margin: 0 5px;
  color: #fff;
  border: 0 transparent;
  font-size: 100%;
  cursor: pointer;
}
.xuanze a:nth-child(2) {
  background-color: #3b5998;
}
/* 登入样式 */
</style>