<template>
    <div class="content">
  	  <div class="ul-list">
  	  	 <ul>
  	  	 	<li class="pic">
  	  	 		<a>头像
  	  	 		   <span class="fr"><img src="../assets/images/user_mini.png"></span>
  	  	   	  	</a>
  	  	 	</li>
  	  	 </ul>
  	  </div>
  	  <div class="ul-list">
  	  	   <ul>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">昵称
                   <span class="fr">{{name}}</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">性别
                   <span class="fr">男</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">电话
                    <span class="fr">15715578598</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   	  <li>
  	  	   	  	<a href="#" class="arrow-right">邮箱
                   <span class="fr">2528690066@qq.com</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   </ul>
  	  </div>
  	  <div class="ul-list">
  	  	   <ul>
  	  	   	  <li>
  	  	   	  	<a class="arrow-right">个性签名
  	  	   	  		<span class="fr">修改</span>
  	  	   	  	</a>
  	  	   	  </li>
  	  	   </ul>
  	   </div>
  </div>
</template>

<script>
import store from '../store';
import {mapGetters} from 'vuex';

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
    }
}
</script>

<style>

</style>

