import { getAppName } from '@/api/app'

const actions = {
  /*updateAppName ({ commit }) {
    getAppName().then(res => {
      // const { info: { appName } } = res //es6 解构赋值
      commit('SET_APP_NAME', res.info.appName)
    }).catch(err => {
      console.log(err)
    })
  }*/

  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (err) {
      console.log(err)
    }
  }

}
export default actions
