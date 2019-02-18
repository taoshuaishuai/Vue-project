<template>
    <div class="content mei_list">
  	<div class="top-nav">
  		<ul class="clearfix">
  			<li><span><i class="iconfont">&#xe61d;</i>全部分类</span></li>
  			<li><span><i class="iconfont">&#xe601;</i>点赞排序</span></li>
  			<li><span><i class="iconfont">&#xe616;</i>我DIY的</span></li>
  		</ul>
  	</div>
  	<div class="card-list">
  		<div class="con-list">
  	 		<ul class="clearfix">
  	 			<li class="first">
  	 				<div class="photo-card" style=" background:#f0f0f0;">
  	 					<router-link to="/meiedit" class="upload_btn">
  	 						<i class="iconfont">&#xe602;</i>
  	 						<p>上传图片/文字</p>
  	 					</router-link>
  	 				</div>
  	 			</li>
  	 			<li v-for="item of meilist"
					:key="item.id"   
				>
  	 				<div class="photo-card">
  	 					<router-link :to="{name:'detail',params:{id:item.id}}" class="img" :style="{backgroundImage:'url('+item.src+')'}"></router-link>
  	 					<p class="txt"><router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link></p>
  	 					<div class="info clearfix">
  	 						<span class="author"><img :src="item.auth_face">{{item.auth}}</span>
  	 						<span class="zan"><i class="iconfont">&#xe600;</i>{{item.like}}</span>
  	 						<span class="collect"><i class="iconfont">&#xe605;</i>{{item.collect}}</span>
  	 					</div>
  	 				</div>
  	 			</li>
  	 		</ul>
  	 	</div>
  	</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
	computed:mapGetters([
		'meilist'
	]),
	mounted(){
        this.$store.dispatch(types.VIEW_LOADING,true);

				this.$store.dispatch(types.MEILIST,'http://47.101.40.19:80/meilist');
				
				// this.$local.list({
        //     url:'/data/meilist.json',
        //     type:types.MEILIST
				// });
				
				// this.$http({
        //     url:'http://47.101.40.19:80/meilist',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.meilist=res.data;
        // }).catch((res)=>{
        //     console.log(res)
        // })
		
	}
}
</script>


<style>
	.top-nav{ height: 45px; line-height: 45px; background: #fff;margin-bottom: 15px; }
    .top-nav li{ width: 33.3%; float: left; }
    .top-nav li span{ display: block; text-align: center; font-size: 0.9rem; border-left: 1px solid #f3f7f7;}
    .top-nav li:first-child{ border-left: none;}
    .top-nav li span i{ padding-right: 5px;}
    .mei_list .card-list .con-list .photo-card{ background: #fff;}
    .mei_list .card-list .con-list ul{ padding-right: 6px;}
    .mei_list .card-list .con-list li { margin-bottom: 10px;}
    .mei_list .card-list .con-list li .photo-card{ margin-left: 6px;border:5px solid #fff;}
    .mei_list .card-list .con-list li.first .upload_btn{display:block; text-align: center; padding: 68px 0 30px 0; background: #f0f0f0;}
    .mei_list .card-list .upload_btn i{ color: #cecece; font-size: 3rem;}
    .mei_list .card-list .upload_btn p{ color: #cecece; margin-top: 10px;}
</style>

