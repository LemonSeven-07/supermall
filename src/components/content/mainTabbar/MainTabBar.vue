<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-Bar-item activeColor="deepPink" path="/home">
        <img src="~assets/img/tabbar/home.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">首页</div>
      </tab-Bar-item>

      <tab-bar-item activeColor="deepPink" path="/category">
        <img src="~assets/img/tabbar/category.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>

      <tab-Bar-item activeColor="deepPink" path="/cart">
        <img src="~assets/img/tabbar/cart.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/cart_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">购物车</div>
      </tab-Bar-item>

      <tab-Bar-item activeColor="deepPink" path="/profile">
        <img src="~assets/img/tabbar/profile.svg" slot="item-icon" alt="">
        <img src="~assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="">
        <div slot="item-text">我的</div>
      </tab-Bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar'
import TabBarItem from 'components/common/tabbar/TabBarItem'

export default {
  name: "MainTabBar",
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    TabBar,
    TabBarItem
  },
  created () {

  }
}
</script>
<style scoped>

</style>
