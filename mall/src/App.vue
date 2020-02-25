<template>
  <div id="app">
     <router-view></router-view>
    <tab-bar>
            <tab-bar-item path='/home'>       
                  <img slot="item-icon" src="./assets/img/tabar/home1.png" alt="">
                  <img slot="item-active-icon" src="./assets/img/tabar/home1_active.png" alt="">
                  <div slot="item-text">首页</div>
            </tab-bar-item>
            <tab-bar-item  path='/category'>       
                  <img slot="item-icon" src="./assets/img/tabar/home.png" alt="">
                  <img slot="item-active-icon" src="./assets/img/tabar/home_active.png" alt="">
                  <div slot="item-text">分类</div>
            </tab-bar-item>
            <tab-bar-item path='/car'>       
                  <img slot="item-icon" src="./assets/img/tabar/car.png" alt="">
                  <img slot="item-active-icon" src="./assets/img/tabar/car_active.png" alt="">
                  <div slot="item-text">购物车</div>  
            </tab-bar-item>
            <tab-bar-item path='/main'>       
                  <img slot="item-icon" src="./assets/img/tabar/main.png" alt="">
                  <img slot="item-active-icon" src="./assets/img/tabar/main_active.png" alt="">
                  <div slot="item-text">我的</div>
            </tab-bar-item>  
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './components/common/TabBar/tab-bar'
import TabBarItem from './components/common/TabBar/tab-bat-item'


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import '/ssets/css/base.css';

</style>
