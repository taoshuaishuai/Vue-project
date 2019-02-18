<template>
    <div id="content">
      <div id="con-two">
          <div class="con-code">
            <p><img src="../assets/images/code.png"  /></p>
            <p>扫码上面的二维码，加为好友</p>
          </div>
      </div>
  </div>
</template>

<script>
import store from '../store';

export default {
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
#content{width:90%;height:auto;margin:0 auto;margin-top:20px;}
#content .con-code{width:100%;height:350px;border:1px solid #fff;background:#FFF; text-align:center; border-radius:5px; padding:60px 0 0 0;}
#content .con-code img{height:250px; margin-bottom:20px;}
</style>

