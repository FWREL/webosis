import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router)
import firstPage from './components/pages/myFirstVuePage.vue'
const routes = [
    {
        path: '/my-vue',
        component: firstPage
    }
]

export default new Router({
    mode: 'history',
    routes
})