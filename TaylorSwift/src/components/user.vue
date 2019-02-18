<template>
    <div class="content u-index">
  	  <div class="userbox">
  	  	  <div class="userbox-1">
  	  	  	<div class="userimg"><img src="../assets/images/user.png"></div>
  	 		<div class="username">{{name}}</div>
  	  	  </div>
  	  	  <div class="userbox-2">
  	  	  	  <ul class="clearfix">
  	  	  	  	<li><a href="javascript:;" class="c000"><span>¥5201314</span><br>钱包余额</a></li>
  	  	  	  	<li><span>¥0.00</span><br>已提现余额</li>
  	  	  	  </ul>
  	  	  </div>
  	  </div>
  	  <div class="ul-list">
  	  	   <ul>
  	  	   	  <li class="tel">
  	  	   	  	  <i class="iconfont">&#xe68e;</i>15715578598
  	  	   	  	  <span class="fr">显示在微名片<input type="checkbox" class="switch" checked></span>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<router-link to="/usermsg" class="arrow-right">
  	  	   	  	  <i class="iconfont">&#xe660;</i>个人信息
  	  	   	  	</router-link>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="javascript:;" class="arrow-right">
  	  	   	  	  <i class="iconfont">&#xe625;</i>我的团队
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="javascript:;" class="arrow-right">
  	  	   	  	  <i class="iconfont">&#xe73a;</i>我的收藏
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<router-link to="/usercode" class="arrow-right">
  	  	   	  	  <i class="iconfont">&#xe604;</i>一键生成二维码
  	  	   	  	</router-link>
  	  	   	  </li>
  	  	   </ul>
           
           
  	  </div>
      
             <div class="ul-list">
  	  	   <ul>
  	  	   	  <li>
  	  	   	  	<a @click="logout" style="text-align:center; color:#999;">退 出
  	  	   	  	</a>
  	  	   	  </li>
  	  	   </ul>
  	   </div>
  </div>
</template>

<script>
import store from '../store';
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
    computed:mapGetters([
        'name'
    ]),
    beforeRouteEnter(to,from,next){
        if(store.state.user.auth){
            next()
        }else{
            next('/login')
        }
    },
    methods:{
        logout(){
            store.dispatch(types.NAME,'');
            store.dispatch(types.AUTH,false);
            this.$router.push({path:'/login'});
        }
    }
}
</script>


