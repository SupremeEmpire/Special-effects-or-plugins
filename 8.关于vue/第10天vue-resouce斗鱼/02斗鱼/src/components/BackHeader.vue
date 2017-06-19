<template>
  <div class="header">

    <i @click="back" class="icon icon-arrow-left"></i>
    <span class="title">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    back(){
      //  后退
      window.history.back()
    }
  }
}
</script>


<style scoped>
.header{
  position: fixed;
  width: 100%;
  height: 44px;
  line-height: 44px;
  background-color: #333;
  font-size: 16px;
  top: 0;
  z-index: 1000;
  left: 0;
}
.header i{
  color: #999;
  margin: 10px;
}
.header .title{
  color: #ddd;
}
</style>
