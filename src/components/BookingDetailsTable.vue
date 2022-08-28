<template>
  <div v-if="this.defaultWorkstation">
    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 1 : {{ this.$store.state.selectedSession1Time }}</div>

    <b-button v-b-toggle.info-details1 class="bookingDetailsItem" style="">
      <b-row align-v="center">
        <b-col cols="10">
          <div class="bookingDetailsInfoLeft">
            <img src="../assets/img/wg-img.png" class="bookingDetailsImage">
          </div>

          <div class="bookingDetailsInfoCenter">
            <ul>
              <li class="bookingDetailsFieldTitle">WORKSTATION GROUP :</li>
              <li class="bookingDetailsFieldValue">{{ this.$store.state.selectedSession1Group.floorNum + ' ' + this.$store.state.selectedSession1Group.groupName }}</li>
              <li class="bookingDetailsFieldTitle">WORKSTATION NO. :</li>
              <li class="bookingDetailsFieldValue">{{ this.defaultWorkstation.session1DefaultWktNo }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="../assets/img/click-icon.png" class="bookingDetailsIcon" />
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
          <b-col cols="9">
            <div>
              <table v-if="this.defaultWorkstation" style="width: 100%">
                <tbody>
                  <tr v-for="(row, rowNum) in workstationArray1" :key="rowNum" v-bind:id="'session1Row' + rowNum" style="height: 25px;">
                    <td v-for="(grid, colNum) in row" :key="colNum" v-bind:id="'session1Row' + rowNum + 'Col' + colNum"
                      align="center" :class="'status' + grid.status" :style="{ 'width': (100 / row.length) + '%' }" @click="markSelected(1, colNum, rowNum)">{{ grid.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

            <img src="CFM/20220701/0e49762f-0eac-4832-9a52-bb75099fcd30.png" />

            <div align="right">
              <button class="bookingDetailsSelect">Select</button>
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
              <li>{{ this.$store.state.selectedSession1Group.floorNum + ' ' + this.$store.state.selectedSession1Group.groupName }}</li>
              <li>Workstation no. :</li>
              <li>{{ this.$store.state.selectedSession1Workstation }}</li>
            </ol>
          </li>
          <li><b-button v-b-toggle.toggle-item></b-button></li>
        </ul>
      </b-card>-->
    </b-collapse>

    <div style="padding: 10px;"></div>

    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 2 : {{ this.$store.state.selectedSession2Time }}</div>

    <b-button v-b-toggle.info-details2 class="bookingDetailsItem" style="">
      <b-row align-v="center">
        <b-col cols="10">
          <div class="bookingDetailsInfoLeft">
            <img src="../assets/img/wg-img.png" class="bookingDetailsImage">
          </div>

          <div class="bookingDetailsInfoCenter">
            <ul>
              <li class="bookingDetailsFieldTitle">WORKSTATION GROUP :</li>
              <li class="bookingDetailsFieldValue">{{ this.$store.state.selectedSession2Group.floorNum + ' ' + this.$store.state.selectedSession2Group.groupName }}</li>
              <li class="bookingDetailsFieldTitle">WORKSTATION NO. :</li>
              <li class="bookingDetailsFieldValue">{{ this.defaultWorkstation.session2DefaultWktNo }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="../assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>FLOOR PLAN</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse id="info-details2" class="info-details">
      <b-card>
        <b-row align-v="center">
          <b-col cols="9">
            <div>
              <table v-if="this.defaultWorkstation" style="width: 100%">
                <tbody>
                  <tr v-for="(row, rowNum) in workstationArray2" :key="rowNum" v-bind:id="'session2Row' + rowNum" style="height: 25px;">
                    <td v-for="(grid, colNum) in row" :key="colNum" v-bind:id="'session2Row' + rowNum + 'Col' + colNum"
                      align="center" :class="'status' + grid.status" :style="{ 'width': (100 / row.length) + '%' }" @click="markSelected(2, colNum, rowNum)">{{ grid.name }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
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

            <img src="CFM/20220701/0e49762f-0eac-4832-9a52-bb75099fcd30.png" />

            <div align="right">
              <button class="bookingDetailsSelect">Select</button>
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
  import { queryDefaultWorkstation, queryWorkstationList, confirm } from '@/service/test.js'

  export default {
    name: 'BookingDetailsTable',
    data() {
      return {
        advancedBookingDate: "27 August 2022",
        featureIds: [],
        languageId: 10,
        libraryId: 42,
        session1GroupId: 71,
        session2GroupId: 71,
        typeId: 11,

        bookingSource: 1,
        hour: 1,
        libraryCardNumber: "123456",
        session1WorkstationId: 71,
        session2WorkstationId: 71,

        defaultWorkstation: null,
        workstationList: null,
        confirm: null,

        numRows: null,
        numCols: null,
        workstationArray1: [],
        workstationArray2: [],

        selectedX1: null,
        selectedY1: null,
        selectedX2: null,
        selectedY2: null
      }
    },
    methods: {
      markSelected(session, x, y) {
        if (session == 1) {
          if (typeof this.selectedX1 !== 'undefined' && this.selectedX1 !== null && typeof this.selectedY1 !== 'undefined' && this.selectedY1 !== null) {
            document.getElementById('session1Row' + this.selectedY1 + 'Col' + this.selectedX1).classList.remove("selectedGrid");
          }
          document.getElementById('session1Row' + y + 'Col' + x).classList.add("selectedGrid");
          this.selectedX1 = x;
          this.selectedY1 = y;
        } else if (session == 2) {
          if (typeof this.selectedX2 !== 'undefined' && this.selectedX2 !== null && typeof this.selectedY2 !== 'undefined' && this.selectedY2 !== null) {
            document.getElementById('session2Row' + this.selectedY2 + 'Col' + this.selectedX2).classList.remove("selectedGrid");
          }
          document.getElementById('session2Row' + y + 'Col' + x).classList.add("selectedGrid");
          this.selectedX2 = x;
          this.selectedY2 = y;
        }
      }
    },
    async created() {
      this.defaultWorkstation = (await queryDefaultWorkstation(this.advancedBookingDate,
                                                               this.featureIds,
                                                               this.languageId,
                                                               this.libraryId,
                                                               this.session1GroupId,
                                                               this.$store.state.selectedSession1Time,
                                                               this.session2GroupId,
                                                               this.$store.state.selectedSession2Time,
                                                               this.typeId)
                                ).data.data;
      this.workstationList1 = (await queryWorkstationList(this.$store.state.selectedSession1Group.groupId, this.typeId, this.advancedBookingDate, this.$store.state.selectedSession1Time)).data.data;
      this.workstationList2 = (await queryWorkstationList(this.$store.state.selectedSession2Group.groupId, this.typeId, this.advancedBookingDate, this.$store.state.selectedSession2Time)).data.data;

      for (let x = 0; x < this.defaultWorkstation.session1GroupMaxAbscissa; x++) {
        this.workstationArray1.push([ ]);
        for (let y = 0; y < this.defaultWorkstation.session1GroupMaxOrdinate; y++) {
          this.workstationArray1[x].push({ 'name': ' ', 'status': '0' });
        }
      }

      for (let x = 0; x < this.defaultWorkstation.session2GroupMaxAbscissa; x++) {
        this.workstationArray2.push([ ]);
        for (let y = 0; y < this.defaultWorkstation.session2GroupMaxOrdinate; y++) {
          this.workstationArray2[x].push({ 'name': ' ', 'status': '0' });
        }
      }

      for (let i = 0; i < this.workstationList1.length; i++) {
        this.workstationArray1[this.workstationList1[i].x][this.workstationList1[i].y].name = this.workstationList1[i].workstationId;
        this.workstationArray1[this.workstationList1[i].x][this.workstationList1[i].y].status = this.workstationList1[i].status;
      }

      for (let i = 0; i < this.workstationList2.length; i++) {
        this.workstationArray2[this.workstationList2[i].x][this.workstationList2[i].y].name = this.workstationList2[i].workstationId;
        this.workstationArray2[this.workstationList2[i].x][this.workstationList2[i].y].status = this.workstationList2[i].status;
      }
      
      this.confirm = (await confirm(this.advancedBookingDate,
                                    this.bookingSource,
                                    this.featureIds,
                                    this.hour,
                                    this.languageId,
                                    this.libraryCardNumber,
                                    this.libraryId,
                                    this.session1Time,
                                    this.session1WorkstationId,
                                    this.session2Time,
                                    this.session2WorkstationId,
                                    this.typeId)
                     ).data.data;
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
    position: relative;
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

.status2 {
  border: 1px solid black;
  background-color: #C6D9F1;
  color: #548DD4;
  cursor: pointer;
}

.status3 {
  border: 1px solid black;
  background-color: #548DD4;
  color: #C6D9F1;
  cursor: pointer;
}

.selectedGrid {
  border: 4px solid red;
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
