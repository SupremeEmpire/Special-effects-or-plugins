import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// 导入页面组件
import Live from "../page/Live.vue"
import Game from "../page/Game.vue"
import Room from "../page/Room.vue"

Vue.use(Router)

export default new Router({
  routes: [
    // 所有直播 路由接口
    {
      path: '/live',
      component: Live
    },
    // 所有游戏分类
    {
      path: '/game',
      component: Game
    },
    // 所有直播房间
    {
      path: '/live/room:id',
      component: Room
    },
  ]
})
