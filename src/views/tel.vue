<template>
  <div class="tel">
    {{ message }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: ''
    }
  },
  mounted () {
    this.$bus.$on('on-click', mes => {
      this.message = mes
    })
  }
}
</script>

<style scoped>
.tel {
  border: 1px solid green
}
</style>
