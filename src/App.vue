<template>
  <div id="app">
    <!-- 包裹动态组件时，会缓存不活动的组件实例，维持当前状态，而不是销毁它们 -->
    <keep-alive>
      <!-- 显示home界面 -->
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
    <icon-picture></icon-picture>
    <svg-picture></svg-picture>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabbar/MainTabBar'
  import IconPicture from 'components/content/Icon/IconPicture.vue'
  import SvgPicture from 'components/content/Icon/svgPicture.vue'
  export default {
    name: 'App',
    components: {
      MainTabBar,
      IconPicture,
      SvgPicture
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>
