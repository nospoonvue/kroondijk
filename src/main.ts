import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'



Vue.config.productionTip = false
var info = null;
  const  app = new Vue({
  router,
  store,
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted() 
  {
   //info="fdsfsdf";
  },
  render: h => h(App)
}).$mount('#app')