<style>
    .arrow-right{ position: relative;}
    .arrow-right:after {
        right: 15px;
        content: '';
    }
    .arrow-right:after {
        font-size: inherit;
        line-height: 1;
        height: 12px;
        width: 12px;
        border-right: 1px solid #ccc;
        border-top:1px solid #ccc;
        text-decoration: none;
        position: absolute;
        top: 50%;
        margin-top: -7px;
        display: inline-block;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        -webkit-font-smoothing: antialiased;
    }
    .switch:checked {
        border-color: #9fddb8;
        box-shadow: #9fddb8 0 0 0 26px inset;
        background-color: #9fddb8;
        transition: border ease 0.2s,
    box-shadow ease 0.2s,
    background-color ease 0.6s;
    }
    .switch {
        width: 46px;
        height: 20px;
        float: right;
        margin: 12px 0 0 4px;
        position: relative;
        border: 1px solid #dddddd;
        background-color: #ffffff;
        box-shadow: #dfdfdf 0 0 0 0 inset;
        border-radius: 13px;
        background-clip: content-box;
        display: inline-block;
        -webkit-appearance: none;
        user-select: none;
        outline: none;
        transition: border cubic-bezier(0, 0, 0, 1) 0.2s,
    box-shadow cubic-bezier(0, 0, 0, 1) 0.2s;
    }
    .switch:checked:before {
        left: 24px;
        transition: left 0.2s;
    }
    .switch:before {
        width: 18px;
        height: 18px;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: 50%;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
        content: '';
        transition: left 0.2s;
    }

    .u-index .userbox{
        background: -webkit-linear-gradient(#cfe4cd, #a3dcb6); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(#cfe4cd, #a3dcb6); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(#cfe4cd, #a3dcb6); /* Firefox 3.6 - 15 */
        background: linear-gradient(#cfe4cd, #a3dcb6); /* 标准的语法（必须放在最后） */ }
    .u-index .userbox .userbox-1{ padding: 5vw;}    
    .u-index .userbox .userimg{ margin: 0 auto; height: 20vw; width: 20vw; border-radius: 50%; border: 3px solid rgba(255,255,255,.3); overflow: hidden;}
    .u-index .userbox .userimg img{ width: 100%; height: auto;}
    .u-index .userbox .username{ line-height: 1.5rem; font-size: .9rem; text-align: center;}
    .u-index .userbox .userbox-2{ border-top: 1px solid rgba(255,255,255,.3); padding: 3vw;}
    .u-index .userbox .userbox-2 li{ width: 50%; float: left; text-align: center; color: #fff; font-size: 0.9rem;}
    .u-index .userbox .userbox-2 li span{ font-size: 1.2rem;}

    .ul-list{ background: #fff; margin: 5vw 0;}
    .ul-list li{ border-bottom: 1px solid #f3f7f7; height: 45px; line-height: 45px;  clear:both;}
    .ul-list li.tel{ padding: 0 15px;}
    .ul-list li.tel span{ font-size: 0.9rem; color: #ccc;}
    .ul-list li a{ display: block; padding: 0 15px;}
    .ul-list li .iconfont{ font-size: 20px; padding-right: 5px;}
    .ul-list li:nth-child(1) .iconfont{ color: #34c5bc;}
    .ul-list li:nth-child(2) .iconfont{ color: #f54e91;}
    .ul-list li:nth-child(3) .iconfont{ color: #fcae14;}
    .ul-list li:nth-child(4) .iconfont{ color: #ff8040;}
    .ul-list li:nth-child(5) .iconfont{ color: #3cc24c;}

    .ul-list li.pic{height: 60px; line-height: 60px; }
    .ul-list li.pic img{ height: 46px; width: 46px; border-radius: 50%; margin-top: 7px;}
    .ul-list li span.fr{ font-size: 0.9rem; color: #ccc; padding-right: 15px;}



    .row-qiandao{width:100%; height:auto; float:left; }
    .row-qiandao p{ padding:8px 10px;font-size:44px;}
    .row-qiandao p span{ font-size:38px; color:#c0c0c0; margin:10px 0; }
    .row-qiandao input{height:40px;  width:100%; border-radius:5px; border: 1px solid #ddd;}
    .text_con{border: 1px solid #ddd; border-radius:5px; width:100%; height:150px;  }



    .tie_edit{ width:100%; height:100%; height:auto; float:left; }
    .row-r1{ border-bottom:1px solid #f3f7f7; margin:10px 3% 0 3%; background:#fff; border-radius:5px; float:left; width:94%; }
    .input_title{ width:100%; line-height:30px; display:inline-block; float:left; border-radius:5px; padding:5px 0; overflow:hidden; border:1px solid #d9d9d9; outline: none;}
    .input_title2{ width:68%; height:80px; margin-top:15px; line-height:20px; display:inline-block; border-radius:5px; padding:5px 10px; border:1px solid #d9d9d9; outline: none;}
    .upload_btn1{ border:1px dashed #CCCCCC; width:90px; height:70px; display:block; border-radius:10px; text-align:center; padding:20px 0 0 0; margin:15px 15px 15px 15px; float:left;}
    .upload_btn_img{ width:90px; height:90px; overflow:hidden; display:block; border-radius:10px; text-align:center;  margin:15px 12px 15px 15px; float:left;}
    .upload_btn_img img{ width:100%;}
    .upload_btn1 i.iconfont{ font-size:40px; color:#ccc;}


    .team li{ padding:0 10px;}
    .team li .fl{ margin-right:10px;}
</style>

