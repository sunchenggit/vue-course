<template>
  <div class="menu-box">
      <!-- <a-menu>
        <a-menu-item>111</a-menu-item>
        <a-menu-item>222</a-menu-item>
        <a-submenu>
          <div slot="title">333</div>
          <a-menu-item>333-11</a-menu-item>
          <a-submenu>
            <div slot="title">333-33</div>
            <a-menu-item>333-33-11</a-menu-item>
            <a-menu-item>333-33-22</a-menu-item>
          </a-submenu>
        </a-submenu>
      </a-menu> -->


      <a-menu>
        <template v-for="(item, index) in list">
          <a-menu-item v-if="!item.child" :key="`menu_item_${index}`">{{ item.title }}</a-menu-item>
          <re-submenu v-else :key="`menu_item_${index}`" :parent="item" :index="index"></re-submenu>
        </template>
      </a-menu>
  </div>
</template>

<script>
import menuComponents from '_c/menu'
import ReSubmenu from '@/views/re-submenu.vue'
const { AMenu, AMenuItem, ASubmenu } = menuComponents
export default {
  name: 'menu_page',
  components: {
    // ...menuComponents
    AMenu,
    AMenuItem,
    ASubmenu,
    ReSubmenu
  },
  data () {
    return {
      list: [
        {
          title: '1111'
        },
        {
          title: '2222'
        },
        {
          title: '3333',
          child: [
            {
              title: '3333-1'
            },
            {
              title: '3333-2',
              child: [
                {
                  title: '3333-2-1',
                },
                {
                  title: '3333-2-2',
                  child: [
                    {
                      title: '3333-2-2-1'
                    },
                    {
                      title: '3333-2-2-2'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.menu-box {
  width: 300px;
  height: 400px;
}
</style>
