<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "Scroll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        scroll: null
      }
    },
    computed: {

    },
    components: {
      BScroll
    },
    methods: {
      ScrollToTop(x, y, time = 500) {
        this.scroll.scrollTo(x, y, time)
      },

      finishPullUp() {
        this.scroll.finishPullUp()
      },

      // 解决首页中可滚动区域的问题
      refresh() {
        this.scroll.refresh()
      },

      getScrollY() {
        return this.scroll ? this.scroll.y : 0
      }
    },
    mounted () {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        observeDOM: true,
        click: true,
        probeType: this.probeType,
        pullUpLoad: this.pullUpLoad
      })

      // 2.监听滚动的位置
      if(this.probeType === 2 || this.probeType === 3){
        this.scroll.on('scroll', (position) => {
          this.$emit('scroll',position)
        })
      }

      // 3.监听上拉事件
      if(this.pullUpLoad){
        this.scroll.on('pullingUp', () => {
          this.$emit('pullingUp')
        })
      }
    }
  }
</script>
<style scoped>

</style>
