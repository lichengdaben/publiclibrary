<template>
  <div>
    <b-container fluid id="pageFooter">
      <b-row>
        <b-col cols="1" class="left-menu">
          <button id="pageFooterResetButton" v-if="isShowReset">Reset&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
        </b-col>
        <b-col cols="1" class="left-menu">
          <router-link id="pageFooterBackLink" :to="'/workstationbooking/' + this.listOfPages[this.currentPage - 1]">
            <button id="pageFooterBackButton">Back&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-reply" /></button>
          </router-link>
        </b-col>
        <b-col cols="10" class="left-menu">
          <router-link class="btn disabled" id="pageFooterNextLink" :to="'/workstationbooking/' + this.listOfPages[this.currentPage + 1]">
            <button id="pageFooterNextButton">{{ this.nextText }}&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-circle-right" /></button>
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
        listOfPages: [ 'Home', 'SelectLocation', 'DateTimeChoose', 'WorkstationGroup', 'BookingDetails', 'BookingConfirmation' ],
        currentPage: null,
        isShowReset: false,
        nextText: null
      }
    },
    created() {
      this.currentPage = window.location.href.includes(this.listOfPages[0]) ? 0 :
                         window.location.href.includes(this.listOfPages[1]) ? 1 :
                         window.location.href.includes(this.listOfPages[2]) ? 2 :
                         window.location.href.includes(this.listOfPages[3]) ? 3 :
                         window.location.href.includes(this.listOfPages[4]) ? 4 :
                         window.location.href.includes(this.listOfPages[5]) ? 5 : -1;
      this.isShowReset = [ 2, 3 ].includes(this.currentPage);
      this.nextText = this.currentPage == 4 ? 'Confirm' : 'Next';
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
