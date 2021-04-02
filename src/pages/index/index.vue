<template>
    <div>
        <Header />
        我是index页面
        <div>
            <a href="/home?id=1&from=header">跳转到home页面</a>
            <a href="/person">跳转到person页面</a>
            <div>{{ a }}</div>
            <button @click="change">点击</button>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header'
export default {
    components: {
        Header
    },
    data() {
        return {
            a: 11111
        }
    },
    created() {
        console.log('index页面加载');
    },
    updated() {
        console.log('数据发生了改变');
    },
    beforeDestroy() {
        console.log('页面被卸载了');
    },
    methods: {
        change() {
            this.a = 1212121
        }
    }
    
}
</script>

<style scoped>
    a {
        margin-right: 5px;
    }
</style>
