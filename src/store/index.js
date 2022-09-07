import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  /*state: {
    district:"district",
    library:"library"
  },*/
  getters: {
  },
  mutations: {
    selectedDistrict(state, val) { // SELECT LOCATION
      state.selectedDistrict = val;
    },
    selectedDistrictId(state, val) { // SELECT LOCATION
      state.selectedDistrictId = val;
    },
    districtList(state, val) { // SELECT LOCATION
      state.districtList = val;
    },
    selectedLibrary(state, val) { // SELECT LOCATION
      state.selectedLibrary = val;
    },
    selectedLibraryId(state, val) { // SELECT LOCATION
      state.selectedLibraryId = val;
    },
    libraryList(state, val) { // SELECT LOCATION
      state.libraryList = val;
    },
    selectedWorkstationType(state, val) { // SELECT LOCATION
      state.selectedWorkstationType = val;
    },
    selectedWorkstationTypeId(state, val) { // SELECT LOCATION
      state.selectedWorkstationTypeId = val;
    },
    workStationTypeList(state, val) { // SELECT LOCATION
      state.workStationTypeList = val;
    },
    isReadTerm(state, val) { // SELECT LOCATION
      state.isReadTerm = val;
    },
    selectedWorkstationFeature(state, val) { // LEFT MENU
      state.selectedWorkstationFeature = val;
    },
    selectedWorkstationFeatureId(state, val) { // LEFT MENU
      state.selectedWorkstationFeatureId = val;
    },
    featureList(state, val) { // LEFT MENU
      state.featureList = val;
    },
    selectedWorkstationLanguage(state, val) { // LEFT MENU
      state.selectedWorkstationLanguage = val;
    },
    selectedWorkstationLanguageId(state, val) { // LEFT MENU
      state.selectedWorkstationLanguageId = val;
    },
    languageList(state, val) { // LEFT MENU
      state.languageList = val;
    },
    selectedDateOfUse(state, val) { // DATE/TIME CHOOSE
      state.selectedDateOfUse = val;
    },
    dateOfUseList(state, val) { // DATE/TIME CHOOSE
      state.dateOfUseList = val;
    },
    selectedHour(state, val) { // DATE/TIME CHOOSE
      state.selectedHour = val;
    },
    sessionList(state, val) { // DATE/TIME CHOOSE
      state.sessionList = val;
    },
    selectedSession1Time(state, val) { // DATE/TIME CHOOSE
      state.selectedSession1Time = val;
    },
    selectedSession1Group(state, val) { // WORKSTATION GROUP
      state.selectedSession1Group = val;
    },
    selectedSession1Workstation(state, val) { // BOOKING DETAILS
      state.selectedSession1Workstation = val;
    },
    selectedSession1WorkstationId(state, val) { // BOOKING DETAILS
      state.selectedSession1WorkstationId = val;
    },
    selectedSession1WorkstationGrid(state, val) { // BOOKING DETAILS
      state.selectedSession1WorkstationGrid = val;
    },
    selectedSession2Time(state, val) { // DATE/TIME CHOOSE
      state.selectedSession2Time = val;
    },
    selectedSession2Group(state, val) { // WORKSTATION GROUP
      state.selectedSession2Group = val;
    },
    selectedSession2Workstation(state, val) { // BOOKING DETAILS
      state.selectedSession2Workstation = val;
    },
    selectedSession2WorkstationId(state, val) { // BOOKING DETAILS
      state.selectedSession2WorkstationId = val;
    },
    selectedSession2WorkstationGrid(state, val) { // BOOKING DETAILS
      state.selectedSession2WorkstationGrid = val;
    },
    listGroup(state, val) { // WORKSTATION GROUP
      state.listGroup = val;
    },
    defaultWorkstation(state, val) { // WORKSTATION GROUP
      state.defaultWorkstation = val;
    },
  },
  actions: {
   
  },
  modules: {
  }
})
