<template>
    <div class="root">
        <div class="item" v-for="item in items">
            <img :src="item.image_url | addPrefix">
            <p>{{item.title}} </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'carousel-item',
    props: ['items']
}
</script>
<style scoped>
.root{
    display: flex;
    flex-wrap: wrap;
    background-color: white;
}
.item{
    flex-basis: 25%;
    height: 7.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.item img{
    width: 4rem;
    height: 4rem;
}
</style>