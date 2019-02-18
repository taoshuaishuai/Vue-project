<template>
    <div class="content">
  	<div class="top-nav">
  		<ul class="clearfix">
  			<li><span><i class="iconfont">&#xe61d;</i>全部分类</span></li>
  			<li><span><i class="iconfont">&#xe601;</i>点赞排序</span></li>
  			<li><span><i class="iconfont">&#xe616;</i>我DIY的</span></li>
  		</ul>
  	</div>
  	<div class="column imgtxt-list">
  	 	<div class="con-list">
  	 		<ul class="clearfix">
  	 			<li v-for="item of list5"
					:key="item.id"   
				>
  	 				<div class="li-box clearfix">
  	 					<router-link :to="{name:'detail',params:{id:item.id}}" class="img fl" ><img :src="item.src"></router-link>
  	 					<div class="txt-box">
	  	 					<p class="txt"><router-link :to="{name:'detail',params:{id:item.id}}">{{item.title}}</router-link></p>
	  	 					<div class="info clearfix">
	  	 						<span class="zan"><i class="iconfont">&#xe600;</i>{{item.like}}人点赞</span>
	  	 						<span class="collect"><i class="iconfont">&#xe605;</i>{{item.collect}}人收藏</span>
	  	 						<span class="author"><img :src="item.auth_face">{{item.auth}}</span>
	  	 					</div>
	  	 				</div>
  	 				</div>
  	 			</li>
  	 		</ul>
  	 	    <div class="Edit">
  	 	    	<router-link to="/meiedit" class="edit-btn"><i class="iconfont">&#xe62e;</i>我要贴</router-link>
  	 	    </div>
  	 	</div>
  	</div>  
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import * as types from '../store/types';

export default {
	computed:mapGetters([
		'list5'
	]),
	mounted(){
        this.$store.dispatch(types.VIEW_LOADING,true);

		this.$store.dispatch(types.COLUMN5,'http://47.101.40.19:80/column4');
		
		// this.$local.list({
        //     url:'/data/column4.json',
        //     type:types.COLUMN5
		// });

		// this.$http({
        //     url:'http://47.101.40.19:80/column4',
        //     method:'get'
        // }).then((res)=>{
        //     this.$store.state.list5=res.data;
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
    .Edit{ padding: 15px 0 0;}
    .edit-btn{ display: block; height: 40px; width: 40%; line-height: 40px; text-align: center; margin: 0 auto; border-radius: 20px; background: #58e5d6; color: #fff; font-size: 0.9rem;}
    .edit-btn i{ padding-right: 8px; font-size: 20px;}
</style>

