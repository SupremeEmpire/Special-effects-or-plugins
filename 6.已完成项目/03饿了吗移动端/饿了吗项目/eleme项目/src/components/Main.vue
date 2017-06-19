<template>
    <div class="main-root">
        <main-header :position-info="positionInfo" :weather="weather" :hot-search="hotSearch"></main-header>
        <carousel :carousel-data="carouselArray"></carousel>
        <main>
            <div class="loading">
                <img v-if="status == 'loading'" src="../assets/img/loading.gif">
                <span v-if="status == 'fail'">网络问题，请检查网络</span>
            </div>
            <div v-if="status == 'success'">
                <h2 class="recommend">推荐商家</h2>
                <router-link v-for="item in restaurantList" :to="'/main/'+item.id">
                    <restaurant :rest="item"></restaurant>
                </router-link>
            </div>
            <div v-if="status=='success'" class="load-more">
                <load-more tip="正在载入更多商家" style="margin: 0.5rem auto;"></load-more>
            </div>
            <div class="back-top" v-show="isShowBackTop" @click="backTopClick">
                <b class="fa fa-arrow-up"></b>
                <p>顶部</p>
            </div>
        </main>
    </div>
</template>
<script>
import Geohash from '../tools/geohash.js'
import MainHeader from './main/MainHeader'
import Carousel from './main/Carousel'
import Restaurant from './main/Restaurant'
import {LoadMore} from 'vux'
import bus from '../tools/bus.js'

export default {
    name:'main',
    components: {
        MainHeader,
        Carousel,
        Restaurant,
        LoadMore
    },
    data () {
        return {
            positionInfo:{},// 位置
            weather:{},//天气
            hotSearch:[],//热搜
            carouselArray:[],//轮播图
            restaurantList:[],//商家列表
            latitude:34.72476,//纬度
            longitude:113.766,//经度
            status:'loading',//请求状态
            isLoadingMore:false,
            currentOffset:0,
            isShowBackTop:false,
        }
    },
    computed: {
        //根据经纬度计算geohash
        getGeohash(){
            return Geohash.encode(this.latitude,this.longitude,12)
        }
    },
    methods: {
        // 商家列表： 
        // https://mainsite-restapi.ele.me/shopping/restaurants?latitude=34.74516&longitude=113.74919&offset=0&limit=20&extras[]=activities&terminal=h5
        requestRestaurantList(){
            this.isLoadingMore = true;
            this.$http.get('ele/shopping/restaurants',{
                params:{
                    latitude:this.latitude,
                    longitude:this.longitude,
                    limit:20,
                    offset:this.restaurantList.length,
                    "extras[]":"activities",
                    terminal:"h5"
                }
            }).then(function(res){
                // console.log(res);
                this.restaurantList = this.restaurantList.concat(res.body);
                this.status = 'success'
                this.isLoadingMore = false;
            },function(err){
                console.log(err);
                this.status = 'fail';
                this.isLoadingMore = false;
            });
        },
        //点击回到顶部
        backTopClick:function(){
            document.body.scrollTop = 0;
        },
    },
    mounted () {
        bus.latitude = this.latitude;
		bus.longitude = this.longitude;
        this.requestRestaurantList();
        window.onscroll = function(){
            // body高度
            var bodyH = document.body.clientHeight;
            // 距离顶部偏移量
            var scrolltop = document.documentElement.scrollTop||document.body.scrollTop;
            // 可是页面高度
            var windowH = document.documentElement.clientHeight;
            if(windowH+scrolltop >= bodyH-10){
                if(this.isLoadingMore) return;
                console.log('加载更多');
                this.requestRestaurantList();
            }
            if(scrolltop > 400){
                this.isShowBackTop = true;
            }else{
                this.isShowBackTop = false;
            }
        }.bind(this);

        // 请求位置
        // https://mainsite-restapi.ele.me/v2/pois/ww0vsc6q2u
        this.$http.get('ele/v2/pois/'+this.getGeohash)
        .then(function(res){
            // console.log(res);
            this.positionInfo = res.body;
        });
        // 请求天气
        // https://mainsite-restapi.ele.me/bgs/weather/current?latitude=34.72476&longitude=113.766
        this.$http.get('ele/bgs/weather/current',{
            params:{
                latitude:this.latitude,
                longitude:this.longitude
            }
        }).then(function(res){
            // console.log(res);
            this.weather = res.body
        });
        // 请求热搜
        // https://mainsite-restapi.ele.me/shopping/v3/hot_search_words?latitude=34.72476&longitude=113.766
        this.$http.get('ele/shopping/v3/hot_search_words',{
            params:{
                latitude:this.latitude,
                longitude:this.longitude
            }
        }).then(function(res){
            // console.log(res);
            this.hotSearch = res.body
        });
        // 轮播图：
        // https://mainsite-restapi.ele.me/v2/index_entry?geohash=ww0vsc6q2u2&group_type=1&flags[]=F
        this.$http.get('ele/v2/index_entry',{
            params:{
                geohash:this.getGeohash,
                group_type:1,
                'flags[]':'F'
            }
        }).then(function(res){
            // console.log(res);
            this.carouselArray = res.body
        });
    }
}
</script>
<style scoped>
.main-root{
    width: 100%;
    padding-bottom: 50px;
}
.loading{
    text-align: center;
    line-height: 100px;
}
.recommend{
    height: 3rem;
    line-height: 3rem;
    margin-top: 1rem;
    border-bottom: 1px solid #eee;
    background-color: white;
    font-size: 1.4rem;
    padding-left: 1.5rem;
}
.back-top{
    width: 4rem;
    height: 4rem;
    position: fixed;
    bottom: 6rem;
    right: 2rem;
    border: 1px solid grey;
    border-radius: 50%;
    text-align: center;
    color: grey;
    font-size: 1rem;
    background-color: white;
}
</style>