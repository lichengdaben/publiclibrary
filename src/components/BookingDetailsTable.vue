<template>
  <div>
    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 1 : {{ this.$store.state.selectedSession1Time }}</div>

    <b-button v-b-toggle.info-details class="bookingDetailsItem" style="">
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
              <li class="bookingDetailsFieldValue">{{ this.$store.state.selectedSession1Workstation }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="../assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>N , SELECT WORKSTATION</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse id="info-details" class="info-details">
      <b-card>
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
      </b-card>
    </b-collapse>

    <div style="padding: 10px;"></div>

    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 2 : {{ this.$store.state.selectedSession2Time }}</div>

    <b-button v-b-toggle.info-details class="bookingDetailsItem" style="">
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
              <li class="bookingDetailsFieldValue">{{ this.$store.state.selectedSession2Workstation }}</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="../assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>N , SELECT WORKSTATION</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse id="info-details" class="info-details">
      <b-card>
        <ul>
          <li></li>
          <li>
            <ol>
              <li>Workstation Group :</li>
              <li>{{ this.$store.state.selectedSession2Group.floorNum + ' ' + this.$store.state.selectedSession2Group.groupName }}</li>
              <li>Workstation no. :</li>
              <li>{{ this.$store.state.selectedSession2Workstation }}</li>
            </ol>
          </li>
          <li><b-button v-b-toggle.toggle-item></b-button></li>
        </ul>
      </b-card>
    </b-collapse>

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

        groupId: 68,

        bookingSource: 1,
        hour: 1,
        libraryCardNumber: "123456",
        session1WorkstationId: 71,
        session2WorkstationId: 71,

        defaultWorkstation: null,
        workstationList: null,
        confirm: null
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

      this.workstationList = (await queryWorkstationList(this.groupId, this.typeId, this.advancedBookingDate, this.$store.state.selectedSession1Time)).data.data;
      
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

#info-details {
    width: 100%;
    position: relative;
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
</style>
