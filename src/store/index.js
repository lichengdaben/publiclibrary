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
    selectedDistrict(state, val) {
      state.selectedDistrict = val;
    },
    selectedDistrictId(state, val) {
      state.selectedDistrictId = val;
    },
    districtList(state, val) {
      state.districtList = val;
    },
    selectedLibrary(state, val) {
      state.selectedLibrary = val;
    },
    selectedLibraryId(state, val) {
      state.selectedLibraryId = val;
    },
    libraryList(state, val) {
      state.libraryList = val;
    },
    selectedWorkstationType(state, val) {
      state.selectedWorkstationType = val;
    },
    selectedWorkstationTypeId(state, val) {
      state.selectedWorkstationTypeId = val;
    },
    workStationTypeList(state, val) {
      state.workStationTypeList = val;
    },
    isReadTerm(state, val) {
      state.isReadTerm = val;
    },
    selectedWorkstationFeature(state, val) {
      state.selectedWorkstationFeature = val;
    },
    selectedWorkstationFeatureId(state, val) {
      state.selectedWorkstationFeatureId = val;
    },
    featureList(state, val) {
      state.featureList = val;
    },
    selectedWorkstationLanguage(state, val) {
      state.selectedWorkstationLanguage = val;
    },
    selectedWorkstationLanguageId(state, val) {
      state.selectedWorkstationLanguageId = val;
    },
    languageList(state, val) {
      state.languageList = val;
    },
    selectedDateOfUse(state, val){
      state.selectedDateOfUse = val;
    },
    selectedHour(state, val){
      state.selectedHour= val;
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
    },
  },
  actions: {
   
  },
  modules: {
  }
})
