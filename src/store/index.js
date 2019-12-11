import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {
  async getData(store) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    store.commit('SET_DATA', response.data)
  }
}

export default new Vuex.Store({
  state: {
    data: [],
    displayedProjects: []
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
      state.displayedProjects = data;
    }
  },
  actions: actions,
  modules: {
  }
})
