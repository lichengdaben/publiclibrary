<template>
    <div class="SelectLocation">
        <div v-if="isMobile()">
            <SelectLocationH5/>
        </div>
        <div v-else-if="isIpad()">
            <SelectLocationT/>
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <MenuBar/>
                <NavBar/>
                <b-row>
                    <b-col>
                        <div class="dropdown">
                            <div class="dropbtn">
                                <div class="firstHeader">
                                    <div>DISTRICT</div>
                                    <div v-if="selectedDistrictName" class="secondHeader">{{selectedDistrictName}}</div>
                                    <div v-else class="secondHeader" >Please choose the district that suits you</div>
                                </div> 
                            </div>
                            <div v-if="districtList" id="districtDropdown" class="dropdown-content">
                                <a v-for="district in districtList" :key="district.districtId" :ref="'district' + district.districtId" v-on:click="clickDistrict(district.districtName, district.districtId)">{{ district.districtName }}</a>            
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="dropdown">
                            <div class="dropbtn">
                                <div class="firstHeader">
                                    <div>LIBRARY</div>
                                    <div v-if="selectedLibraryName" class="secondHeader">{{selectedLibraryName}}</div>
                                    <div v-else class="secondHeader">Please choose the library that suits you</div>
                                </div> 
                            </div>
                            <div id="libraryDropdown" class="dropdown-content">
                                <a v-for="library in libraryResult" :key="library.id" :ref="'library' + library.libraryId" v-on:click="clickLibraries(library.libraryName, library.libraryId)">{{library.libraryName}}</a>
                            </div>
                        </div>
                    </b-col>
                    <b-col>
                        <div class="dropdown">
                            <div class="dropbtn">
                                <div class="firstHeader">
                                    <div>WORKSTATION TYPE</div>
                                </div>     
                            </div>
                            <div v-show="isShow" id="workStationDropdown">
                                <div v-for="worktype in workstationType" :key="worktype.typeId">
                                    <div class="rectangle1">
                                        <b-container>
                                            <b-row>
                                                <b-col cols="1" align="center" style="padding: 0px;">
                                                    <input type="radio" id="workstationType" name="fav_language" :ref="'workstationType' + worktype.typeId" v-on:click="clickWorkstation(worktype.typeName, worktype.typeId)" />
                                                </b-col>
                                                <b-col cols="10">
                                                    <label for="workstationType" style="padding: 0px;">
                                                        <div class="firstfont">{{worktype.typeName}}<br></div>
                                                        <div class="secondfont">WORKSTATION</div>
                                                    </label>
                                                </b-col>
                                                <b-col cols="1" align="center" style="padding: 0px;">
                                                    <font-awesome-icon icon="fas fa-exclamation" class="fa-solid fa-exclamation" id="exclamationicon"/>
                                                </b-col>
                                            </b-row>
                                        </b-container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <PageFooter ref="pageFooterSection" />
            <!--<b-container>
                <b-row align-v="space-around" class="footer">
                    <b-col cols="6">
                        <div>
                            <button id="next" type="button" class="buttonNext"  @click='jumpToBack'>Back
                                <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" />
                            </button>
                        </div>
                    </b-col>
                    <b-col cols="6">
                        <div class="rightbutton">
                            <input id="conditionOfUse" type="checkbox" class="checkedboxstyle" v-model="checked">
                            <div id="conditionAgree"> I agree to the</div>
                            <a id="conditionPage" @click='jumpToTerm'>&lt;Condition of Use&gt;</a>
                            <button id="next" type="button" class="buttonNext2"  @click='jumpToNext'>Next
                                <font-awesome-icon icon="fas fa-right-long"/>
                            </button>
                        </div>
                    </b-col>
                </b-row>
            </b-container>-->
        </div>
    </div>
</template>

<script >
import { mixins } from '@/common/mixins'
import NavBar from '@/components/NavBar.vue'
import { getAllDistrict, queryLibraryByDistrictId, queryWorkstationByLibraryCode } from '@/service/test.js'
import SelectLocationH5 from './SelectLocationH5.vue'
import SelectLocationT from './SelectLocationT.vue'
import PageFooter from '/src/components/PageFooter.vue'
import MenuBar from '@/components/MenuBar.vue'

