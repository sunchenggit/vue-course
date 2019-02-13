<template>
  <div>
    <a-input v-model="inputValue" />
    <!-- <a-input @input="handleInput" /> -->
    <!-- <a-show :content="inputValue" /> -->
    <p>appName: {{ appName }} -- appWithVersion: {{ appWithVersion }} </p>
    <p>userName: {{ userName }} -- firstLetter is: {{ firstLetter }}</p>
    <p>{{ inputValue }} -> Last Letter is {{ inputValueLastLetter }}</p>
    <p>{{appVersion}}</p>
    <button @click="handleChangeAppName">修改AppNmae</button>
    <button @click="changeUserName">修改用户名</button>
    <button @click="asyncChangeAppName">actions修改AppName</button>
    <button @click="registerModule">动态注册模块</button>
    <p v-for="(li, index) in todoList" :key="index">{{ li }}</p>
  </div>
</template>

<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
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
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      todoList: state => state.user.todo ? state.user.todo.todoList : []
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
    ...mapMutations([
      'SET_USER_NAME',
      'SET_APP_NAME'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handleInput (val) {
      this.inputValue = val
    },
    asyncChangeAppName () {
      this.updateAppName()
    },
    handleChangeAppName () {
      // this.$store.commit('SET_APP_NAME', {
      //   appName: 'NewAppName'
      // })
      // this.$store.commit({
      //   type: 'SET_APP_NAME',
      //   appName: 'NewAppName'
      // })
      this.SET_APP_NAME('NewAppName')
      this.$store.commit('SET_APP_VERSION', '3.0')
    },
    changeUserName () {
      this.SET_USER_NAME('vue-cource')
    },
    registerModule () {
      /*this.$store.registerModule('todo', {
        state: {
          todoList: [
            '学习 mutations','学习 actions'
          ]
        }
      })*/
      this.$store.registerModule(['user', 'todo'], {
        state: {
          todoList: [
            '学习 mutations','学习 actions'
          ]
        }
      })
    }
  }
}
</script>

<style>

</style>
