import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
        //  path: '/workstationbooking/BookingSystem',
        path: '/',
        name: 'BookingSystem',
        component: () => import(/* webpackChunkName: "about" */ '../views/BookingSystem.vue')
    },

    {
        path: '/workstationbooking/SelectLocation',
        name: 'SelectLocation',
        component: () => import(/* webpackChunkName: "about" */ '../views/Booking/SelectLocation.vue')
    },
    {
        path: '/workstationbooking/DateTimeChoose',
        name: 'DateTimeChoose',
        component: () => import(/* webpackChunkName: "about" */ '../views/Booking/DateTimeChoose.vue')
    },
    {
        path: '/workstationbooking/WorkstationGroup',
        name: 'WorkstationGroup',
        component: () => import(/* webpackChunkName: "about" */ '../views/Booking/WorkstationGroup.vue')
    },

    {
        path: '/workstationbooking/BookingConfirmation',
        name: 'BookingConfirmation',
        component: () => import(/* webpackChunkName: "about" */ '../views/Booking/BookingConfirmation.vue')
    },

    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },
    
]

const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    base: '/',
    routes
})

export default router


