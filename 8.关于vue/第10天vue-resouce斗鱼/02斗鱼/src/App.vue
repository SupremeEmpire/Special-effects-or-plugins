<template>
  <div id="app">
    <!-- 使用多种动画效果 -->
    <!-- class="main"为路由内最外层加这个class -->
    <transition :name="transitionType">
      <router-view class="main"></router-view>
    </transition>
    <nav class="tab-bar">
      <ul>
        <router-link tag="li" to="/live">所有直播</router-link>
        <router-link tag="li" to="/game">游戏分类</router-link>
  
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      transitionType: ''
    }
  },
  watch: {
    $route: function (to, from) {
      console.log(from.path)
      console.log(to.path)
      if (from.path.indexOf(to.path) > -1) {
        this.transitionType = 'quit'
      } else if (to.path.indexOf(from.path) > -1) {
        this.transitionType = 'page'
      } else {
        this.transitionType = 'skip'
      }

    }
  }
}

</script>
<style>
/* 不加scoped 样式对所有的都起作用,也就是全局 */


/* 父进子 子退父  没关系页面 */

.page-enter-active {
  transition: all 0.4s;
}

.page-enter {
  transform: translateX(100%)
}

.page-leave-active {
  transition: all 0.4s;
  transform: translateX(-100%)
}

.page-leave {}


/* 子退父 */

.quit-enter-active {
  transition: all 0.4s;
}

.quit-enter {
  transform: translateX(-100%)
}

.quit-leave-active {
  transition: all 0.4s;
  transform: translateX(100%)
}

.quit-leave {}

.main {
  width: 100%;
  position: absolute;
  min-height: 100%;
  padding: 0 10px;
  padding-bottom: 45px;
}

#app {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  min-height: 100%;
  
}

.tab-bar {
  position: fixed;
  bottom: 0;
  height: 44px;
  border-top: 1px solid #ccc;
  background-color: white;
  width: 100%;
}

.tab-bar ul li {
  float: left;
  width: 50%;
  line-height: 44px;
  text-align: center;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  border-left: 1px solid #ccc;
}

.tab-bar ul li:first-child {
  border-left: none;
}

/* 选中状态 */

.tab-bar ul .router-link-active {
  color: white;
  background-color: #ccc;
}
</style>