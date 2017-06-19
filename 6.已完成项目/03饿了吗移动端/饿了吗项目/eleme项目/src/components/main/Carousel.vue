<template>
    <div>
        <swiper auto loop dots-position="center" style="height: 15rem;">
            <swiper-item v-for="item in fixedArray">
                <carousel-item :items="item"></carousel-item>
            </swiper-item>
        </swiper>
    </div>
</template>
<script>
import { Swiper,SwiperItem } from 'vux'
import CarouselItem from './CarouselItem'

export default {
    name:'carousel',
    props: ['carouselData'],
    components: {
        Swiper,
        SwiperItem,
        CarouselItem
    },
    computed: {
        // 把数组的元素分成8个一组，组成一个小数组，然后再放到一个大数组里面
        fixedArray(){
            var bigArray = [];
            var smallArray = [];
            for (var i = 0; i < this.carouselData.length; i++) {
                smallArray.push(this.carouselData[i]);
                if((i+1)%8==0 || i==this.carouselData.length-1){
                    bigArray.unshift(smallArray);
                    smallArray = [];
                }
            }
            console.log(bigArray);
            return bigArray;
        }
    }
}
</script>
<style scoped>

</style>