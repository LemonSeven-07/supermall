<template>
  <swiper ref="swiper" v-if="banners.length">
    <swiper-item v-for="(item, index) in banners" :key="index">
      <a href="#">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper/index'

  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        isLoad: true
      }
    },
    methods: {
      stopTimer() {
        this.$refs.swiper.stopTimer()
      },
      startTimer() {
        if (this.$refs.swiper) {
          this.$refs.swiper.startTimer()
        }
      },
      imageLoad() {
        if(this.isLoad){
          this.$emit('swiperImageLoad')
          this.isLoad = false
        }
      }
    }
  }
</script>

<style scoped>

</style>
