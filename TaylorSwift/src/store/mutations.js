import {VIEW_NAV,VIEW_FOOT,VIEW_LOADING,COLUMN1,COLUMN2,COLUMN3,COLUMN4,COLUMN5,MEILIST,DETAIL,NAME,AUTH} from './types';

let mutations={
    [VIEW_NAV]:(state,payload)=> state.bNav=payload,
    [VIEW_FOOT]:(state,payload)=> state.bFoot=payload,
    [VIEW_LOADING]:(state,payload)=> state.bLoading=payload,
    [COLUMN1]:(state,payload)=> state.list1=payload,
    [COLUMN2]:(state,payload)=> state.list2=payload,
    [COLUMN3]:(state,payload)=> state.list3=payload,
    [COLUMN4]:(state,payload)=> state.list4=payload,
    [COLUMN5]:(state,payload)=> state.list5=payload,
    [MEILIST]:(state,payload)=> state.meilist=payload,
    [DETAIL]:(state,payload)=> state.detail=payload,
    [NAME]:(state,payload)=> state.user.name=payload,
    [AUTH]:(state,payload)=> state.user.auth=payload
};

export default mutations;