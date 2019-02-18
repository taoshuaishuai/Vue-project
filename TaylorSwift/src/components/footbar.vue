<template>
    <div id="footer" class="foot">
        <ul>
            <router-link to="/home" tag="li" active-class="active">
                <a href="index.html">
                    <span class="img"><img src="../assets/images/nav1.png"></span>
                    <p>首页</p>
                </a>
            </router-link>
            <router-link to="/tiediy" tag="li" active-class="active">
                <a href="javascript:;">
                <span class="img"><img src="../assets/images/nav2.png"></span>
                <p>贴DIY</p>
                </a>
            </router-link>
            <router-link to="/meidiy" tag="li" active-class="active">
                <a href="javascript:;">
                    <span class="img"><img src="../assets/images/nav3.png"></span>
                    <p>美DIY</p>
                </a>
            </router-link>
            <router-link to="/user" tag="li" active-class="active">
                <a href="javascript:;">
                    <span class="img"><img src="../assets/images/nav4.png"></span>
                    <p>我的</p>
                </a>
            </router-link>
        </ul>
    </div>
</template>

<style scoped>
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

