<template>
    <div class="content">
        <slider></slider>
        <column1 :list1="list1"></column1>
        <column2 :list2="list2"></column2>
        <column3 :list3="list3"></column3>
        <column4 :list4="list4"></column4>
    </div>
</template>

<script>
import slider from '@/components/slider';
import column1 from '@/components/column1';
import column2 from '@/components/column2';
import column3 from '@/components/column3';
import column4 from '@/components/column4';

import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
    components:{
        slider,column1,column2,column3,column4
    },
    computed:mapGetters([
        'list1','list2','list3','list4'
    ]),
    mounted(){
        this.$store.dispatch(types.VIEW_LOADING,true);

        this.$store.dispatch(types.COLUMN1,'http://47.101.40.19:80/column1');
        this.$store.dispatch(types.COLUMN2,'http://47.101.40.19:80/column2');
        this.$store.dispatch(types.COLUMN3,'http://47.101.40.19:80/column3');
        this.$store.dispatch(types.COLUMN4,'http://47.101.40.19:80/column4');

        // 服务
        //     this.$local.list({
        //         url:'/data/column1.json',
        //         type:types.COLUMN1
        //     });
        //     this.$local.list({
        //         url:'/data/column2.json',
        //         type:types.COLUMN2
        //     });
        //     this.$local.list({
        //         url:'/data/column3.json',
        //         type:types.COLUMN3
        //     });
        //     this.$local.list({
        //         url:'/data/column4.json',
        //         type:types.COLUMN4
        //     });

        // this.$http({
        //     url:'http://47.101.40.19:80/column1',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.list1=res.data;
        // }).catch((res)=>{
        //     console.log(res)
        // })

        // this.$http({
        //     url:'http://47.101.40.19:80/column2',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.list2=res.data;
        // }).catch((res)=>{
        //     console.log(res)
        // })

        // this.$http({
        //     url:'http://47.101.40.19:80/column3',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.list3=res.data;
        // }).catch((res)=>{
        //     console.log(res)
        // })

        // this.$http({
        //     url:'http://47.101.40.19:80/column4',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.list4=res.data;
        // }).catch((res)=>{
        //     console.log(res)
        // })
            

        }

    
}
</script>

