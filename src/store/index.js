import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //标识用户是否已经登录
    isLogin:localStorage.getItem('isLogin') || false
  },
  mutations: {
    //已经登录成功
    logined(state){
      state.isLogin = true;
    }
    
  },
  actions: {
  },
  modules: {
  }
})
