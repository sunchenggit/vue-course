<template>
  <ul class="a-submenu">
    <div class="a-submenu-title" @click="handleClick">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{transform: `rotateZ(${showChild ? 0 : 180}deg)`}">^</span>
    </div>
    <div v-if="showChild" class="a-submenu-child-box"><slot></slot></div>
  </ul>
</template>

<script>
export default {
  name: 'ASubmenu',
  data () {
    return {
      showChild: false
    }
  },
  methods: {
    handleClick () {
      this.showChild = !this.showChild
    }
  }
}
</script>

<style lang="scss">
.a-submenu {
  background: rgb(33, 35, 39);
  li {
    background: rgb(33, 35, 39);
  }
  &-title {
    color: #fff;
    position: relative;
    .shrink-icon {
      position: absolute;
      top: 0;
      right: 10px;
    }
  }
  &-child-box {
    overflow: hidden;
    padding-left: 20px;
  }
}

</style>
