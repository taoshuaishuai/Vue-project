import axios from 'axios';

import * as types from './types';

let actions={
    [types.VIEW_NAV]:({commit,state},payload)=>commit(types.VIEW_NAV,payload),
    [types.VIEW_FOOT]:({commit,state},payload)=>commit(types.VIEW_FOOT,payload),
    [types.VIEW_LOADING]:({commit,state},payload)=>commit(types.VIEW_LOADING,payload),
    [types.NAME]:({commit,state},payload)=>commit(types.NAME,payload),
    [types.AUTH]:({commit,state},payload)=>commit(types.AUTH,payload),
    // [types.COLUMN1]:({commit,state},payload)=>commit(types.COLUMN1,payload.data),
    // [types.COLUMN2]:({commit,state},payload)=>commit(types.COLUMN2,payload.data),
    // [types.COLUMN3]:({commit,state},payload)=>commit(types.COLUMN3,payload.data),
    // [types.COLUMN4]:({commit,state},payload)=>commit(types.COLUMN4,payload.data),
    // [types.COLUMN5]:({commit,state},payload)=>commit(types.COLUMN5,payload.data),
    // [types.MEILIST]:({commit,state},payload)=>commit(types.MEILIST,payload.data),
    
    [types.DETAIL]:({commit,state},payload)=>{
        axios({
            url:'http://47.101.40.19:80/detail'
        }).then(
            (res) => {
                let detail = {};
                detail = res.data[payload-1];
                commit(types.DETAIL,detail);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.COLUMN1]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let list1 = [];
                list1 = res.data;
                commit(types.COLUMN1,list1);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.COLUMN2]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let list2 = [];
                list2 = res.data;
                commit(types.COLUMN2,list2);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.COLUMN3]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let list3 = [];
                list3 = res.data;
                commit(types.COLUMN3,list3);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.COLUMN4]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let list4 = [];
                list4 = res.data;
                commit(types.COLUMN4,list4);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.COLUMN5]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let list5 = [];
                list5 = res.data;
                commit(types.COLUMN5,list5);
                commit(types.VIEW_LOADING,false);
            }
        )
    },

    [types.MEILIST]:({commit,state},payload)=>{
        axios({
            url:payload
        }).then(
            (res) => {
                let meilist = [];
                meilist = res.data;
                commit(types.MEILIST,meilist);
                commit(types.VIEW_LOADING,false);
            }
        )
    },


};
export default actions;