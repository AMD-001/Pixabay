<template>
  <div id="app">

    <router-view/>
  </div>
</template>
<script>
export default {
  provide (){
    return {
      reload: this.reload
    }
  },
  data(){
    return{
      isRouterAlive: true
    }
  },
  methods:{
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function(){
        this.isRouterAlive =true
      })
    }
  }
}
</script>
<style>

</style>
