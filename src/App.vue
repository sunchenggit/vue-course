<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{ name: 'home' }">Home</router-link> |
      <router-link :to="{ name: 'about' }">About</router-link>
    </div>
    <transition-group :name="routerName">
      <router-view key="default" />
      <router-view key="email" name="email" />
      <router-view key="tel" name="tel" />
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      routerName: ''
    }
  },
  watch: {
    '$route' (to) {
      to.query && to.query.routerName && (this.routerName = to.query.routerName)
    }
  }
}
</script>


<style>
.router-enter,
.router-leave-to {
  opacity: 0;
}
.router-enter-active,
.router-enter-active {
  transition: all 1s ease;
}
.router-enter-to,
.router-leave {
  opacity: 1;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
