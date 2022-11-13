<template>
  <div ref="contentDesktop">
    <b-container
      class="bv-example-row"
      id="remark"
      ref="remark"
      fluid
      style="display: block"
    >
      <b-row>
        <b-col cols="12">
          <div class="bookingConfirmationWarning">
            *You need to claim your booking within <em>10 minutes</em> before to
            starts or within <em>50 minutes</em> after it begins
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="bv-example-row" id="containerBookingConfirmation" fluid>
      <b-row class="bookingConfirmationRow">
        <b-col cols="9" class="bookingConfirmationCol">
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">
                  BOOKING REFERENCE ID
                </div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div
                  class="bookingConfirmationFieldValue"
                  ref="sessionBookingReferenceId"
                >
                  PLB202200{{ i }}
                </div>
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
                <div class="bookingConfirmationFieldValue">
                  {{ this.$store.state.selectedDistrict.Name }}
                </div>
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
                <div class="bookingConfirmationFieldValue">
                  {{ this.$store.state.selectedLibrary.name }}
                </div>
              </div>
            </li>
          </ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">
                  WORKSTATION GROUP
                </div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue" v-if="this.$store.state.selectedWorkstationGroup">
                  {{ this.$store.state.selectedWorkstationGroup.Name }}
                </div>
              </div>
            </li>
          </ul>
          <ul></ul>
          <ul>
            <li>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldTitle">DATE OF USE</div>
                <div class="bookingConfirmationFieldColon">:</div>
              </div>
              <div class="bookingConfirmationGrid">
                <div class="bookingConfirmationFieldValue">
                  {{ this.$store.state.selectedDate.Name
                  }}{{ this.$store.state.selectedDate.Date }}
                </div>
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
                <div class="bookingConfirmationFieldValue" v-if="this.$store.state.selectedTime.length==2">
                  {{
                    this.$store.state.selectedSession +
                    " Hour : " +
                   this.$store.state.selectedTime[0].name+ "&&"+
                    this.$store.state.selectedTime[1].name
                  }}
                </div>
                 <div class="bookingConfirmationFieldValue" v-if="this.$store.state.selectedTime.length==1">
                  {{
                    this.$store.state.selectedSession +
                    " Hour : " +
                   this.$store.state.selectedTime[0].name 
                   
                  }}
                </div>
              </div>
            </li>
          </ul>
        </b-col>

        <b-col cols="3">
          <ul>
            <li>
              <img
                :src="
                  require(`@/CFM/20220805/bf9aee22-2eb5-439e-bca4-5e47f4e9d11c.png`)
                "
                id="bookingConfirmationImage"
              />
            </li>
            <li>
              <div>&nbsp;</div>
            </li>
            <li>
              <div class="bookingConfirmationButtons">
                <button id="bookingConfirmationPrint" @click="printPage()">
                  <font-awesome-icon
                    icon="fa-solid fa-print"
                  />&nbsp;&nbsp;Print
                </button>
              </div>
              <div class="bookingConfirmationButtons">
                <button id="bookingConfirmationSave" @click="savePage()">
                  <font-awesome-icon
                    icon="fa-regular fa-folder"
                  />&nbsp;&nbsp;Save
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
import { mixins } from "@/common/mixins";

export default {
  name: "BookingConfirmationSession1Table",
  data() {
    return {
      i: 1,
    };
  },
  props: [],
  mixins: [mixins],
  methods: {
    printPage() {
      alert("You have Printed your booking");
    },
    savePage() {
      alert("You have saved your booking");
      this.i = this.i + 1;
    },
  },
};
</script>

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
  border: 1px solid #bbbbbb;
  width: 90%;
}

.bookingConfirmationCol > ul {
  border-bottom: 1px dotted #bbbbbb;
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
  color: #096bcc;
  width: 194px;
}

.bookingConfirmationFieldColon {
  color: #096bcc;
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
  background-image: linear-gradient(#e0ffe5, #b8ecc1);
  border: none;
  border-radius: 8px;
  width: 25%;
  height: 11%;
  min-width: 100px;
  min-height: 42px;
}

#bookingConfirmationSave {
  background-image: linear-gradient(#fef1e0, #ebd6ba);
  border: none;
  border-radius: 8px;
  width: 25%;
  height: 11%;
  min-width: 100px;
  min-height: 42px;
}
</style>