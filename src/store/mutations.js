import Vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.appName = params
    // state.appName = params.appName
  },
  SET_APP_VERSION (state) {
    Vue.set(state, 'appVersion')
  },
  SET_STATE_VALUE (state, value) {
    state.stateValue = value
  }
}
export default mutations
