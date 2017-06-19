<template>
    <div class="root">
        <header class="header">
            <address>
                <span class="fa fa-map-marker"></span>
                {{positionInfo.name}}
            </address>
            <div class="weather">
                <p class="weather-info">
                    <span>{{weather.temperature}}° </span>
                    <span>{{weather.description}} </span>
                </p>
                <img :src="weather.image_hash | isImgHash">
            </div>
            <form class="search">
                <input type="text" placeholder="搜索商家、商品">
            </form>
            <scroller lock-y scrollbar-x v-if="hotSearch.length > 0">
                <div class="hot-search-content">
                    <span class="hot-search-item" v-for="item in hotSearch">
                        {{item.word}}
                    </span>
                </div>
            </scroller>
        </header>
    </div>
</template>
<script>
import {Scroller} from 'vux'
export default {
    name:'main-header',
    components: {
        Scroller
    },
    props: ['positionInfo','weather','hotSearch']
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 10.6rem;
    padding: 1rem;
    background-color: rgb(0, 150, 255);
    color: white;
}
address{
    font-style: normal;
    font-size: 1.6rem;
    width: 16rem;
    height: 2rem;
    overflow: hidden;
    float: left;
}
.weather{
    float: right;
}
.weather-info{
    float: left;
}
.weather-info span{
    float: left;
    width: 100%;
    line-height: 1.4rem;
}
.weather img{
    width: 3rem;  
}
.search{
    width: 100%;
    text-align: center;
}
.search input{
    width: 100%;
    height: 30px;
    border-radius: 15px;
    border: none;
    outline: none;
    text-align: center;
    color: rgb(51, 51, 51);
}
.hot-search-content{
    white-space: nowrap;
    display: inline-block;
    margin-top: 0.5rem;
}
.hot-search-item{
    color: white;
    margin: 0 0.8rem;
    font-size: 1.2rem;
}
</style>