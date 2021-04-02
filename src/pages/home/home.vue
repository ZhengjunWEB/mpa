<template>
    <div>
        <Header />
        我是home页面
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import formatURL from '@/utils/formatURL'
export default {
    components: {
        Header
    },
    created() {
        console.log('组件创建')
        formatURL(window.location.search)
    }
}
</script>

<style>
</style>
