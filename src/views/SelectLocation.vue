<template>
<div class="SelectLocation">
<div v-if="isMobile()">
    <SelectLocationH5/>
</div>
<div v-else-if="isIpad()">
    <SelectLocationT/>
</div>
<div v-else>
<b-container class="container2">
        <b-row>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                             <div>DISTRICT</div>
                             <div v-if="selectedDistrictName" class="secondHeader">{{selectedDistrictName}}</div>
                            <div  v-else class="secondHeader" >Please choose the district that suits you</div>
                        </div> 
                    </div>
                    <div v-if="districtList" id="districtDropdown" class="dropdown-content">
                        <a v-for="district in districtList" :key="district.districtId" v-bind:id="'district' + district.districtId" v-on:click="clickDistrict(district.districtId, district.districtName)">{{ district.districtName }}</a>            
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                            <div>LIBRARY</div>
                              <div v-if="selectedLibraryName" class="secondHeader">{{selectedLibraryName}}</div>
                            <div v-else class="secondHeader" >Please choose the library that suits you</div>
                        </div> 
                    </div>
                    <div id="libraryDropdown" class="dropdown-content">
                        <a v-for="library in libraryResult" :key="library.id" v-on:click="clickLibraries(library.libraryName,library.libraryId)">{{library.libraryName}}</a>
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
                    <div v-show="isShow"  id="workStationDropdown" >
                        <div  v-for="worktype in  workstationtype" :key="worktype.id">
                        <div class="rectangle1">
                            <input type="radio" id="workstationtype" name="fav_language" value="workstationtype">
                            <label for="workstationtype">
                                <div class="firstfont"> {{worktype.typeName}}<br></div>
                                <div class="secondfont">WORKSTATION</div>
                            </label>
                            <font-awesome-icon icon="fas fa-exclamation" class="fa-solid fa-exclamation" id="exclamationicon"/>
                        </div>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <b-container>
     <b-row align-v="space-around" class="footer">
      <b-col cols="6">
        <div>
           <button id="next" type="button" class="buttonNext"  @click='jumpToNext'>Back
        <font-awesome-icon icon="fa-solid fa-arrow-rotate-left" />
        </button>
    </div>
      </b-col>
      <b-col cols="6">
      <div class="rightbutton">
        <input id="conditionOfUse" type="checkbox" class="checkedboxstyle" v-model="checked">
         <div> I agree to the</div>
          <a id="conditionPage" @click='jumpToTerm'>&lt;Condition of Use&gt;</a>
        <button id="next" type="button" class="buttonNext2"  @click='jumpToNext'>Next
        <font-awesome-icon icon="fas fa-right-long"/>
        </button>
         </div>
      </b-col>
    </b-row>
     </b-container>
    <!--<b-container fluid id="container3" class="controller clearfix">
            <button type="button" class="button1">
                <div class="containerbutton">
                    <input type="checkbox" class="checkedboxstyle" v-model="checked">
                    Condition of Use
                </div>
            </button>
            <button type="button" class="button2" style="float: right;" @click='jumpToNext'>Accept and Continue
                <font-awesome-icon icon="fas fa-right-long"/>
            </button>
    </b-container>-->
</div>
</div>
</template>

<script >
import { mixins } from '@/common/mixins'
import  {getAllDistrict,queryLibraryByDistrictId,queryWorkstationByLibraryCode} from '@/service/test.js'
import SelectLocationH5 from './SelectLocationH5.vue'
import SelectLocationT from './SelectLocationT.vue'

export default {
  name: 'SelectLocation',
  components: { SelectLocationH5,SelectLocationT },
  data(){
    return {
        districtList:null,
        libraryResult:null,
        isShow:true,
        isShowMob:false,
        checked: false,
        selectedDistrictName:null,
        selectedLibraryName:null,
        workstationtype:null,
        isShowD:true,
        isShowL:true,
        isShowW:true,
        isShowWS:true
    }
  },
  mixins: [mixins],
  props: {
    msg: String
  },
  computed: {
    selectedDistrict(){
        return this.$store.state.selectedDistrict
    },
    selectedLibrary(){
        return this.$store.state.selectedLibrary
    }
  },
  methods: {
        async clickDistrict(districtId,districtname) {
           this.libraryResult=(await queryLibraryByDistrictId(districtId)).data.data;
           this.$store.commit('selectedDistrict',districtname);
           this. selectedDistrictName=districtname
        //    console.log(this.$store.state.selectedDistrict)
         },
        async clickLibraries(libraryName) {
            this.$store.commit('selectedLibrary',libraryName);
            this.selectedLibraryName=libraryName
            this.workstationtype=(await queryWorkstationByLibraryCode(123456)).data.data;
            // console.log(this.$store.state.selectedLibrary)
            console.log( this.workstationtype)
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
  },
  async created(){
    this.districtList = (await getAllDistrict()).data.data;
  },
  

}   

</script>

<style scoped>

</style>
