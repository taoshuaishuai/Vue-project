<template>
    <div class="content">
  	 <div class="login-box">
  	 	 <div class="form-box">
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe608;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" placeholder="输入手机号/邮箱/昵称" v-model="username">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="row row-input clearfix">
  	 	 		<div class="row-l fl"><i class="iconfont">&#xe692;</i></div>
  	 	 		<div class="row-r">
  	 	 			<input class="input_box" placeholder="输入密码" v-model="password">
  	 	 		</div>
  	 	 	</div>
  	 	 	<div class="h20"></div>
  	 	 	<div class="row row-btn">
  	 	 		<a href="javascript:;" class="green-btn" @click="checklogin">登录</a>
  	 	 	</div>
  	 	 	<div class="row row-btn">
  	 	 		<router-link to="/reg" class="boder-btn">加入会员</router-link>
  	 	 	</div>
  	 	 	<div class="row row-txt">
  	 	 		<a href="javascript:;" class="forget">忘记密码</a>
  	 	 	</div>
  	 	 </div>
  	 	 <div class="h20"></div>
  	 	 <div class="otherway">
  	 	 	 <div class="title"><span>其他登录方式</span></div>
  	 	 	 <ul class="clearfix">
  	 	 	 	<li>
  	 	 	 		<a href="#" class="weibo"><i class="iconfont">&#xe60a;</i></a>
  	 	 	 	</li>
  	 	 	 	<li>
  	 	 	 		<a href="#" class="qq"><i class="iconfont">&#xe607;</i></a>
  	 	 	 	</li>
  	 	 	 	<li>
  	 	 	 		<a href="#" class="weixin"><i class="iconfont">&#xe606;</i></a>
  	 	 	 	</li>
  	 	 	 </ul>
  	 	 </div>
  	 </div>
  </div>
</template>

<script>
import * as types from '../store/types';
// import axios from 'axios';

export default {
	data(){
		return{
			username:'',
			password:''
		}
	},
	methods:{
		checklogin(){
			// axios({
			// 	url:'http://www.liyangyf.com/ctrl/login.php',
			// 	params:{
			// 		user:this.username,
			// 		pass:this.password
			// 	}
			// }).then(
			// 	(res)=>{
			// 		switch(res.data){
			// 			case 0:
			// 				alert('用户名与密码不符！');
			// 				break;
			// 			case 1:
			// 				alert('用户名密码为空，并且客户端没有cookie!');
			// 				break;
			// 			default:
			// 				this.$store.dispatch(types.AUTH,true);
			// 				this.$store.dispatch(types.NAME,res.data.user);
			// 				this.$router.push({path:'/user'});
			// 				break;
			// 		}
			// 	}
			// )

        	this.$store.dispatch(types.VIEW_LOADING,true);

			this.$http({
				url:'http://47.101.40.19:80/login',
				params:{
					username:this.username,
					password:this.password
				},

			}).then((res)=>{
				this.$store.dispatch(types.VIEW_LOADING,false);
			
				if(res.data.error==0){
					console.log('成功跳转')
					alert('登陆成功!点击跳转到用户界面~');
					this.$store.dispatch(types.AUTH,true);
					this.$store.dispatch(types.NAME,res.data.data.username);
					this.$router.push({path:'/user'});
					
				}else if(res.data.error==1){
					alert('密码错误！')
				}else if(res.data.error==2){
					alert("用户名不存在！")
				}
			})
		}
	}
}
</script>


<style>
    .h20{ height: 20px;}
    .login-box{ padding: 0 15px; }
    .login-box .form-box{ margin: 3rem 0 0;}
    .form-box .row-input{ height: 40px; width: 100%; line-height: 40px; border-radius: 5px; margin-bottom: 15px; background: #fff;}
    .form-box .row-l{ width: 40px; text-align: center;}
    .form-box .row-l .iconfont{ font-size: 1.2rem; color: #cecece;}
    .form-box .row-r{ margin-left: 40px;}
    .form-box .input_box{ width: 100%; height: 40px; border: none; outline: none;}
    .form-box .row-btn{height: 40px; width: 100%; line-height: 40px; border-radius: 5px; margin-bottom: 10px;text-align: center; }
    .form-box .row-btn a{ display: block;border-radius: 5px; }
    .form-box .row-btn a.green-btn{ border: 1px solid #40C8B9; background:#40C8B9;  color: #fff;}
    .form-box .row-btn a.boder-btn{ border: 1px solid #40C8B9; color: #40C8B9;}
    .form-box .row-txt{ height: 1.6rem; line-height: 1.6rem; }
    .form-box .row-txt a{ text-decoration:underline;}
    .form-box .row-txt .forget{float:right; color: #40C8B9; font-size: 0.8rem;}

    .otherway .title{ height: 0.8rem; text-align: center; border-bottom: 1px solid #cecece; margin-bottom: 2rem;}
    .otherway .title span{padding: 0 10px; background: #F3F7F7; font-size: 0.9rem; color: #cecece;}
    .otherway li{ width: 33.3%; float: left;}
    .otherway li a{ display: block; width: 3.2rem; height: 3.2rem; text-align: center; line-height: 3.2rem; border-radius: 50%; background: #fff; margin: 0 auto;}
    .otherway li a i{ font-size: 2rem;}
    .otherway li a.weibo i{ color: #e84c3d;}
    .otherway li a.qq i{ color: #3598db;}
    .otherway li a.weixin i{ color: #2dcc70;}
</style>

