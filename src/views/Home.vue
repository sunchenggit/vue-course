<template>
  <div class="home">
    <button @click="handleClick('back')">返回上一页</button>
    <button @click="handleClick('push')">跳转到parent页</button>
    <button @click="handleClick('replace')">替换到parent页</button>
    <button @click="getInfo()">请求数据</button>
    <div><img :src="data.img" alt=""></div>
    <div><img :src="data.img_base64" alt=""></div>
    <div style="height: 100px;" :style="{background: data.color}"></div>
    <p>{{ food }}</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getUserInfo } from '@/api/user'

export default {
  name: 'home',
  data () {
    return {
      data: {}
    }
  },
  components: {
    HelloWorld
  },
  props: {
    food: {
      type: String,
      default: "Apple"
    }
  },
  // 组建内路由守卫
  beforeRouteEnter (to, from, next) {
    // 组件还没有渲染 this 获取不到, 如果需要获取则需要向下面这样
    next(vm => {
      // console.log(vm)
    })
  },
  beforeRouteLeave (to, from, next) {
    // 页面即将离开的时候调用整个方法
    // const leave = confirm('您确认要离开次页面吗？')
    // leave ? next() : next(false)
    next()
  },
  methods: {
    handleClick (type) {
      if ( type === 'back' ) {
        this.$router.go(-1)
      } else if (type === 'push') {
        // this.$router.push('/argu/suncheng')
        this.$router.push({
          name: 'argu',
          params: {
            name: 'suncheng'
          }
          // query: {
          //   name: 'lison'
          // }
        })
      } else if ( type === 'replace' ) {
        this.$router.replace('/parent')
      }
    },
    getInfo () {
      /*axios.post('http://localhost:3000/getUserInfo')
        .then(res => {
          console.log(res)
        })*/
        getUserInfo({userId: 21}).then(res => {
          console.log(res.data)
          this.data = res.data
        })
    }
  }
}
</script>
