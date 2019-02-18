import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import './assets/css/base.css'; //公共资源 css本身会暴露
import './assets/iconfont/iconfont.css';

//引入动画库
import 'animate.css';

import loading from './components/loading';
Vue.use(loading); //安装插件

import axios from 'axios'; //安装axios插件
// Vue.use(axios); //不是所有的插件都支持use安装
Vue.prototype.$http=axios;
axios.defaults.withCredentials=true; //全局配置携带跨源凭证

import local from './services/local';
Vue.use(local)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
