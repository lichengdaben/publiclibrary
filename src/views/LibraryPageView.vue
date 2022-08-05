<template>
<div class="LibraryPageView">
 <div v-if="isMobile()">
 <img src="../assets/portallogo.png" alt=""  id="titleimage"> 
   <div id="number" >手机版</div>
    <b-container class="container2">
        <b-row>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                             <div>DISTRICT</div>
                             <div v-if="districtname" class="secondHeader">{{districtname}}</div>
                            <div  v-else class="secondHeader" >Please choose the district that suits you</div>
                        </div> 
                        <div>
                            <div id="triangle"  v-on:click="showDistrict()"></div>
                            <div id="uppertriangle"  v-on:click="showDistrict()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div v-if="districtList" id="districtDropdown" class="dropdown-content" style="display: none;">
                        <a v-for="district in districtList" :key="district.id" v-bind:id="'district' + district.id" v-on:click="showDistrictLibraries(district.id,district.Name)">{{ district.Name}}</a>            
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                            <div>LIBRARY</div>
                            <div class="secondHeader" >Please choose the library that suits you</div>
                        </div> 
                        <div>
                            <div id="triangle2" v-on:click="showLibrary()"></div>
                            <div id="uppertriangle2" v-on:click="showLibrary()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div id="libraryDropdown" class="dropdown-content" style="display: none;">
                        <a v-for="library in libraryResult" :key="library.id">{{library.Name}}</a>
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
                        <div>
                            <div id="triangle3" v-on:click="showWorkStation()"></div>
                             <div id="uppertriangle3" v-on:click="showWorkStation()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div v-show="isShowMob"  id="workStationDropdown">
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
    <b-container id="containerMobile2">
        <div class="containerbutton">
            <div>
                <input id="conditionOfUse" type="checkbox" class="checkedboxstyle" v-on:click="agreeToConditionOfUse()">
                I agree to the <br/>
                <p><a class="" href="#">Condition of Use</a></p>
            </div>
        </div>
        <div>
            <button id="next" type="button" class="buttonNext" disabled>Next
                <font-awesome-icon icon="fas fa-right-long"/>
            </button>
        </div>
    </b-container>
</div>
<div v-else>

    <b-container class="container2">
        <b-row>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div class="firstHeader">
                             <div>DISTRICT</div>
                             <div v-if="districtname" class="secondHeader">{{districtname}}</div>
                            <div  v-else class="secondHeader" >Please choose the district that suits you</div>
                        </div> 
                        <div>
                            <div id="triangle"  v-on:click="showDistrict()"></div>
                            <div id="uppertriangle"  v-on:click="showDistrict()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div v-if="districtList" id="districtDropdown" class="dropdown-content">
                        <a v-for="district in districtList" :key="district.id" v-bind:id="'district' + district.id" v-on:click="showDistrictLibraries(district.id,district.Name)">{{ district.Name}}</a>            
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
                        <div>
                            <div id="triangle2" v-on:click="showLibrary()"></div>
                            <div id="uppertriangle2" v-on:click="showLibrary()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div id="libraryDropdown" class="dropdown-content">
                        <a v-for="library in libraryResult" :key="library.id">{{library.Name}}</a>
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
                        <div>
                            <div id="triangle3" v-on:click="showWorkStation()"></div>
                             <div id="uppertriangle3" v-on:click="showWorkStation()" style="display: none;" ></div>
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
                    <input type="checkbox" checked="checked" class="checkedboxstyle ">
                    Condition of Use
                </div>
            </button>
            <button type="button" class="button2" style="float: right;">Accept and Continue
                <font-awesome-icon icon="fas fa-right-long"/>
            </button>
    </b-container>
</div>
</div>
</template>

<script>
import { mixins } from '@/common/mixins'
import  {getAllDistrict} from '@/service/test.js'
import  {getAllLibraries} from '@/service/test.js'
// let i=0
// async function getAllDistrict () {
// let res =await fetch(`http://192.168.50.117:3000/cfm_getDistrict`);
// let districtList = await res.json();
// return districtList
//  }

// async function getAllLibraries () {
//     let res = await fetch(`http://192.168.50.117:3000/cfm_getAllLibrary`);
//     let allLibrariesList = await res.json();
//     return allLibrariesList;
// }
let i=0
export default {
  name: 'LibraryPageView',
  data(){
    return {
        districtList:null,
        districtname:null,
        allLibrariesList: null,
        libraryResult:null,
        isShow:true,
        isShowMob:false
    }
  },
  mixins: [mixins],
  props: {
    msg: String
  },
  methods: {
        showDistrict() {
           i++; // <-- Updated
            if (i % 2 == 0) {
                document.getElementById("districtDropdown").style.display="none";
                document.getElementById("triangle").style.display="block";
                document.getElementById("uppertriangle").style.display="none";
            } else {
                document.getElementById("districtDropdown").style.display="block";
                document.getElementById("triangle").style.display="none";
                document.getElementById("uppertriangle").style.display="block";
            }
        },
        showLibrary() {
        i++;
        if(i % 2== 0){
        document.getElementById("libraryDropdown").style.display="none";
        document.getElementById("triangle2").style.display="block";
        document.getElementById("uppertriangle2").style.display="none";
        }else{
        document.getElementById("libraryDropdown").style.display="block";
        document.getElementById("triangle2").style.display="none";
        document.getElementById("uppertriangle2").style.display="block";
        }
},        
        showWorkStation() {
        i++;
        this.isShow=!this.isShow
        this.isShowMob=!this.isShowMob
        if(i % 2== 0){
        document.getElementById("triangle3").style.display="block";
        document.getElementById("uppertriangle3").style.display="none";
        }else{
        document.getElementById("triangle3").style.display="none";
        document.getElementById("uppertriangle3").style.display="block";
        }
},
       showDistrictLibraries(districtId,districtname) {
            this.libraryResult = this.allLibrariesList.filter(library => library.DistrictId == districtId);
            this.districtname = districtname;
            return this.libraryResult;
        },
        agreeToConditionOfUse() {
            let conditionOfUse = document.getElementById("conditionOfUse");
            let next = document.getElementById("next");
            next.disabled = !conditionOfUse.checked;
        }
    },
    async created(){
        this.districtList=await getAllDistrict();
        this.allLibrariesList = await getAllLibraries();
    },

}


</script>

<style scoped>
</style>
