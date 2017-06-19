<template>
    <div class="root">
        <back-bar></back-bar>
        <div class="rest-info">
            <img :src="restInfo.image_path | isImgHash">
            <ul class="info">
                <li class="info-top">{{restInfo.name}}</li>
                <li class="info-middle">
                    <span v-if="restInfo.delivery_mode">{{restInfo.delivery_mode.text}}</span> 
                    <span  v-if="!restInfo.delivery_mode">商家配送</span> /
                    <span>{{restInfo.order_lead_time}}分钟送达</span> /
                    <span v-if="restInfo.piecewise_agent_fee">{{restInfo.piecewise_agent_fee.tips}}</span>
                    <span class="fa fa-angle-right right"></span>
                </li>
                <li class="info-bottom">公告： </li>
            </ul>
            <div class="clear"></div>
            <div class="activities" v-for="(item,index) in restInfo.activities" v-if="index==0">
                <span>{{item.description}}</span>
                <span>{{restInfo.activities.length}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import BackBar from '../../common/BackBar'
export default {
    name:'rest-header',
    props: ['restInfo'],
    components: {
        BackBar
    }
}
</script>
<style scoped>
.root{
    width: 100%;
    height: 12rem;
    background-color: rgba(119,103,137,.43);
}
.rest-info{
    padding: 0 1rem;
    color: white;
}
.rest-info img{
    width: 5.6rem;
    height: 5.6rem;
    float: left;
}
.rest-info .info{
    width: calc(100vw - 7.6rem);
    padding-left: 1rem;
    float: left;
}
.info-top{
    font-size: 1.4rem;
}
.info-middle .right{
    float: right;
    font-size: 2rem;
    margin-top: -0.2rem;
}
</style>
