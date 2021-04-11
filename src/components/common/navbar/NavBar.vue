<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data () {
    return {

    }
  },
  computed: {

  },
  components: {

  },
  methods: {

  }
}
</script>
<style scoped>
  .nav-bar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 2px 2px rgba(100, 100, 100, .1);
  }

  .left,.right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
