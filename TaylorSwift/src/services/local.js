// import axios from '../plugins/axios'
import store from '../store/index'

export default {
  install(Vue){
    Vue.prototype.$local=this;
  },
  get(url,params){
    return axios({url,params});
  },
  list({url,params,type}){
    if(type){
      return this.get(url,params).then(
        res=>store.dispatch({type:type,data:res.data})
      )
    }else{
      return this.get(url,params).then(res=>res.data)
    }
    
  },
  detail({dataName,id,type,params}){
    let url=`/data/article_${dataName}.data`;
    if(type){
      return this.get(url,params).then(
        res=>store.dispatch({type:type,data:res.data[id-1]})
      )
    }else{
      return this.get(url,params).then(res=>res.data[id-1])
    }
  }
};
