import Vue from 'vue'
import Person from './person.vue'

new Vue({
    render: h => h(Person)
}).$mount('#person')
