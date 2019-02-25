<template>
  <a-submenu>
    <div slot="title">{{ parent.title }}</div>
    <template v-for="(item, i) in parent.child">
      <a-menu-item v-if="!item.child" :key="`menu_item_${index}_${i}`">{{ item.title }}</a-menu-item>
      <re-submenu v-else :key="`menu_item_${index}_${i}`" :parent="item"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
import menuComponents from '_c/menu'
const { AMenuItem, ASubmenu } = menuComponents
export default {
  name: "ReSubmenu",
  components: {
    AMenuItem,
    ASubmenu
  },
  props: {
    parent: {
      type: Object,
      default: () => ({})
    },
    index: Number
  }
}
</script>

<style>

</style>
