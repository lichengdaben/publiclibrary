import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    district:"district",
    library:"library"
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
    selectedWorkStationType (state, val){
      state.selectedWorkStation = val;
    },
    selectedWorkStationLanguage(state, val){
      state.selectedWorkStationLanguage = val;
    },
    selectedWorkStationFeature(state, val){
      state.selectedWorkStationFeature = val;
    },
    selectedDateOfUse(state, val){
      state.selectedDateOfUse = val;
    },
    selectedSession1Time(state, val){
      state.selectedSession1Time = val;
    },
    selectedSession1Group(state, val){
      state.selectedSession1Group = val;
    },
    selectedSession1Workstation(state, val){
      state.selectedSession1Workstation = val;
    },
    selectedSession2Time(state, val){
      state.selectedSession2Time = val;
    },
    selectedSession2Group(state, val){
      state.selectedSession2Group = val;
    },
    selectedSession2Workstation(state, val){
      state.selectedSession2Workstation = val;
    }
  },
  actions: {
   
  },
  modules: {
  }
})
