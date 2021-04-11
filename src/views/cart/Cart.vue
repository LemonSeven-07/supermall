<template>
  <div class="cart">
    <nav-bar>
      <div slot="center">
        {{'购物车'+'('+count+')'}}
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
  name: "Cart",
  data () {
    return {
      count: 0
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
  .cart {
    background-color: var(--color-tint);
    color: #fff;
    font-weight: 700;
  }
</style>
