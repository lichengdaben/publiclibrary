import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Booking/HomeView.vue'

Vue.use(VueRouter)

const routes = [
{
 path: '/workstationbooking/Home',
  name: 'home',
   component: HomeView
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
  path: '/workstationbooking/BookingDetails',
  name: 'BookingDetails',
  component: () => import(/* webpackChunkName: "about" */ '../views/Booking/BookingDetails.vue')
},
{
  path: '/workstationbooking/BookingConfirmation',
  name: 'BookingConfirmation',
  component: () => import(/* webpackChunkName: "about" */ '../views/Booking/BookingConfirmation.vue')
},
{
  path: '/workstationbooking/TermPageH5',
  name: 'TermPageH5',
  component: () => import(/* webpackChunkName: "about" */ '../views/Booking/TermPageH5.vue')
},
{
//  path: '/workstationbooking/BookingSystem',
path: '/',
  name: 'BookingSystem',
  component: () => import(/* webpackChunkName: "about" */ '../views/BookingSystem.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base:'/app',
  routes
})

export default router


