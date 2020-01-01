import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PageA from '@/components/PageA'
import PageB from '@/components/PageB'


Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/PageA',
        name: 'PageA',
        component: PageA
    },
    {
        path: '/PageB',
        name: 'PageB',
        component: PageB
    }
]
const router = new VueRouter({
    mode: 'history',
    base: '/hello2',
    routes
})
export default router
