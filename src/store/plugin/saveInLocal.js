export default store => {
  if (localStorage.states) store.replaceState(JSON.parse(localStorage.states))
  store.subscribe((mutation, state) => {
    localStorage.states = JSON.stringify(state)
  })
}
