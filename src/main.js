import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuesax/dist/vuesax.css' //Vuesax styles
import 'vue-good-table/dist/vue-good-table.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faExclamation, faAngleRight, faRightLong } from '@fortawesome/free-solid-svg-icons'
import VueGoodTablePlugin from 'vue-good-table';
import Vuesax from 'vuesax';

/* add icons to the library */
library.add(faExclamation);
library.add(faAngleRight);
library.add(faRightLong);

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(Vuesax, { });
Vue.use(VueGoodTablePlugin);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')