<template>
    <div class="column column-4 imgtxt-list">
  	 	<div class="title">
  	 		<span class="titletext fl"><i class="iconfont">&#xe603;</i>贴贴精选</span>
  	 		<router-link to="/meilist" class="more fr">更多<i class="iconfont">&#xe65f;</i></router-link>
  	 	</div>
  	 	<div class="con-list">
  	 		<ul class="clearfix">
  	 			<li v-for="item of list4"
					:key="item.id"   
				>
  	 				<div class="li-box clearfix">
  	 					<router-link :to="{name:'detail',params:{id:item.id}}" class="img fl"><img :src="item.src" ></router-link>
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
  	 	</div>
  	 </div>
</template>

<script>
export default {
	props:["list4"]
}
</script>


<style>
    .column-4 .title{border-bottom: 1px solid #42bde5; }
    .column-4 .titletext{ color: #42bde5;}
    .column{ background: #fff; margin-bottom: 15px; }
    .column .title{ height: 30px; line-height: 30px; padding: 5px 10px 0;}
    .column .titletext i{ float: left; font-size: 20px; padding-right: 5px;}
    .column .title .more{ font-size: 0.75rem;}
    .imgtxt-list{padding-bottom: 15px; }
    .imgtxt-list .con-list li { border-bottom: 1px #f3f7f7 solid;}
    .imgtxt-list .li-box { padding: 10px 15px; }
    .imgtxt-list .li-box .img{ width: 24vw; height: 17vw;}
    .imgtxt-list .li-box img{ width: 24vw; height: 17vw;}
    .imgtxt-list .li-box .txt-box{ margin-left: 24vw; padding-left: 15px; }
    .imgtxt-list .li-box .txt-box .txt{ height: 8vw; line-height: 8vw;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .imgtxt-list .info{ line-height: 1.8rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .imgtxt-list .info span{display: block; float: left;color: #8f8f8f;font-size: 0.65rem; padding-right: 5px;}
    .imgtxt-list .info span.author{ float: right; padding-right: 0;}
    .imgtxt-list .info span i{ float: left;}
    .imgtxt-list .author img{ height: 1.8rem; width: 1.8rem; border-radius: 50%; float: left;margin:0px 5px 0 0;}
</style>

