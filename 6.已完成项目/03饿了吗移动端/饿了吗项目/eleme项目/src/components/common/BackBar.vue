<template>
    <header>
		<span @click="back" class="fa fa-angle-left back"></span>
		<slot></slot>
	</header>
</template>
<script>
export default {
    name:'back-bar',
    methods: {
        back(){
            window.history.back();
        }
    }
}
</script>
<style scoped>
header{
    width: 100%;
    height: 44px;
    line-height: 44px;
    color: white;
    padding: 0 2rem;
    font-size: 1.6rem;
}
.back{
    margin-right: 2rem;
    font-size: 3rem;
    line-height: 44px;
}

</style>