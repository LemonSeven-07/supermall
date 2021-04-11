<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item.id" :goodsItem="item"/>
  </div>
</template>

<script>
  import GoodsListItem from './GoodsListItem'
  export default {
    name: "GoodsList",
    props: {
      goods: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data () {
      return {

      }
    },
    computed: {

    },
    components: {
      GoodsListItem
    },
    methods: {

    },
    created () {

    }
  }
</script>
<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
  }

</style>
