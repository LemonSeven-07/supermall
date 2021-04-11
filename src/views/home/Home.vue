<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>

    <tab-control :titles ="['流行', '新款', '精选']"
    @tabClick="tabClick" ref="tabControl1"
    v-show="isTabFixed" class="tab-control"/>

    <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view/>
      <tab-control :titles ="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="showGoods"/>
    </scroll>

    <!-- 监听一个组件的原生事件时，必须给对应的事件加上.native修饰符，才能进行监听 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>


  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backTop/BackTop'

import {getHomeMultidata, getHomeGoods} from 'network/home'
import {debounce} from "common/utils"

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'


export default {
  name: "Home",
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []}
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    },
  },

  // 如何页面没有用keep-alive标签包裹，离开当前页面会调用销毁函数。再通过路由进入该界面会重新渲染
  // destroyed() {
  //   console.log('销毁函数');
  // },

  // 由于使用better-scroll框架会导致keep-alive功能失效，解决办法调用下面的函数保存离开时的滚动位置
  // 进入界面时调用
  activated() {

    this.$refs.scroll.ScrollToTop(0, this.saveY, 200)
    // 刷新一次，避免出现问题
    this.$refs.scroll.refresh()
  },
  // 离开界面时调用
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY()
  },
  methods: {
    /**
    * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1:
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
        default:
          break;
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },

    backClick() {
      this.$refs.scroll.ScrollToTop(0,0)
    },

    contentScroll(position) {
      // 1.判断BackTop隐藏与显示
      this.isShowBackTop = (-position.y) > 100
      // 2.决定tabContorl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },

    loadMore() {
      this.getHomeGoods(this.currentType)
    },

    swiperImageLoad() {
      // 获取tabControl的offsetTop
      // 所有的组件都有一个属性$el：用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /**
    * 网络请求相关方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.banner.list
        this.recommends = res.recommend.list
      }).catch(err => {
        console.log(err);
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page
      getHomeGoods(type, page+1).then(res => {
        this.goods[type].list.push(...res.list)
        this.goods[type].page = page + 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    },
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created () {
    // 1.请求多个数据
    this.getHomeMultidata()

    // 2.请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.$bus.$on('itemImageLoad', () => {
      refresh()
    })

  }
}
</script>
<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;

    /* 在使用浏览器原生滚动时，为了让导航栏不跟随一起滚动 */
    /* position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10; */
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
  /* 在Better-Scroll框架中粘性定位不起作用 */
  /* .tab-control {
    position: sticky;
    top: 44px;
    z-index: 10;
  } */
  .content {
    position: absolute;
    overflow: hidden;
    top: 44px;
    bottom: 49px;
    right: 0;
    left: 0;
  }

  /* 也可以使用下面这种法案 */
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
