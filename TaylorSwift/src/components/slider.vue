<template>
  <swipe class="my-swipe" :speed="1500" :auto="2500">
    <swipe-item class="slide1"><a href="#"><img src="../assets/images/banner01.jpg" alt=""></a></swipe-item>
    <swipe-item class="slide2"><a href="#"><img src="../assets/images/banner02.jpg" alt=""></a></swipe-item>
    <swipe-item class="slide3"><a href="#"><img src="../assets/images/banner03.jpg" alt=""></a></swipe-item>
    <swipe-item class="slide4"><a href="#"><img src="../assets/images/banner04.jpg" alt=""></a></swipe-item>
  </swipe>
</template>

<script>

import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';


export default {

  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }
  
}
</script>

<style>
.my-swipe {
  height: 220px;
}
.slide1 a img{
  height: 220px;
  width: 100%;
}
.slide2 a img{
  height: 220px;
  width: 100%;
}
.slide3 a img{
  height: 220px;
  width: 100%;
}
.slide4 a img{
  height: 220px;
  width: 100%;
}

</style>
