<template>
    <div class="root-room">
        <!-- 使用组件 -->
        <back-header>{{roomInfo.room_name}}</back-header>
        <ul>
             <!--房间图片:-->
            <li class="asdaf"> <img :src="roomInfo.room_thumb" alt="roomInfo.room_name"></li>
            <li>房间ID:{{roomInfo.room_id}}</li>
            <li>房间分类:{{roomInfo.cate_name}}</li>
            <li>房间名称:{{roomInfo.room_name}}</li>
        </ul>
        
    </div>
</template>
<script>
import share from './share.js';
export default {
    mixins:[share],
    data: function () {
        return {
            roomInfo:{

            }
        }
    },
    methods:{
        // 获取房间信息
        getRoom(){
            // 转发一下
            var url = "/douyuapi/api/RoomApi/room/"
            + this.$route.params.id
            this.$http.get(url)
            .then(function(res){
                console.log(res.body)
                this.roomInfo = res.body.data;
            })
        }
    },
    created(){
        this.getRoom()
        console.log(this)
    }
}
</script>
<style>
    .asdaf{
        padding-top:0.95rem; 
    }
.root-room ul{
    padding:20px ; 
}
.root-room ul li {
    
    font-size: calc(12rem /20);
    line-height: calc(22rem /20);
    
}
</style>