<template>
  <div class="email">
    <button @click="handleClick">按我</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$bus.$emit('on-click', 'Hello World')
      this.$emit('on-db', 'Hello Vue')
    }
  },
  mounted () {
    this.$on('on-db', mes => {
      console.log(mes)
    })
  }
}
</script>

<style scoped>
.email {
  border: 1px solid red;
}
</style>
