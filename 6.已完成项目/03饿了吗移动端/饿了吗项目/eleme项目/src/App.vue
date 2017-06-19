<template>
    <div>
        <transition name="tab">
            <tabbar v-show="show" style="position: fixed;">
                <tabbar-item slected link="/main">
                    <img slot="icon" src="./assets/img/index1.png">
                    <span slot="label">外卖</span>
                </tabbar-item>
                <tabbar-item link="/find">
                    <img slot="icon" src="./assets/img/index2.png">
                    <span slot="label">发现</span>
                </tabbar-item>
                <tabbar-item link="/order">
                    <img slot="icon" src="./assets/img/index3.png">
                    <span slot="label">订单</span>
                </tabbar-item>
                <tabbar-item link="/my">
                    <img slot="icon" src="./assets/img/index4.png">
                    <span slot="label">我的</span>
                </tabbar-item>
            </tabbar>
        </transition>
        <transition :name="animateType">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import {Tabbar,TabbarItem} from 'vux'

export default {
    name:'app',
    components: {
        Tabbar,
        TabbarItem
    },
    data () {
        return {
            show:true,
            animateType:'none'
        }
    },
    watch: {
        // 监听路由变化，执行回调函数
        // para1：新路由对象
        // para2：旧路由对象
        $route(to,from){
            // console.log(to);
            // console.log(from);

            var toLevel = to.path.split('/').length
            var fromLevel = from.path.split('/').length
            // console.log('toLevel = '+toLevel)
            // console.log('fromLevel = '+fromLevel)

            if(toLevel == fromLevel){
                // 平级切换
                this.animateType = 'level'
            }else if(toLevel > fromLevel){
                // 进入 1->2,2->3
                this.animateType = 'in'
            }else{
                // 退出 2->1，3->2
                this.animateType = 'out'
            }

            if(toLevel > 2){
                this.show = false;
            }else{
                this.show = true;
            }
        }
    }
}
</script>
<style lang="less">
/*导入样式*/
@import '~vux/src/styles/reset.less';

/*平级切换*/
.level-enter,
.level-enter-active,
.level-leave-active{
    position: absolute;
}

/*进入动画*/
.in-enter-active{
    z-index: 10;
}
.in-enter-active,
.in-leave-active{
    transition: all 0.5s;
    position: absolute;
}
.in-enter{
    transform: translateX(100%)
}
.in-leave-active{
    transform: translateX(-100%)
}
/*出去动画*/
.out-enter-active,
.out-leave-active{
    transition: all 0.5s;
    position: absolute;
}
.out-enter{
    transform: translateX(-100%);
}
.out-leave-active{
    transform: translateX(100%);
    z-index: 10;
}
/*tab动画*/
.tab-enter-active,
.tab-leave-active{
  transition: all 0.5s;
}
.tab-enter,
.tab-leave-active{
  transform: translateY(100%);
}
</style>