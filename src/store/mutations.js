import Vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
    // state.appName = params.appName
  },
  SET_APP_VERSION (state) {
    Vue.set(state, 'appVersion')
  }
}
export default mutations
