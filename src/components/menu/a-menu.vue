<template>
  <div class="a-menu"><slot></slot></div>
</template>

<script>
export default {
  name: 'AMenu'
}
</script>

<style lang="scss">
.a-menu {
  text-align: left;
  li {
    list-style: none;
  }
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style: none;
    }
  }
}
</style>