export default {
  name: 'SelectLocation',
  components: { SelectLocationH5, SelectLocationT, NavBar, PageFooter, MenuBar },
  data(){
    return {
        districtList: null,
        libraryList: [],
        libraryResult: [],
        isShow:true,
        isShowMob:false,
        checked: false,
        selectedDistrictId: null,
        selectedDistrictName:null,
        selectedLibraryId: null,
        selectedLibraryName:null,
        workstationType:null,
        isShowD:true,
        isShowL:true,
        isShowW:true,
        isShowWS:true,
    }
  },
  mixins: [mixins],
    props: [ 'selectionLocationPage' ],
    computed: {
        selectedDistrict() {
            return this.$store.state.selectedDistrict
        },
        selectedLibrary() {
            return this.$store.state.selectedLibrary
        },
        selectedWorkstationType() {
            return this.$store.state.selectedWorkstationType
        }
    },
    methods: {
        checkComplete() {
            this.$refs.pageFooterSection.checkComplete('selectionLocationPage');
        },

        async clickDistrict(districtname, districtId) {
            this.$store.commit('selectedDistrict', districtname);
            this.$store.commit('selectedDistrictId', districtId);
            this.$store.commit('selectedLibrary', null);
            this.$store.commit('selectedLibraryId', null);
            this.$store.commit('selectedWorkstationType', null);
            this.$store.commit('selectedWorkstationTypeId', null);
            this.$store.commit('selectedWorkstationFeature', null);
            this.$store.commit('selectedWorkstationFeatureId', null);
            this.libraryResult = (await queryLibraryByDistrictId(districtId)).data.data;
            
            this.$store.commit('libraryList', this.libraryResult);

            if (this.selectedDistrictId) {
                (this.$refs['district' + this.selectedDistrictId])[0].classList.remove('selectedDistrictLibrary');
            }
            (this.$refs['district' + districtId])[0].classList.add('selectedDistrictLibrary');

            this.selectedDistrictName = districtname;
            this.selectedDistrictId = districtId;

            this.checkComplete();
        },

        async clickLibraries(libraryName, libraryId) {
            this.$store.commit('selectedLibrary', libraryName);
            this.$store.commit('selectedLibraryId', libraryId);
            this.$store.commit('selectedWorkstationType', null);
            this.$store.commit('selectedWorkstationTypeId', null);
            this.$store.commit('selectedWorkstationFeature', null);
            this.$store.commit('selectedWorkstationFeatureId', null);
            this.workstationType = (await queryWorkstationByLibraryCode(libraryId, 123456)).data.data;
            
            this.$store.commit('workStationTypeList', this.workstationType);

            if (this.selectedLibraryId) {
                (this.$refs['library' + this.selectedLibraryId])[0].classList.remove('selectedDistrictLibrary');
            }
            (this.$refs['library' + libraryId])[0].classList.add('selectedDistrictLibrary');

            this.selectedLibraryName = libraryName;
            this.selectedLibraryId = libraryId;

            this.checkComplete();
        },

        async clickWorkstation(workstationType, workstationTypeId) {
            this.$store.commit('selectedWorkstationType', workstationType);
            this.$store.commit('selectedWorkstationTypeId', workstationTypeId);
            this.$store.commit('selectedWorkstationFeature', null);
            this.$store.commit('selectedWorkstationFeatureId', null);
            this.selectedWorkstation = workstationType;

            this.checkComplete();
        },

        agreeToConditionOfUse() {
            let conditionOfUse = document.getElementById("conditionOfUse");
            let next = document.getElementById("next");
            next.disabled = !conditionOfUse.checked;
        },

        jumpToNext() {
            if (this.checked) {
                this.$router.push('/workstationbooking/DateTimeChoose');
            }
        },

        jumpToTerm() {
            this.$router.push('/workstationbooking/TermPageH5');      
        },

        jumpToBack() {
            this.$router.push('/workstationbooking/HomeView');      
        },

        initializePage() {
            if (this.$store.state.selectedDistrictId) {
                this.districtList = this.$store.state.districtList;

                if (this.$store.state.selectedLibraryId) {
                    this.libraryResult = this.$store.state.libraryList;

                    if (this.$store.state.selectedWorkstationTypeId) {
                        this.workstationType = this.$store.state.workStationTypeList;
                        this.checkComplete();
                    }
                }
            }

            return Promise.resolve(null);
        }
    },
    async created() {
        if (!this.$store.state.selectedDistrictId) {
            this.districtList = (await getAllDistrict()).data.data;
            this.$store.commit('districtList', this.districtList);
        }

        this.$store.commit('selectedDateOfUse', null);
        this.$store.commit('selectedHour', null);
        this.$store.commit('selectedSession1Time', null);
        this.$store.commit('selectedSession1Group', null);
        this.$store.commit('selectedSession1Workstation', null);
        this.$store.commit('selectedSession2Time', null);
        this.$store.commit('selectedSession2Group', null);
        this.$store.commit('selectedSession2Workstation', null);
    },
    mounted() {
        if (this.$store.state.selectedDistrictId) {
            this.initializePage().then(val => {
                console.log(val);
                (this.$refs['district' + this.$store.state.selectedDistrictId])[0].classList.add('selectedDistrictLibrary');
                (this.$refs['library' + this.$store.state.selectedLibraryId])[0].classList.add('selectedDistrictLibrary');
                (this.$refs['workstationType' + this.$store.state.selectedWorkstationTypeId])[0].checked = true;
            });
        }
    }
}   

</script>

<style scoped>
</style>