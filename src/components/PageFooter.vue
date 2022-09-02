<template>
  <div>
    <b-container fluid id="pageFooter">
      <b-row>
        <b-col cols="1" class="left-menu">
          <button id="pageFooterResetButton" v-if="isShowReset" @click="reset()">Reset&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
        </b-col>
        <b-col cols="1" class="left-menu">
          <router-link id="pageFooterBackLink" :to="this.prefix + this.listOfPages[this.currentPage - 1]">
            <button id="pageFooterBackButton">Back&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-reply" /></button>
          </router-link>
        </b-col>
        <b-col cols="8" class="left-menu" align-self="center">
          <div v-if="this.listOfPages.indexOf(this.$route.name) == 1" class="rightbutton">
            <input id="conditionOfUse" type="checkbox" class="checkedboxstyle" ref="cou" @change="readCOU()" v-model="checked">
            <div id="conditionAgree"> I agree to the&nbsp;</div>
            <div id="conditionPage" @click="jumpToTerm()">Condition of Use</div>
          </div>
        </b-col>
        <b-col cols="2" class="left-menu">
          <router-link class="btn disabled" id="pageFooterNextLink" ref="pageFooterNextLink" :to="'/workstationbooking/' + this.listOfPages[this.currentPage + 1]">
            <button id="pageFooterNextButton">{{ this.nextText }}&nbsp;&nbsp;<font-awesome-icon icon="fas fa-right-long"/></button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    name: 'PageFooter',
    data() {
      return {
        prefix: null,
        listOfPages: [ '', 'SelectLocation', 'DateTimeChoose', 'WorkstationGroup', 'BookingDetails', 'BookingConfirmation' ],
        currentPage: null,
        isShowReset: false,
        nextText: null
      }
    },
    props: [ 'pageFooterSection' ],
    methods: {
      checkComplete(page) {
        let isComplete = true;

        if (page == 'selectionLocationPage') {
          if (!this.$store.state.selectedDistrictId) {
            isComplete = false;
          }

          if (!this.$store.state.selectedLibraryId) {
            isComplete = false;
          }

          if (!this.$store.state.selectedWorkstationTypeId) {
            isComplete = false;
          }

          if (!this.$store.state.isReadTerm) {
            isComplete = false;
          }
        } else if (page == 'dateTimeChoosePage') {
          if (!this.$store.state.selectedDateOfUse) {
            isComplete = false;
          }

          if (!this.$store.state.selectedHour) {
            isComplete = false;
          }

          if (!this.$store.state.selectedSession1Time) {
            isComplete = false;
          }
        }
        
        if (isComplete) {
          this.$refs.pageFooterNextLink.$el.classList.remove('btn');
          this.$refs.pageFooterNextLink.$el.classList.remove('disabled');
        } else {
          this.$refs.pageFooterNextLink.$el.classList.add('btn');
          this.$refs.pageFooterNextLink.$el.classList.add('disabled');
        }
      },
      
      readCOU() {
        this.$store.commit("isReadTerm", this.$refs.cou.checked);
        this.checkComplete('selectionLocationPage');
      },

      reset() {
        if (this.listOfPages.indexOf(this.$route.name) == 2) {
          this.$emit('resetDateTimeChoosePage');
        } else if (this.listOfPages.indexOf(this.$route.name) == 3) {
          this.$emit('resetWorkstationGroupPage');
        }
      },

      jumpToTerm() {
        this.$router.push('/workstationbooking/TermPageH5');
      },
    },
    created() {
      this.prefix = this.listOfPages.indexOf(this.$route.name) != 1 ? '/workstationbooking/' : '/',
      this.currentPage = this.listOfPages.indexOf(this.$route.name);
      this.isShowReset = [ 2, 3 ].includes(this.currentPage);
      this.nextText = this.currentPage == 4 ? 'Confirm' : 'Next';
    },
    mounted() {
      this.$refs.cou.checked = this.$store.state.isReadTerm;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#pageFooter {
    width: 100%;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-top: 30px;
    position: fixed;
    bottom: 0px;
    z-index: 1;
}

#pageFooter button {
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    height: 4%;
    min-height: 44px;
}

#pageFooterResetButton {
    background-image: linear-gradient(#FEFEFE, #F2F2F2);
    color: #676767;
    width: 8%;
    min-width: 96px;
}

#pageFooterBackButton {
    background-image: linear-gradient(#FEFEFE, #F2F2F2);
    color: #676767;
    width: 8%;
    min-width: 96px;
}

#pageFooterNextButton {
    float: right;
    background-image: linear-gradient(#1B7BD4, #0164C1);
    color: white;
    width: 14.5%;
    min-width: 174px;
}

#pageFooter .btn {
    float: right;
    border: 0px !important;
    padding: 0px !important;
    width: 100%;
}

</style>
