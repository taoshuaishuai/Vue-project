<template>
    <div>
        <div class="content mei_edit">
  	<div class="detail_box">
  		<div class="con">
  			<div class="row-r1">
			<input class="input_title" placeholder="请输入标题（必填）">
		</div>
        <div class="row-r1" style="height:300px; border-bottom:0;">
        <p><img src="/images/meiedit.jpg"></p>
            <input class="input_title" placeholder="内容" >
		</div>
  			
  		</div>
  	</div> 
  	<div class=" clearfix"></div>
  </div>
 
  <footer id="footer" class="foot">
        <a href="#" class="green-btn ft-btn">发布</a>
  </footer>
    </div>
</template>

<style scoped>
    .row-r1 p img{width: 100%;}
    .mei_edit .detail_box{ background: none; padding: 20px 0;}
    .mei_edit .detail_box .title{ margin-bottom: 20px;}
    .green-btn{ display: block; background: #40c8b9; text-align: center; color: #fff; cursor:pointer;}
    .green-btn:hover{ background: #5dd5c8;  color: #fff; transform:height ease 0.5s;}
    .ft-btn{ height: 60px; line-height: 60px;}
    .foot{ position: fixed;right: 0;left: 0;bottom: 0;z-index: 10;width: 100%;height: 60px; background-color: #94a68c;}
    .foot ul{ width: 100%; background-color: #94a68c;display: box;display: -webkit-box;box-sizing: border-box; height: 55px; }
    .foot li { width: 100%; box-sizing: border-box; height: 60px;  position: relative; text-align: center; -webkit-box-flex: 1; } 
    .foot li a{padding: 5px 0; display: block;}
    .foot li .img{display:block; margin: 0 auto; height: 30px; width: 30px;}
    .foot li .img img{ width: 100%; height: auto;}
    .foot li p{ text-align: center; color: #fff; font-size: 0.625rem;}    
    .foot li.active p{ color: #406131;}
    @-moz-document url-prefix() { .foot li { width: 25%; float: left;} }  
</style>

