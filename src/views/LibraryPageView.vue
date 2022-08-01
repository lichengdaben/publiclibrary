<template>
<div class="LibraryPageView">
    <b-container class="containerHeader">
        <b-row>
            <b-col id="title">
                <div class="title1">PLACE WORKSTATION BOOKING</div>
                <div class="title2">SELECT LOCATION</div>
            </b-col>
            <b-col id="catalogue">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                    <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg>
                 <button type="button" class="cataloguebutton">Home</button>
                 <font-awesome-icon icon="fas fa-angle-right"/>
                 <button type="button" class="cataloguebutton2">SELECT LOCATION</button>
                 <font-awesome-icon icon="fas fa-angle-right"/>
                 <button type="button" class="cataloguebutton">DATE/TIME CHOOSE</button>
                 <font-awesome-icon icon="fas fa-angle-right"/>
                 <button type="button" class="cataloguebutton">WORKSTATION GROUP</button>
                 <font-awesome-icon icon="fas fa-angle-right"/>
                 <button type="button" class="cataloguebutton">BOOKING DETAILS</button>
                 <font-awesome-icon icon="fas fa-angle-right"/>
                 <button type="button" class="cataloguebutton">BOOKING CONFIRMATION</button>
            </b-col>
        </b-row>
    </b-container>

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
                            <div id="triangle2" onclick="showLibrary()"></div>
                            <div id="uppertriangle2" onclick="showLibrary()" style="display: none;" ></div>
                        </div>
                    </div>
                    <div v-if="libraryResult" id="libraryDropdown" class="dropdown-content">
                        <a v-for="library in libraryResult" :key="library.id">{{library.Name}}</a>
                    </div>
                </div>
            </b-col>
            <b-col>
                <div class="dropdown">
                    <div class="dropbtn">
                        <div>
                            <div>CHOOSE COMPUTER</div>
                            <div class="secondHeader">Computer specially equipped for different users</div> 
                        </div>
                        <div>
                            <div id="triangle3" onclick="showWorkStation()"></div>
                        </div>
                    </div>
                    <div id="workStationDropdown">
                        <div class="rectangle1">
                            <input type="radio" id="workstationtype" name="fav_language" value="workstationtype">
                            <label for="workstationtype">
                                <div class="firstfont">ADULT<br></div>
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
</template>

<script>
let i=0


async function getAllDistrict () {
let res =await fetch(`http://192.168.50.117:3000/cfm_getDistrict`);
let districtList = await res.json();
return districtList
 }



async function getAllLibraries () {
    let res = await fetch(`http://192.168.50.117:3000/cfm_getAllLibrary`);
    let allLibrariesList = await res.json();
    return allLibrariesList;
}

export default {
  name: 'LibraryPageView',
  data(){
    return {
        districtList:null,
        allLibrariesList: null,
        libraryResult:null
    }
  },
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
        async showDistrictLibraries(districtId,districtname) {
            this.libraryResult = this.allLibrariesList.filter(library => library.DistrictId == districtId);
            this.districtname=districtname
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
    }
}


// async function getAllDistrict() {
//     let res = await fetch(`http://192.168.50.117:3000/cfm_getDistrict`);
//     let districtList = await res.json();
//     let dropDownList = document.querySelector("#districtDropdown");
//     dropDownList.innerHTML=""
//     for (let district of districtList){
//         let  node = document.createElement('a');
//         node.id = "district" + district.id; 
//         let  textnode=document.createTextNode(`${district.Name}`)
//         node.appendChild(textnode)
//         dropDownList.appendChild(node)
//         document.getElementById("district" + district.id).onclick = function () { 
//             showDistrictLibraries(district.id);
//         }
//     }
// }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
