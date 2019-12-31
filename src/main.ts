import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'


//axios
//.get('https://api.coindesk.com/v1/bpi/currentprice.json')
//.then(response => this.data.info = response.data.bpi)

Vue.config.productionTip = false
var info = null;
new Vue({
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

