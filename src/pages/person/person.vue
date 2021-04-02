<template>
  <div>
      <Header />
      我是person页面
  </div>
</template>

<script>
import Hellow from '@/utils/hellow.js'
import Header from './components/header.vue'
export default {
    components: {
        Header
    },
    mounted() {
        Hellow()
        document.title = '小米手机-为发烧而生！！！！！！'
    }
}
</script>

<style>

</style>
