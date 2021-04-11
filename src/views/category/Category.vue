<template>
  <div class="cate-gory">
    <nav-bar>
      <div slot="center" class="title">
        商品分类
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "Category",
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    NavBar
  },
  created () {

  }
}
</script>
<style scoped>
  .cate-gory {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
