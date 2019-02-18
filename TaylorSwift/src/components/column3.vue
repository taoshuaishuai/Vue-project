<template>
    <div class="column column-3 card-list">
  	 	<div class="title">
  	 		<span class="titletext fl"><i class="iconfont">&#xe653;</i>美视推荐</span>
  	 		<router-link to="/meilist" class="more fr">更多<i class="iconfont">&#xe65f;</i></router-link>
  	 	</div>
  	 	<div class="con-list">
  	 		<ul class="clearfix">
  	 			<li v-for="item of list3"
					:key="item.id"   
				>
  	 				<div class="photo-card">
  	 					<router-link :to="{name:'detail',params:{id:item.id}}" class="img" ><img :src="item.src" ></router-link>
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
</template>

<script>
export default {
	props:["list3"]
}
</script>


<style>
    .column-3 .title{border-bottom: 1px solid #6cdc55; }
    .column-3 .titletext{ color: #6cdc55;}
    .column{ background: #fff; margin-bottom: 15px; }
    .column .title{ height: 30px; line-height: 30px; padding: 5px 10px 0;}
    .column .titletext i{ float: left; font-size: 20px; padding-right: 5px;}
    .column .title .more{ font-size: 0.75rem;}
    .column.card-list .con-list{ padding-top: 12px;}
    .card-list .con-list ul{ padding-right: 10px;}
    .card-list .con-list li{ width: 50%; float: left; margin-bottom: 15px;}
    .card-list .con-list li .photo-card{ margin-left: 10px;  background: #f3f7f7; height:64vw; border:5px solid #f3f7f7; }
    .card-list .photo-card .img{ width: 100%; height: 50vw;}
    .card-list .photo-card img{ width: 100%; height: 50vw;}
    .card-list .txt{font-size: 0.8rem; padding-top:5px; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
    .card-list .info{line-height: 1.5rem; padding:5px 0;}
    .card-list .info span{ display: block; float: left; font-size: 0.6rem;padding-right: 5px;}
    .card-list .info span i{ float: left;}
    .card-list .author img{ height: 1.5rem; width: 1.5rem; border-radius: 50%; float: left; margin:0 2px 0 0;}
</style>

