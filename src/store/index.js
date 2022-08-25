import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    district:"district",
    library:"library",
    workstationGroup:"workstationGroup"
  },
  getters: {
  },
  mutations: {
    selectedDistrict (state, val){
      state.selectedDistrict = val;
    },
    selectedLibrary (state, val){
      state.selectedLibrary = val;
    },
    selectedWorkstationGroup (state, val){
      state.selectedWorkstationGroup = val;
    }
  },
  actions: {
   
  },
  modules: {
  }
})
