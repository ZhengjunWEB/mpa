<template>
    <div>
        <Header />
        我是home页面
    </div>
</template>

<script>
import Header from '@/components/header.vue'
export default {
    components: {
        Header
    },
    created() {
        console.log('组件创建')
        // console.log(window.location);
        let search = window.location.search.slice(1)
        console.log(search);
    }
}
</script>

<style>
</style>
