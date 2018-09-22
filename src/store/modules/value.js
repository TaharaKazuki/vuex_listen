const state = {
  value: 0
};

const getters = {
  value: state => state.value
};

const mutations = {
  updateValue: (state, payload ) => {
    state.value = payload;
  }
};

const actions = {
  updateValue: ({commit},payload)=> {
    commit('updateValue',payload)
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
