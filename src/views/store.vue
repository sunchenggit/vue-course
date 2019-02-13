<template>
  <div>
    <a-input v-model="inputValue" />
    <!-- <a-input @input="handleInput" /> -->
    <!-- <a-show :content="inputValue" /> -->
    <p>appName: {{ appName }} -- appWithVersion: {{ appWithVersion }} </p>
    <p>userName: {{ userName }} -- firstLetter is: {{ firstLetter }}</p>
    <p>{{ inputValue }} -> Last Letter is {{ inputValueLastLetter }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'store',
  data () {
    return {
      inputValue: ''
    }
  },
  components: {
    AInput,
    AShow
  },
  computed: {
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName
    }),
    // ...mapGetters([
    //   'appWithVersion'
    // ]),
    ...mapGetters([
      'firstLetter',
      'appWithVersion'
    ]),
    // appWithVersion () {
    //   return this.$store.getters.appWithVersion
    // },
    // appName () {
    //   return this.$store.state.appName
    // },
    // userName () {
    //   return this.$store.state.user.userName
    // }
    inputValueLastLetter () {
      return this.inputValue.substr(-1,1)
    }
  },
  methods: {
    handleInput (val) {
      this.inputValue = val
    }
  }
}
</script>

<style>

</style>
