import Vue from 'vue'
// 避免移动端浏览器点击延迟
// （默认在点击和click事件触发之间，有300ms的延迟，fastclick可以避免
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import VueResource from 'vue-resource'

import './assets/font-awesome/css/font-awesome.css'
import './assets/css/base.css'


// 快速点击作用范围
FastClick.attach(document.body)
// 使用路由
Vue.use(VueRouter);
Vue.use(VueResource);



// 路由的配置
import Main from './components/Main'
import RestaurantDetail from './components/main/RestaurantDetail/RestaurantDetail.vue'

import Find from './components/Find'
import Order from './components/Order'
import My from './components/My'
const routes = [
    {path:'/main',component:Main},
    { path: '/main/:restid', component: RestaurantDetail},
    {path:'/order',component:Order},
    {path:'/find',component:Find},
    {path:'/my',component:My},
]
const router = new VueRouter({
    routes
});
// 程序跑起来的初始路由设置
router.push('/main');

import {Actionsheet,AlertPlugin} from 'vux';
// 使用弹出框
Vue.use(AlertPlugin);
//注册为全局组件
Vue.component("Actionsheet",Actionsheet);

// 全局过滤器
import {isImgHash,addPrefix,fixedDistance} from './tools/filter';
Vue.filter('isImgHash',isImgHash);
Vue.filter('addPrefix',addPrefix);
Vue.filter('fixedDistance',fixedDistance);



 // vue 根组件实例
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// 字体大小设置
var html = document.documentElement;
var calcRem = function(){
    var w = html.clientWidth;
    if(w <= 320){
        html.style.fontSize = '10px';
    }else if(w <= 640){
        html.style.fontSize = w/32 + 'px';
    }else{
        html.style.fontSize = '20px';
    }
    console.log('w='+w+'  fontsize='+html.style.fontSize);
}
calcRem();
window.addEventListener("resize",calcRem);
