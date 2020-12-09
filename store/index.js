export const state = () => ({
  oscuro: false
})

export const mutations = {
  toggle (state) {
    state.oscuro = !state.oscuro
  }
}

export const getters = {
  getOscuro (state) {
    return state.oscuro
  }
}
