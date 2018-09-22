const state = {
  counter: 0
};

const getters = {
  doubleCounter: state => state.counter * 2,
  clickCounter: state => `${state.counter}Clicks`
};

const mutations = {
  incrementCounter: (state, payload) => {
    state.counter += payload;
  },
  decrementCounter: (state, payload) => {
    state.counter -= payload;
  }
};

const actions = {
  counterIncrement: ({ commit }, payload) => {
    commit('incrementCounter', payload);
  },
  counterDecrement:({ commit }, payload) => {
    commit('decrementCounter', payload);
  },
  counterAsyncIncrement: ({ commit }, payload) => {
    setTimeout(()=>{
      commit('incrementCounter',payload);
    },3000);
  },
  counterAsyncDecrement: ({ commit }, payload) => {
    setTimeout(()=>{
      commit('decrementCounter',payload);
    },3000);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
