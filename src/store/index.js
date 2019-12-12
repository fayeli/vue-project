import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const actions = {
  async getData(store) {
    const response = await axios.get('https://my-json-server.typicode.com/fayeli/vue-project/projects')
    store.commit('SET_DATA', response.data)
  }
}

export default new Vuex.Store({
  state: {
    data: [],
  },
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    }
  },
  actions: actions,
  modules: {
  }
})
