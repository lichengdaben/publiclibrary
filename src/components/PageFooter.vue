<template>
  <div>
    <b-container fluid id="pageFooter" style="background-color: white; margin: 0px;">
      <b-row>
        <b-col cols="1" class="left-menu">
          <button id="pageFooterResetButton" v-if="isShowReset" @click="reset()">Reset&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
        </b-col>
        <b-col cols="1" class="left-menu">
          <button id="pageFooterBackButton" @click="moveToPreviousPage()">Back&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-reply" /></button>
        </b-col>
        <b-col cols="8" class="left-menu" align-self="center">
          <div v-if="this.listOfPages.indexOf(this.$route.name) == 1" class="rightbutton">
            <input id="conditionOfUse" type="checkbox" class="checkedboxstyle" ref="cou" @change="readCOU()" v-model="checked">
            <div id="conditionAgree">I agree to the&nbsp;</div>
            <div id="conditionPage" @click="jumpToTerm()">Condition of Use</div>
          </div>
        </b-col>
        <b-col cols="2" class="left-menu">
          <button id="pageFooterNextButton" ref="pageFooterNextButton" :disabled="true" @click="moveToNextPage()">{{ this.nextText }}&nbsp;&nbsp;<font-awesome-icon icon="fas fa-right-long"/></button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { queryGroup } from '@/service/test.js'

  export default {
    name: 'PageFooter',
    data() {
      return {
        prefix: null,
        listOfPages: [ '', 'SelectLocation', 'DateTimeChoose', 'WorkstationGroup', 'BookingDetails', 'BookingConfirmation' ],
        currentPage: null,
        isShowReset: false,
        nextPage: null,
        nextText: null,
        isDisabled: null
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
        } else if (page == 'workstationGroupPage') {
          if (!this.$store.state.selectedSession1Group) {
            if (this.$store.state.listGroup.session1Group) {
              isComplete = false;
            }
          }

          if (!this.$store.state.selectedSession2Group) {
            if (this.$store.state.listGroup.session2Group) {
              isComplete = false;
            }
          }
        } else if (page == 'bookingDetailsPage') {
          isComplete = true;
        }
        
        this.$refs.pageFooterNextButton.disabled = !isComplete;
      },
      
      readCOU() {
        this.$store.commit("isReadTerm", this.$refs.cou.checked);
        this.checkComplete('selectionLocationPage');
      },

      async isSkipWorkstationGroup(currentPage) {
        let listGroup;

        if (!this.$store.state.listGroup) {
          listGroup = (await queryGroup(this.$store.state.selectedDateOfUse,
                                        this.$store.state.selectedWorkstationFeatureId,
                                        this.$store.state.selectedWorkstationLanguageId,
                                        this.$store.state.selectedLibraryId,
                                        this.$store.state.selectedSession1Time,
                                        this.$store.state.selectedSession2Time,
                                        this.$store.state.selectedWorkstationTypeId,
                                        this.walkInBookingChooseTimeVO)  
                          ).data.data;
          this.$store.commit('listGroup', listGroup);
        } else {
          listGroup = this.$store.state.listGroup;
        }

        let redirectPage = null;

        // 檢查時段 1 是不是只有一個工作組 / 沒有工作組
        if (listGroup.session1Group) {
          if (listGroup.session1Group.length == 0) {
            alert('Session ' + this.$store.state.selectedSession1Time + ' is already full.');
          } else if (listGroup.session1Group.length == 1) {
            this.$store.commit('selectedSession1Group', listGroup.session1Group[0]);
          }
        } else {
          throw "時段 1 錯誤";
        }
        
        // 檢查時段 2 是不是只有一個工作組 / 沒有工作組
        if (this.$store.state.selectedHour == 1) {
          if (listGroup.session2Group) {
            if (listGroup.session2Group.length == 0) {
              alert('Session ' + this.$store.state.selectedSession2Time + ' is already full.');
            } else if (listGroup.session2Group.length == 1) {
              this.$store.commit('selectedSession2Group', listGroup.session2Group[0]);
            }
          }
        }

        if (listGroup.session1Group) {
          if (listGroup.session1Group.length == 0) {
            redirectPage = currentPage;
          } else if (listGroup.session1Group.length == 1) {
            if (listGroup.session2Group) {
              redirectPage = (listGroup.session2Group.length == 0 ? currentPage :
                              listGroup.session2Group.length == 1 ? (currentPage == 2 ? 4 : 2) :
                              3);
            } else {
              redirectPage = (currentPage == 2 ? 4 : 2);
            }
          } else {
            if (listGroup.session2Group) {
              redirectPage = (listGroup.session2Group.length == 0 ? currentPage : 3);
            } else {
              redirectPage = 3;
            }
          }
        } else {
          redirectPage = currentPage;
        }

        return Promise.resolve(redirectPage);
      },

      moveToPreviousPage() {
        if (this.listOfPages.indexOf(this.$route.name) == 4) {
          this.isSkipWorkstationGroup(4).then(redirectPage => {
            if (redirectPage) {
              this.$router.push(this.listOfPages[redirectPage]);
            }
          });
        } else {
          this.$router.push(this.listOfPages[this.currentPage - 1]);
        }
      },

      moveToNextPage() {
        if (this.listOfPages.indexOf(this.$route.name) == 2) {
          this.isSkipWorkstationGroup(2).then(redirectPage => {
            if (redirectPage) {
              this.$router.push(this.listOfPages[redirectPage]);
            }
          });
        } else {
          this.$router.push(this.listOfPages[this.currentPage + 1]);
        }
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
      switch (this.listOfPages.indexOf(this.$route.name)) {
        case 1:
          this.$refs.cou.checked = this.$store.state.isReadTerm;
          this.checkComplete('selectionLocationPage');
          break;
        case 2:
          this.checkComplete('dateTimeChoosePage');
          break;
        case 3:
          this.checkComplete('workstationGroupPage');
          break;
        case 4:
          this.checkComplete('bookingDetailsPage');
          break;
      }
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

#pageFooterNextButton:disabled {
    float: right;
    background-image: linear-gradient(#6BAAE3, #5B9BD7);
    color: white;
    width: 14.5%;
    min-width: 174px;
}

#pageFooter .btn{
  float: right;
  border: 0px !important;
  padding: 0px !important;
  width: 100%;
}

</style>
