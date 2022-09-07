<template>
  <div v-if="this.defaultWorkstation" v-scroll="handleScroll">
    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 1 : {{ this.$store.state.selectedSession1Time }}</div>

    <b-button v-b-toggle.info-details1 class="bookingDetailsItem" style="">
      <b-row align-v="center">
        <b-col cols="10">
          <div class="bookingDetailsInfoLeft">
            <img :src="require(`@/CFM/20220805/bf9aee22-2eb5-439e-bca4-5e47f4e9d11c.png`)" class="bookingDetailsImage" />
            <!--<img :src="require(`@/${this.defaultWorkstation.session1GroupImagePath}`)" class="bookingDetailsImage" />-->
          </div>

          <div class="bookingDetailsInfoCenter">
            <ul>
              <li class="bookingDetailsFieldTitle">WORKSTATION GROUP :</li>
              <li class="bookingDetailsFieldValue">{{ this.floorNum1 + ' ' + this.groupName1 }}</li>
              <li class="bookingDetailsFieldTitle">WORKSTATION NO. :</li>
              <li class="bookingDetailsFieldValue">{{ this.selectedWorkstation1 }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="@/assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>FLOOR PLAN</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse id="info-details1" class="info-details">
      <b-card>
        <b-row align-v="center">
          <b-col cols="9" align="center">
            <div v-if="!isEnlargeFloorPlan1">
              <table v-if="this.defaultWorkstation" style="width: 100%">
                <tbody>
                  <tr v-for="(row, rowNum) in workstationArray1" :key="rowNum" v-bind:id="'session1Row' + rowNum">
                    <td v-for="(grid, colNum) in row" :key="colNum" v-bind:id="'session1Row' + rowNum + 'Col' + colNum" :ref="'session1Row' + rowNum + 'Col' + colNum"
                      align="center" :class="'status' + grid.status" :style="{ 'width': (100 / row.length) + '%' }" @click="markHighlighted(1, colNum, rowNum, grid)">{{ grid.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img v-if="isEnlargeFloorPlan1" :src="require(`@/CFM/20220825/4e251630-23fe-4022-b8bb-b841cacb3dbb.jpg`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan1 = false" />
            <!--<img v-if="isEnlargeFloorPlan1" :src="require(`@/${this.defaultWorkstation.session1FloorPlanImagePath}`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan1 = false" />-->
          </b-col>

          <b-col cols="3">
            <table v-if="this.defaultWorkstation">
              <tbody>
                <tr align="center">
                  <td id="paletteAssigned"></td>
                  <td style="width: 25px;"></td>
                  <td id="paletteAvailable"></td>
                  <td style="width: 25px;"></td>
                  <td id="paletteUnavailable"></td>
                </tr>
                <tr align="center">
                  <td class="paletteDescription">Assigned</td>
                  <td style="width: 25px;"></td>
                  <td class="paletteDescription">Available</td>
                  <td style="width: 25px;"></td>
                  <td class="paletteDescription">Unavailable</td>
                </tr>
              </tbody>
            </table>

            <img v-if="!isEnlargeFloorPlan1" :src="require(`@/CFM/20220825/4e251630-23fe-4022-b8bb-b841cacb3dbb.jpg`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan1 = true" />
            <!--<img v-if="!isEnlargeFloorPlan1" :src="require(`@/${this.defaultWorkstation.session1FloorPlanImagePath}`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan1 = true" />-->

            <div align="center">
              <button class="bookingDetailsSelect" @click="selectWorkstation(1)">Select</button>
            </div>
          </b-col>
        </b-row>
      </b-card>
      
      <!--<b-card>
        <ul>
          <li></li>
          <li>
            <ol>
              <li>Workstation Group :</li>
              <li>{{ this.floorNum + ' ' + this.$store.state.selectedSession1Group.groupName }}</li>
              <li>Workstation no. :</li>
              <li>{{ this.$store.state.selectedSession1Workstation }}</li>
            </ol>
          </li>
          <li><b-button v-b-toggle.toggle-item></b-button></li>
        </ul>
      </b-card>-->
    </b-collapse>

    <div v-if="this.$store.state.selectedSession2Time" style="padding: 10px;"></div>

    <div v-if="this.$store.state.selectedSession2Time" class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 2 : {{ this.$store.state.selectedSession2Time }}</div>

    <b-button v-if="this.$store.state.selectedSession2Time" v-b-toggle.info-details2 class="bookingDetailsItem" style="">
      <b-row align-v="center">
        <b-col cols="10">
          <div class="bookingDetailsInfoLeft">
            <img :src="require(`@/CFM/20220805/bf9aee22-2eb5-439e-bca4-5e47f4e9d11c.png`)" class="bookingDetailsImage" />
            <!--<img :src="require(`@/${this.defaultWorkstation.session2GroupImagePath}`)" class="bookingDetailsImage">-->
          </div>

          <div class="bookingDetailsInfoCenter">
            <ul>
              <li class="bookingDetailsFieldTitle">WORKSTATION GROUP :</li>
              <li class="bookingDetailsFieldValue">{{ this.floorNum2 + ' ' + this.groupName2 }}</li>
              <li class="bookingDetailsFieldTitle">WORKSTATION NO. :</li>
              <li class="bookingDetailsFieldValue">{{ this.selectedWorkstation2 }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="@/assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>FLOOR PLAN</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse v-if="this.$store.state.selectedSession2Time" id="info-details2" class="info-details">
      <b-card>
        <b-row align-v="center">
          <b-col cols="9" align="center">
            <div v-if="!isEnlargeFloorPlan2">
              <table v-if="this.defaultWorkstation" style="width: 100%">
                <tbody>
                  <tr v-for="(row, rowNum) in workstationArray2" :key="rowNum" v-bind:id="'session2Row' + rowNum">
                    <td v-for="(grid, colNum) in row" :key="colNum" v-bind:id="'session2Row' + rowNum + 'Col' + colNum" :ref="'session2Row' + rowNum + 'Col' + colNum"
                      align="center" :class="'status' + grid.status" :style="{ 'width': (100 / row.length) + '%' }" @click="markHighlighted(2, colNum, rowNum, grid)">{{ grid.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <img v-if="isEnlargeFloorPlan2" :src="require(`@/CFM/20220825/4e251630-23fe-4022-b8bb-b841cacb3dbb.jpg`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan2 = false" />
            <!--<img v-if="isEnlargeFloorPlan2" :src="require(`@/${this.defaultWorkstation.session2FloorPlanImagePath}`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan2 = false" />-->
          </b-col>
          
          <b-col cols="3">
            <table v-if="this.defaultWorkstation">
              <tbody>
                <tr align="center">
                  <td id="paletteAssigned"></td>
                  <td style="width: 25px;"></td>
                  <td id="paletteAvailable"></td>
                  <td style="width: 25px;"></td>
                  <td id="paletteUnavailable"></td>
                </tr>
                <tr align="center">
                  <td class="paletteDescription">Assigned</td>
                  <td style="width: 25px;"></td>
                  <td class="paletteDescription">Available</td>
                  <td style="width: 25px;"></td>
                  <td class="paletteDescription">Unavailable</td>
                </tr>
              </tbody>
            </table>

            <img v-if="!isEnlargeFloorPlan2" :src="require(`@/CFM/20220825/4e251630-23fe-4022-b8bb-b841cacb3dbb.jpg`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan2 = true" />
            <!--<img v-if="!isEnlargeFloorPlan2" :src="require(`@/${this.defaultWorkstation.session2FloorPlanImagePath}`)" style="max-width:100%; max-height:100%;" @click="isEnlargeFloorPlan2 = true" />-->

            <div align="center">
              <button class="bookingDetailsSelect" @click="selectWorkstation(2)">Select</button>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </b-collapse>

    <div style="padding: 84px;"></div>

    <!--<vue-good-table :columns="columns" :rows="rows" :options="options" >
    </vue-good-table>-->
  </div>
</template>

<script>
  import { queryDefaultWorkstation, queryWorkstationList } from '@/service/test.js'

  export default {
    name: 'BookingDetailsTable',
    data() {
      return {
        bookingSource: 1,
        libraryCardNumber: "123456",

        isEnlargeFloorPlan1: false,
        isEnlargeFloorPlan2: false,

        defaultWorkstation: null,
        workstationList: null,

        floorNum1: null,
        floorNum2: null,
        groupName1: null,
        groupName2: null,

        numRows: null,
        numCols: null,
        workstationArray1: [],
        workstationArray2: [],

        originalSelectedX1: null,
        originalSelectedY1: null,
        originalSelectedX2: null,
        originalSelectedY2: null,

        newSelectedX1: null,
        newSelectedY1: null,
        newSelectedX2: null,
        newSelectedY2: null,

        selectedWorkstation1: null,
        selectedWorkstation2: null,
        highlightedName1: null,
        highlightedName2: null
      }
    },
    methods: {
      markHighlighted(session, x, y, workstation) {
        if (workstation.status != 1 && workstation.status != 2) {
          return;
        }

        if (session == 1) {
          if (typeof this.newSelectedX1 !== 'undefined' && this.newSelectedX1 !== null && typeof this.newSelectedY1 !== 'undefined' && this.newSelectedY1 !== null) {
            this.$refs['session1Row' + this.newSelectedY1 + 'Col' + this.newSelectedX1][0].classList.remove("selectedGrid");
          }
          this.$refs['session1Row' + y + 'Col' + x][0].classList.add("selectedGrid");

          this.newSelectedX1 = x;
          this.newSelectedY1 = y;
          this.highlightedName1 = workstation.name;
        } else if (session == 2) {
          if (typeof this.newSelectedX2 !== 'undefined' && this.newSelectedX2 !== null && typeof this.newSelectedY2 !== 'undefined' && this.newSelectedY2 !== null) {
            this.$refs['session2Row' + this.newSelectedY2 + 'Col' + this.newSelectedX2][0].classList.remove("selectedGrid");
          }
          this.$refs['session2Row' + y + 'Col' + x][0].classList.add("selectedGrid");

          this.newSelectedX2 = x;
          this.newSelectedY2 = y;
          this.highlightedName2 = workstation.name;
        }
      },

      selectWorkstation(session) {
        if (session == 1) {
          this.$store.commit('selectedSession1Workstation', this.highlightedName1);
          this.$store.commit('selectedSession1WorkstationId', this.highlightedName1);

          this.selectedWorkstation1 = this.highlightedName1;
          this.workstationArray1[this.oldSelectedY1][this.oldSelectedX1].status = 2;
          this.workstationArray1[this.newSelectedY1][this.newSelectedX1].status = 1;
          this.oldSelectedX1 = this.newSelectedX1;
          this.oldSelectedY1 = this.newSelectedY1;
        } else if (session == 2) {
          this.$store.commit('selectedSession2Workstation', this.highlightedName2);
          this.$store.commit('selectedSession2WorkstationId', this.highlightedName2);

          this.selectedWorkstation2 = this.highlightedName2;
          this.workstationArray2[this.oldSelectedY2][this.oldSelectedX2].status = 2;
          this.workstationArray2[this.newSelectedY2][this.newSelectedX2].status = 1;
          this.oldSelectedX2 = this.newSelectedX2;
          this.oldSelectedY2 = this.newSelectedY2;
        }
      }
    },
    async created() {
      let groupId1, groupId2;

      if (this.$store.state.selectedSession1Group) {
        groupId1 = this.$store.state.selectedSession1Group.groupId;
        this.floorNum1 = this.$store.state.selectedSession1Group.floorNum;
        this.groupName1 = this.$store.state.selectedSession1Group.groupName;
      }

      if (this.$store.state.selectedSession2Group) {
        groupId2 = this.$store.state.selectedSession2Group.groupId;
        this.floorNum2 = this.$store.state.selectedSession2Group.floorNum;
        this.groupName2 = this.$store.state.selectedSession2Group.groupName;
      }
      console.log('selectedDateOfUse: ' + this.$store.state.selectedDateOfUse);
      console.log('selectedWorkstationFeatureId: ' + this.$store.state.selectedWorkstationFeatureId);
      console.log('selecteselectedWorkstationLanguageIdDateOfUse: ' + this.$store.state.selectedWorkstationLanguageId,);
      console.log('selectedLibraryId: ' + this.$store.state.selectedLibraryId);
      console.log('groupId1: ' + groupId1);
      console.log('selectedSession1Time: ' + this.$store.state.selectedSession1Time);
      console.log('groupId2: ' + groupId2);
      console.log('selectedSession2Time: ' + this.$store.state.selectedSession2Time);
      console.log('selectedWorkstationTypeId: ' + this.$store.state.selectedWorkstationTypeId);
      console.log('defaultWorkstation: ' + this.$store.state.defaultWorkstation);
      if (!this.$store.state.defaultWorkstation) {
        this.defaultWorkstation = (await queryDefaultWorkstation(this.$store.state.selectedDateOfUse,
                                                                 this.$store.state.selectedWorkstationFeatureId,
                                                                 this.$store.state.selectedWorkstationLanguageId,
                                                                 this.$store.state.selectedLibraryId,
                                                                 groupId1,
                                                                 this.$store.state.selectedSession1Time,
                                                                 groupId2,
                                                                 this.$store.state.selectedSession2Time,
                                                                 this.$store.state.selectedWorkstationTypeId)
                                  ).data.data;
        
        this.$store.commit('defaultWorkstation', this.defaultWorkstation); // 臨時代碼
      } else {
        this.defaultWorkstation = this.$store.state.defaultWorkstation;
      }
      
      if (!this.$store.state.selectedSession1WorkstationId) {
        this.selectedWorkstation1 = this.defaultWorkstation.session1DefaultWktId;
        this.$store.commit('selectedSession1Workstation', this.selectedWorkstation1); // 臨時代碼
        this.$store.commit('selectedSession1WorkstationId', this.selectedWorkstation1);
      } else {
        this.selectedWorkstation1 = this.$store.state.selectedSession1WorkstationId;
      }

      if (!this.$store.state.selectedSession2WorkstationId) {
        this.selectedWorkstation2 = this.defaultWorkstation.session2DefaultWktId;
        this.$store.commit('selectedSession2Workstation', this.selectedWorkstation2); // 臨時代碼
        this.$store.commit('selectedSession2WorkstationId', this.selectedWorkstation2);
      } else {
        this.selectedWorkstation2 = this.$store.state.selectedSession2WorkstationId;
      }

      if (!this.$store.state.selectedSession1WorkstationGrid) {
        this.workstationList1 = (await queryWorkstationList(groupId1,
                                                            this.$store.state.selectedWorkstationTypeId,
                                                            this.$store.state.selectedDateOfUse,
                                                            this.$store.state.selectedSession1Time)).data.data;

        this.$store.commit('selectedSession1WorkstationGrid', this.workstationList1);
      } else {
        this.workstationList1 = this.$store.state.selectedSession1WorkstationGrid;
      }

      if (!this.$store.state.selectedSession2WorkstationGrid) {
        this.workstationList2 = (await queryWorkstationList(groupId2,
                                                            this.$store.state.selectedWorkstationTypeIdd,
                                                            this.$store.state.selectedDateOfUse,
                                                            this.$store.state.selectedSession2Time)).data.data;

        this.$store.commit('selectedSession2WorkstationGrid', this.workstationList2);
      } else {
        this.workstationList2 = this.$store.state.selectedSession2WorkstationGrid;
      }

      // 產生表格陣列
      if (this.defaultWorkstation.session1GroupMaxAbscissa) {
        for (let x = 0; x < this.defaultWorkstation.session1GroupMaxAbscissa; x++) {
          this.workstationArray1.push([]);

          if (this.defaultWorkstation.session1GroupMaxOrdinate) {
            for (let y = 0; y < this.defaultWorkstation.session1GroupMaxOrdinate; y++) {
              this.workstationArray1[x].push({ 'name': ' ', 'status': '0' });
            }
          }
        }
      }
      
      if (this.defaultWorkstation.session2GroupMaxAbscissa) {
        for (let x = 0; x < this.defaultWorkstation.session2GroupMaxAbscissa; x++) {
          this.workstationArray2.push([]);

          if (this.defaultWorkstation.session2GroupMaxOrdinate) {
            for (let y = 0; y < this.defaultWorkstation.session2GroupMaxOrdinate; y++) {
              this.workstationArray2[x].push({ 'name': ' ', 'status': '0' });
            }
          }
        }
      }

      // 在表格陣列填上數值
      if (this.workstationList1) {
        for (let i = 0; i < this.workstationList1.length; i++) {
          let grid = null;

          try {
            grid = this.workstationArray1[this.workstationList1[i].y][this.workstationList1[i].x];
          } catch {
            console.error('無效的數據');
            continue;
          }

          grid.name = this.workstationList1[i].workstationId;
          grid.status = (this.workstationList1[i].workstationId != this.selectedWorkstation1 ? this.workstationList1[i].status : 1);

          if (this.workstationList1[i].workstationId == this.selectedWorkstation1) {
            this.highlightedName1 = this.workstationList1[i].workstationId;
            this.oldSelectedX1 = this.workstationList1[i].x;
            this.oldSelectedY1 = this.workstationList1[i].y;
            this.newSelectedX1 = this.workstationList1[i].x;
            this.newSelectedY1 = this.workstationList1[i].y;
          }
        }
      }
      
      if (this.workstationList2) {
        for (let i = 0; i < this.workstationList2.length; i++) {
          let grid = null;

          try {
            grid = this.workstationArray2[this.workstationList2[i].y][this.workstationList2[i].x];
          } catch {
            console.error('無效的數據');
            continue;
          }

          grid.name = this.workstationList2[i].workstationId;
          grid.status = (this.workstationList2[i].workstationId != this.selectedWorkstation2 ? this.workstationList2[i].status : 1);

          if (this.workstationList2[i].workstationId == this.selectedWorkstation2) {
            this.highlightedName2 = this.workstationList2[i].workstationId;
            this.oldSelectedX2 = this.workstationList2[i].x;
            this.oldSelectedY2 = this.workstationList2[i].y;
            this.newSelectedX2 = this.workstationList2[i].x;
            this.newSelectedY2 = this.workstationList2[i].y;
          }
        }
      }

      this.$emit('checkComplete', 'bookingDetailsPage');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ol,
ul,
dl {
    margin-top: 0;
    margin-bottom: 0rem !important;
}

.btn{
    flex-direction: row !important;
    height: auto !important;
}

#bookingDetailsSessionTime {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
}

.bookingDetailsItem {
  width: 100% !important;
  padding: 10px;
  background: #FFFFFF !important;
  color: black !important;
  border: 1px solid #D1D1D1;
  opacity: 1;
  align-items: center;
}

#info-details1, #info-details2 {
  width: 100%;
}

#info-details1 tr, #info-details2 tr {
  height: 25px;
}

.info-details > div {
    background-color: #F0F0F0;
}

.bookingDetailsInfoLeft {
    position: relative;
    width: 40%;
    width: 200px;
    float: left;
    z-index: 1;
    display: inline;
}

.bookingDetailsInfoLeft .bookingDetailsImage {
    width: 100%;
    height: 100%;
    max-width: 100;
}

.bookingDetailsInfoCenter {
    margin-left: 30px;
    width: 70%;
    max-width: calc(70% - 100px);
    float: left;
    text-align: left;
    display: inline;
}

.bookingDetailsInfoCenter li {
    width: 100% !important;
    line-height: 1.5em;
    font-size: 1em;
}

.bookingDetailsInfoCenter li:nth-child(2) {
    border-bottom: 1px dotted #D1D1D1;
}

.bookingDetailsInfoCenter li:nth-child(3) {
    padding-top: 6px;
}

.bookingDetailsInfoCenter li:nth-child(odd) {
    color: #096BCC;
}

.bookingDetailsInfoCenter li:nth-child(even) {
    padding-bottom: 4px;
}

.bookingDetailsInfoRight {
    border-radius: 10px;
    border: 1px solid #D1D1D1;
    float: right;
    width: 90%;
    height: 90%;
    min-width: 120px;
    max-width: 120px;
    align-content: center;
    background-color: #ffffff;
    color: #096BCC;
    font-weight: bold;
    font-size: small;
    box-shadow: 0px 3px 6px #6897B133;
}

.bookingDetailsInfoRight .bookingDetailsInfoRightUpper {
    height: 80%;
    border-radius: 10px 10px 0px 0px;
    background-color: white;
}

.bookingDetailsInfoRight .bookingDetailsInfoRightLower {
    height: 20%;
    border-radius: 0px 0px 10px 10px;
    background-color: #F6F6F6;
}

.bookingDetailsInfoRight div {
    width: 100%;
}

.bookingDetailsFieldTitle {
    color: #096BCC;
    font-weight: bold;
}

.bookingDetailsFieldValue {
    font-weight: bold;
    display: inline-block;
}

.bookingDetailsIcon {
    width: 25%;
    height: auto;
    max-width: 75px;
    max-height: 75px;
    text-align: center;
}

.status0 {
  border: 1px solid black;
  background-color: white;
  color: white;
}

.status1 {
  border: 1px solid black;
  background-color: #548DD4;
  color: #C6D9F1;
  cursor: pointer;
}

.status2 {
  border: 1px solid black;
  background-color: #C6D9F1;
  color: #548DD4;
  cursor: pointer;
}

.status3 {
  border: 1px solid black;
  background-color: #CCCCCC;
  color: white;
}

.selectedGrid {
  background-clip: content-box; /* <---- */
  box-shadow: inset 0 0 0 3px red; /* <-- 10px spread radius */
}

#paletteAssigned {
  height: 25px;
  background-color: #548DD4;
}

#paletteAvailable {
  height: 25px;
  background-color: #C6D9F1;
}

#paletteUnavailable {
  height: 25px;
  background-color: #CCCCCC;
}

.paletteDescription {
  font-size: x-small;
  font-weight: bold;
}

.bookingDetailsSelect {
  border: 1px solid #D1D1D1;
  border-radius: 8px;
  height: 4%;
  min-height: 44px;
  background-image: linear-gradient(#1B7BD4, #0164C1);
  color: white;
  width: 14.5%;
  min-width: 174px;
}

</style>
