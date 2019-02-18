import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import home from './components/home';
import login from './components/login';
import reg from './components/reg';
import user from './components/user';
import usercode from './components/usercode';
import usermsg from './components/usermsg';
import meidiy from './components/meidiy';
import meiedit from './components/meiedit';

//组件懒加载
// import tiediy from './components/tiediy';
const tiediy = () => import('./components/tiediy')
// import meilist from './components/meilist';
const meilist = () => import('./components/meilist')
// import detail from './components/detail';
const detail = () => import('./components/detail')
// import error from './components/error';
const error = () => import('./components/error')



const routes=[
  // component 接受组件|函数
  {path:'/home',component:home},
  {path:'/login',component:login},
  {path:'/reg',component:reg},
  {path:'/user',component:user},
  {path:'/usermsg',component:usermsg},
  {path:'/usercode',component:usercode},
  {path:'/meidiy',component:meidiy},
  {path:'/tiediy',component:tiediy},
  {path:'/meiedit',component:meiedit},
  {path:'/meilist',component:meilist},
  {path:'/detail/:id',name:'detail',component:detail},

  {path:'/',redirect:'/home'},
  {path:'*',component:error},

  

];

export default new Router({
  routes,
  scrollBehavior(to,from,savedPosition){
    return {x:0,y:0}
  }
})
