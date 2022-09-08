<template>
  <div ref="contentDesktop">
    <b-container class="bv-example-row" id="remark" ref="remark" fluid style="display: none;">
      <b-row>
        <b-col cols="12">
          <div class="bookingConfirmationWarning">*You need to claim your booking within <em>10 minutes</em> before to starts or within <em>50 minutes</em> after it begins</div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row" id="containerBookingConfirmation" fluid>
      <b-row class="bookingConfirmationRow">
        <b-col cols="9" class="bookingConfirmationCol">
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">BOOKING REFERENCE ID</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue" ref="sessionBookingReferenceId">Loading...</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">DISTRICT</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ selectedDistrict }}</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">LIBRARY</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ selectedLibrary }}</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">WORKSTATION GROUP</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ floorNum + ' ' + groupName }}</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">CHOOSE COMPUTER</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div v-for="workstationFeature in selectedWorkstationFeature" :key="workstationFeature" class="bookingConfirmationFieldValue">
                  + {{ workstationFeature }}<br/>
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">DATE OF USE</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ selectedDateOfUse }}</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">TIME OF USE</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ selectedHour + ' Hour : ' + selectedSessionTime }}</div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">WORKSTATION NO.</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">{{ selectedSessionWorkstation }}</div>
              </div>
            </li>
          </ul>
        </b-col>

        <b-col cols="3">
          <ul>
            <li>
              <img :src="require(`@/CFM/20220805/bf9aee22-2eb5-439e-bca4-5e47f4e9d11c.png`)" id="bookingConfirmationImage" />
              <!--<img :src="require(`@/${this.sessionGroupImagePath}`)" id="bookingConfirmationImage" />-->
            </li>
            <li>
              <div>&nbsp;</div>
            </li>
            <li>
              <div class="bookingConfirmationButtons">
                <button id="bookingConfirmationPrint" @click="printPage()">
                  <font-awesome-icon icon="fa-solid fa-print" />&nbsp;&nbsp;Print
                </button>
              </div>
              <div class="bookingConfirmationButtons">
                <button id="bookingConfirmationSave" @click="savePage()">
                  <font-awesome-icon icon="fa-regular fa-folder" />&nbsp;&nbsp;Save
                </button>
              </div>
            </li>
          </ul>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { mixins } from '@/common/mixins'
  import html2pdf from 'html2pdf.js'

  export default {
    name: 'BookingConfirmationSession2Table',
    data() {
      return {
        referenceID: null,
        selectedDistrict: null,
        selectedLibrary: null,
        floorNum: null,
        groupName: null,
        selectedWorkstationFeature: null,
        selectedDateOfUse: null,
        selectedHour: null,
        selectedSessionTime: null,
        selectedSessionWorkstation: null,
        sessionGroupImagePath: null
      }
    },
    props: [ 'bookingConfirmtaionPage2' ],
    mixins: [mixins],
    methods: {
      fillReferenceID(referenceID, selectedDistrict, selectedLibrary, floorNum, groupName, selectedWorkstationFeature, selectedDateOfUse, selectedHour,
                      selectedSessionTime, selectedSessionWorkstation, sessionGroupImagePath) {
        this.$refs.sessionBookingReferenceId.innerText = referenceID;
        this.referenceID = referenceID;
        this.selectedDistrict = selectedDistrict;
        this.selectedLibrary = selectedLibrary;
        this.floorNum = floorNum;
        this.groupName = groupName;
        this.selectedWorkstationFeature = selectedWorkstationFeature;
        this.selectedDateOfUse = selectedDateOfUse;
        this.selectedHour = selectedHour;
        this.selectedSessionTime = selectedSessionTime;
        this.selectedSessionWorkstation = selectedSessionWorkstation;
        this.sessionGroupImagePath = sessionGroupImagePath;
      },

      printPage() {
        window.print();
      },

      savePage() {
        let rightNow = new Date();

        let element = this.$refs.contentDesktop;
        let clonedElement = element.cloneNode(true);
        clonedElement.childNodes[0].style.display = 'block';
        html2pdf(clonedElement, {
          margin: 1,
          filename: 'AdvancedBookingConfirmation_' +
                    ("0000" + rightNow.getFullYear()).slice(-4) +
                    ("00" + (rightNow.getMonth() + 1)).slice(-2) +
                    ("00" + rightNow.getDate()).slice(-2) + '_' + (this.referenceID ? this.referenceID : '') + '.pdf',
          image: { type: 'bmp', quality: 0.98 },
          html2canvas: { dpi: 192, letterRendering: true },
          jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
        });
        clonedElement.remove();
      },
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

#remark {
  width: 90%;
  padding: 10px;
}

.bookingConfirmationWarning {
    font-weight: bold;
}

.bookingConfirmationWarning > em {
    color: red;
}

#containerBookingConfirmation {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 33px;
    padding-right: 33px;
    border: 1px solid #BBBBBB;
    width: 90%;
}

.bookingConfirmationCol > ul {
    border-bottom: 1px dotted #BBBBBB;
}

.bookingConfirmationCol > ul > li div {
    display: inline-block;
    font-weight: bold;
    vertical-align: top;
}

.bookingConfirmationGrid {
    padding-bottom: 4px;
}

.bookingConfirmationFieldTitle {
    color: #096BCC;
    width: 194px;
}

.bookingConfirmationFieldColon {
    color: #096BCC;
    width: 24px;
}

#bookingConfirmationImage {
    width: 100%;
}

.bookingConfirmationButtons {
    display: inline-flex;
    justify-content: center;
    width: 50%;
}

#bookingConfirmationPrint {
    background-image: linear-gradient(#E0FFE5, #B8ECC1);
    border: none;
    border-radius: 8px;
    width: 25%;
    height: 11%;
    min-width: 100px;
    min-height: 42px;
}

#bookingConfirmationSave {
    background-image: linear-gradient(#FEF1E0, #EBD6BA);
    border: none;
    border-radius: 8px;
    width: 25%;
    height: 11%;
    min-width: 100px;
    min-height: 42px;
}

</style>