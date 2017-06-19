<template>
    <div class="root">
        <!-- 使用组件 -->
        <back-header>所有直播列表：</back-header>
        <slot></slot>
        <!-- 列表 -->
        <ul class="live-list">
            <li v-for="live in liveList">
                <router-link :to="'/live/room'+live.room_id">
                <div :style="{backgroundImage:'url('+live.room_src+')'}"></div>
                <p>{{live.room_name}}</p>
                </router-link>
            </li>
            <!-- 使用组件 通过属性传值 -->
            <live-item v-for="live in liveList" :liveattr="live">
            </live-item>
        </ul>
    </div>
</template>
<script>
    // 标题和返回按钮的组件
    // import backheader from "../components/BackHeader.vue"

    // 使用一下混合
    import share from './share.js'
    // 引入子组件
    import liveItem from '../components/liveItem.vue'

    export default {
        // 混入
        mixins:[share],
        data: function () {
            return {
                liveList:[]
            }
        },
        methods: {
            // 获取所有直播
            getLiveList() {
                // 地址:http://open.douyucdn.cn/api/RoomApi/live
                // 注意:第二个参数是对象
                // 对象params:参数对象
                // 服务器代理的方式
                // 1.先发给自己的服务器
                // 2.自己服务器代发
                // 3.得到结果再转给自己
                this.$http.get("/douyuapi/api/RoomApi/live"
                    , {
                        params: {
                            offset: 10,
                            limit: 20
                        }
                    })
                    .then(function (res) {
                        console.log(res.body)
                        this.liveList = res.body.data
                    })
            }
        },
        created() {
            // 获取数据
            this.getLiveList()
        },
        // components: {
        //     "back-header": backheader
        // }
        components: {
            "live-item": liveItem
        }
    }

</script>
<style>
    .root {
        /*background-color: yellow;*/
        padding: 33px 0;
    }
    .live-list{
        margin-top: 10px;
    }
    .live-list li{
        width: calc(145rem /20);
        float: left;
        height:calc(145rem /20);
        border: 1px solid #ccc;
        margin-left: calc(10rem/20);
        margin-top: calc(10rem/20);
    }
    .live-list li div{
        width: calc(144rem /20);
        height: calc(115rem /20);
        /* 覆盖 */
        background-size: cover
    }
    .live-list li p{
        width: calc(145rem /20);
        height: calc(30rem /20);
        line-height: calc(30rem /20);
        overflow: hidden;
    }
</style>