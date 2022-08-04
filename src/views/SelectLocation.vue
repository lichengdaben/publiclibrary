<template>
<div class="SelectLocation">
    <b-container class="container2">
        <b-row>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                             <div>DISTRICT</div>
                             <div v-if="selectedDistrict" class="secondHeader">{{selectedDistrict}}</div>
                            <div  v-else class="secondHeader" >Please choose the district that suits you</div>
                        </div> 
                    </div>
                    <div v-if="districtList" id="districtDropdown" class="dropdown-content">
                        <a v-for="district in districtList" :key="district.id" v-bind:id="'district' + district.id" v-on:click="clickDistrict(district.id,district.Name)">{{ district.Name}}</a>            
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                            <div> LIBRARY</div>
                            <div class="secondHeader" >Please choose the library that suits you</div>
                        </div> 
                    </div>
                    <div id="libraryDropdown" class="dropdown-content">
                        <a v-for="library in libraryResult" :key="library.id" v-on:click="clickLibraries(library.Name)">{{library.Name}}</a>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                            <div>CHOOSE COMPUTER</div>
                            <div class="secondHeader">Computer specially equipped for different users</div> 
                        </div>
                    </div>
                    <div v-show="isShow"  id="workStationDropdown" >
                        <div class="rectangle1"    >
                            <input type="radio" id="workstationtype" name="fav_language" value="workstationtype">
                            <label for="workstationtype">
                                <div class="firstfont">ADULT <br></div>
                                <div class="secondfont">WORKSTATION</div>
                            </label>
                            <font-awesome-icon icon="fas fa-exclamation" class="fa-solid fa-exclamation" id="exclamationicon"/>
                        </div>
                        <div class="rectangle1"> 
                            <input type="radio" id="workstationtype" name="fav_language" value="workstationtype">
                            <label for="workstationtype">
                                <div class="firstfont">AV<br></div>
                                <div class="secondfont">WORKSTATION</div>
                            </label>
                          <font-awesome-icon icon="fas fa-exclamation" class="fa-solid fa-exclamation" id="exclamationicon"/>
                        </div>
                    </div>
                </div>
            </b-col>
        </b-row>
    </b-container>
    <b-container fluid id="container3" class="controller clearfix">
            <button type="button" class="button1">
                <div class="containerbutton">
                    <input type="checkbox" class="checkedboxstyle" v-model="checked">
                    Condition of Use
                </div>
            </button>
            <button type="button" class="button2" style="float: right;" @click='jumpToNext'>Accept and Continue
                <font-awesome-icon icon="fas fa-right-long"/>
            </button>
    </b-container>
</div>
</template>

<script>
import { mixins } from '@/common/mixins'
import { getAllDistrict, getAllLibraries } from '@/service/library'

export default {
  name: 'SelectLocation',
  data(){
    return {
        districtList:null,
        // districtname:null,
        allLibrariesList: null,
        libraryResult:null,
        isShow:true,
        isShowMob:false,
        checked: false
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
        clickDistrict(districtId,districtname) {
            this.libraryResult = this.allLibrariesList.filter(library => library.DistrictId == districtId);
            this.$store.commit('selectedDistrict',districtname);
            console.log(this.$store.state.selectedDistrict)
        },
        clickLibraries(libraryName) {
            this.$store.commit('selectedLibrary',libraryName);
            console.log(this.$store.state.selectedLibrary)
        },
        agreeToConditionOfUse() {
            let conditionOfUse = document.getElementById("conditionOfUse");
            let next = document.getElementById("next");
            next.disabled = !conditionOfUse.checked;
        },
        onChecked(val) {
            console.log(val)
        },
        jumpToNext() {
            if (this.checked) {
                this.$router.push('/workstationbooking/DateTimeChoose');
            }
            
        }
    },
    async created(){
        this.districtList=await getAllDistrict();
        this.allLibrariesList = await getAllLibraries();
    },

}


</script>

<style scoped>
#number{
width:3.75rem
}
</style>
