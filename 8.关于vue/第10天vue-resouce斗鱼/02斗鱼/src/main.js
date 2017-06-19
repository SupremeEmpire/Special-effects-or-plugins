// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 导入vue模块 引入vue.js是一样的
import Vue from 'vue'
// 导入单文件组件 .vue可以省略
// 导入的内容就是 组件导出的内容
import App from './App.vue'
// 导入的路由
import router from './router'

// 导入vue-resource
import VueResource from "vue-resource"

// 使用插件
Vue.use(VueResource)

// 引入css 直接导入到页面
// 在head 标签追加的style标签
import './assets/Font-Awesome/css/font-awesome.css'

// 没有导出的js也可以引入
import './assets/js/jquery.js'
console.log($)

// 导入img会变成data base 64
import img from './assets/logo.png'
console.log(img)

Vue.config.productionTip = false
// 过滤器
// Vue.filter('cutDown', function (text) {
//   return text.subString(0, 15)
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // 导入路由
  router,
  // 根组件 加载到页面中去
  template: '<App/>',
  components: { App }
})
// 改变html字体大小
function calcRem() {
  var html = document.querySelector('html');
  var w = document.documentElement.clientWidth;
  // 让页面字体大小为20
  // 字体大小设置12以下,有些浏览器会转12
  // 使用的320效果图
  html.style.fontSize = w / 16 + 'px'
  // 10px 0.5rem
}
calcRem()
window.onresize = function () {
  calcRem()
}