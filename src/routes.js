
import Vue from 'vue'
import VueRouter from 'vue-router'
import Task from './modules/task/Task.vue'
import Home from './modules/home/Home.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: Home},
        {path: '/task', component: Task},
    ]
})