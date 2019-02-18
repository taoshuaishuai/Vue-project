<template>
  <div id="app">
    <navbar v-show="bNav"></navbar>
    <loading v-show="bLoading"></loading>
    <transition
      enter-active-class="animated fadeIn"
    >
      <router-view></router-view>
    </transition>
    <footbar v-show="bFoot"></footbar>
  </div>
</template>

<script>
import navbar from '@/components/navbar';
import footbar from '@/components/footbar';

import {mapGetters} from 'vuex';
import * as types from './store/types';


export default {
  name:'app',
  components:{
    navbar,footbar
  },
  computed:mapGetters([
    'bNav','bFoot','bLoading'
  ]),
  watch:{
    $route:{ //路由监听
      handler:function(to){
        let path = to.path;
        if(/meiedit|detail|login|reg|meilist/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,false);
        }
        if(/home|meidiy|tiediy|usercode|usermsg/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,true);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
        if(/user/.test(path)){
          this.$store.dispatch(types.VIEW_NAV,false);
          this.$store.dispatch(types.VIEW_FOOT,true);
        }
      },
      immediate:true
    }
  }

}
</script>
