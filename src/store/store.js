import Vue from 'vue';
import Vuex from 'vuex';
import counter from './modules/counter';
import value from './modules/value';

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    counter,
    value
  }
});

