import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {
  async getData(store) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    store.commit('SET_DATA', { id: response.data.id })
  }
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: actions,
  modules: {
  }
})
