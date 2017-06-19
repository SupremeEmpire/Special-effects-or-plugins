<template>
    <div class="root">
        <rest-header :rest-info="restaurantInfo"></rest-header>
        
    </div>
</template>
<script>
import RestHeader from './RestHeader'
import bus from '../../../tools/bus.js'
export default {
    name:'restaurant-detail',
    components: {
        RestHeader
    },
    data () {
        return {
            restaurantInfo:{}  
        }
    },
    mounted () {
        // 店铺详情
        // https://mainsite-restapi.ele.me/shopping/restaurant/2183063?extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics&latitude=34.74516&longitude=113.74919
        this.$http.get('ele/shopping/restaurant/'+this.$route.params.restid,{
            params:{
                "extras[]":["activities","album","license","identification","statistics"],
                latitude:bus.latitude,
                longitude:bus.longitude
            }
        }).then(function(res){
            console.log(res.body);
            this.restaurantInfo = res.body;
        })
    }
}
</script>
<style scoped>
.root{
    width: 100%;
}
</style>