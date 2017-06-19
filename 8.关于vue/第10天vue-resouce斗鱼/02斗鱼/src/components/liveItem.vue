<template>
    <li>
        <router-link :to="'/live/room'+liveattr.room_id">
            <div :style="{backgroundImage:'url('+liveattr.room_src+')'}"></div>
            <p>{{liveattr.room_name}}</p>
        </router-link>
    </li>
</template>

<script>
export default {
    //  属性传值
    props: ['liveattr'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },

}
</script>
<style scoped>

</style>
