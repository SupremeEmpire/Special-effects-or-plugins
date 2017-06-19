<template>
    <div class="root">
        <div v-if="rest.is_new" class="new-mark">
            <span>新店</span>
        </div>
        <img :src="rest.image_path | isImgHash">
        <ul class="rest-info">
            <li class="info info-top">
                 <h3 :class="{premium:rest.is_premium}">{{rest.name}} </h3>
                 <div class="supports">
                     <span v-for="item in rest.supports">{{item.icon_name}} </span>
                 </div>
            </li>
            <li class="info info-middle">
                <div class="rest-rating">
                    <rater v-model="rest.rating" active-color="#FFAA0C" :font-size="starSize"></rater>
                    <span class="rating">{{rest.rating}} </span>
                    <span class="order-count">月售{{rest.recent_order_num}}单 </span>
                </div>
                <div class="deliver" v-if="rest.delivery_mode">
                    <span class="zsd">准时达</span>
                    <span class="fnzs">{{rest.delivery_mode.text}}</span>
                </div>
            </li>
            <li  class="info info-bottom">
                <div class="price">
                    <span>￥{{rest.float_minimum_order_amount}}起送</span>
                    <span class="delivery-fee">配送费约￥{{rest.float_delivery_fee}}</span>
                </div>
                <div class="distancee">
                    <span>{{rest.distance | fixedDistance}}</span>
                    <span class="wait-time">{{rest.order_lead_time}}分钟</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import {Rater} from 'vux'
export default {
    name:'restaurant',
    props: ['rest'],
    components: {
        Rater
    },
    data () {
        return {
            starSize:10
        }
    },
    methods: {
        calcStarSize(){
            var html = document.documentElement;
            this.starSize = html.style.fontSize.replace('px','')*1;
            // console.log(this.starSize); 
        }
    },
    mounted () {
        this.calcStarSize();
        window.addEventListener("resize",this.calcStarSize);
    },
    destroyed () {
       window.removeEventListener("resize",this.calcStarSize);
    }
}
</script>
<style scoped>
.root{
    width: 100vw;
    height: 7.6rem;
    padding: 1.3rem 1rem;
    border-bottom: 1px solid #eee;
    background-color: white;
    position: relative;
}
.new-mark{
    position: absolute;
    left: 0;
    top: 0;
    height: 3rem;
    width: 3rem;
    background: linear-gradient(135deg,#26ce61,#26ce61 50%,transparent 0);
    z-index: 100;
}
.new-mark span{
    color: white;
    font-weight: bold;
    display: block;
    transform: rotate(-45deg);
    font-size: 0.8rem;
}
.root img{
    width: 5rem;
    height: 5rem;
    float: left;
}
.rest-info{
    width: calc(100vw - 7rem);
    float: left;
    padding-left: 1rem;
}
.info{
    display: flex;
    justify-content: space-between;
    color: rgb(102, 102, 102);
    line-height: 1.6rem;
}
.info-top h3{
    width: 15rem;
    height: 1.6rem;
    font-size: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: rgb(51, 51, 51);
}
.premium::before{
    content: '品牌';
    background-color: #FFD930;
    font-weight: bold;
    font-size: 1rem;
    padding: 2px;
    border-radius: 2px;
    margin-right: 0.5rem;
}
.info-top .supports span{
    width: 1.4rem;
    height: 1.4rem;
    font-size: 1rem;
    border: 1px solid #eee;
    line-height: 1.4rem;
    text-align: center;
    margin: 0 0.2rem;
}
.info-middle .rest-rating{
    display: flex;
    align-items: center;
}
.info-middle .rating{
    color: #ff6000;
    margin: 0 0.5rem;
}
.info-middle .deliver{
    width: 9rem;
    height: 2rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.info-middle .deliver span{
    height: 1.4rem;
    line-height: 1.2rem;
    text-align: center;
    border-radius: 0.2rem;
    color: white;
    padding: 0 0.2rem;
    margin: 0 0.2rem;
}
.info-middle .deliver .zsd{
    border: 1px solid rgb(68, 165, 255);
    color: rgb(68, 165, 255);
}
.info-middle .deliver .fnzs{
    background-color: rgb(68, 165, 255);
}
.info-bottom .delivery-fee::before{
    content: ' / ';
}
.info-bottom .wait-time{
    color: rgb(68, 165, 255);
}
.info-bottom .wait-time::before{
    content: ' / ';
    color: rgb(102, 102, 102);
}
</style>