<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
  data () {
    return {

    }
  },
  methods: {

  },
  components: {

  },
  created () {

  }
}
</script>
<style scoped>
  #tab-bar {
    display: -webkit-flex;
    display: flex;
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    box-shadow: 0 -2px 1px rgba(100, 100, 100, 0.1);
    background-color: #f2f2f2;
  }
</style>
