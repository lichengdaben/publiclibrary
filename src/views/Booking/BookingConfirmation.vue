<template>
    <div class="BookingConfirmation">
        <div v-if="isMobile()">
            
        </div>
        <div v-else style="overflow-y: auto; height: calc(100vh - 84px);">
            <MenuBar/>
            <NavBar/>
            
            <BookingConfirmationSession1Table ref="bookingConfirmtaionPage1" />
            <div style="padding: 10px;"></div>
            <BookingConfirmationSession2Table ref="bookingConfirmtaionPage2" />

            <b-container class="bv-example-row" id="containerBottom" fluid>
                <b-row id="containerBottomRow">
                    <b-col cols="3">
                    </b-col>
                    <b-col cols="3">
                        <router-link :to="'/workstationbooking/Home'">
                            <button id="bookingConfirmationOK">OK</button>
                        </router-link>
                    </b-col>
                    <b-col cols="3">
                        <router-link :to="'/workstationbooking/SelectLocation'">
                            <button id="bookingConfirmationAnotherBooking">Another Booking</button>
                        </router-link>
                    </b-col>
                    <b-col cols="3">
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import { mixins } from '@/common/mixins'
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import { confirmBooking } from '@/service/test.js'
    import BookingConfirmationSession1Table from '@/components/BookingConfirmationSession1Table.vue'
    import BookingConfirmationSession2Table from '@/components/BookingConfirmationSession2Table.vue'

    export default {
        name: 'WorkstationGroup',
        components: {
            MenuBar,
            NavBar,
            BookingConfirmationSession1Table,
            BookingConfirmationSession2Table
        },
        data() {
            return {
                bookingResult: null,
                selectedDistrict: this.$store.state.selectedDistrict,
                selectedLibrary: this.$store.state.selectedLibrary,
                floorNum: this.$store.state.selectedSession1Group ? this.$store.state.selectedSession1Group.floorNum : null,
                groupName: this.$store.state.selectedSession1Group ? this.$store.state.selectedSession1Group.groupName : null,
                selectedWorkstationFeature: this.$store.state.selectedWorkstationFeature,
                selectedDateOfUse: this.$store.state.selectedDateOfUse,
                selectedHour: this.$store.state.selectedHour,
                selectedSession1Time: this.$store.state.selectedSession1Time,
                selectedSession1Workstation: this.$store.state.selectedSession1Workstation,
                session1GroupImagePath: this.$store.state.defaultWorkstation ? this.$store.state.defaultWorkstation.session1GroupImagePath : null,
                selectedSession2Time: this.$store.state.selectedSession2Time,
                selectedSession2Workstation: this.$store.state.selectedSession2Workstation,
                session2GroupImagePath: this.$store.state.defaultWorkstation ? this.$store.state.defaultWorkstation.session2GroupImagePath : null,
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {
            async initializePage() {
                this.bookingResult = (await confirmBooking(this.$store.state.selectedDateOfUse,
                                                           1, // this.bookingSource,
                                                           this.$store.state.selectedWorkstationFeatureId,
                                                           this.$store.state.selectedHour,
                                                           this.$store.state.selectedWorkstationLanguageId,
                                                           '123456', // this.libraryCardNumber,
                                                           this.$store.state.selectedLibraryId,
                                                           this.$store.state.selectedSession1Time,
                                                           this.$store.state.selectedSession1Workstation,
                                                           this.$store.state.selectedSession2Time,
                                                           this.$store.state.session2WorkstationId,
                                                           this.$store.state.selectedSession1Workstation)
                                     ).data.data;

                this.$refs.bookingConfirmtaionPage1.fillReferenceID(this.bookingResult ? this.bookingResult.session1BookingReferenceId : null,
                                                                    this.selectedDistrict,
                                                                    this.selectedLibrary,
                                                                    this.floorNum,
                                                                    this.groupName,
                                                                    this.selectedWorkstationFeature,
                                                                    this.selectedDateOfUse,
                                                                    this.selectedHour,
                                                                    this.selectedSession1Time,
                                                                    this.selectedSession1Workstation,
                                                                    this.session1GroupImagePath);

                if (this.$store.state.selectedSession2Group) {
                    this.$refs.bookingConfirmtaionPage2.fillReferenceID(this.bookingResult ? this.bookingResult.session2BookingReferenceId : null,
                                                                        this.selectedDistrict,
                                                                        this.selectedLibrary,
                                                                        this.floorNum,
                                                                        this.groupName,
                                                                        this.selectedWorkstationFeature,
                                                                        this.selectedDateOfUse,
                                                                        this.selectedHour,
                                                                        this.selectedSession2Time,
                                                                        this.selectedSession2Workstation,
                                                                        this.session2GroupImagePath);
                }

                return Promise.resolve('');
            }
        },
        mounted() {
            this.initializePage().then(val => {
                console.log(val);

                if (this.bookingResult) {
                    this.$store.commit('selectedDistrict', null);
                    this.$store.commit('selectedDistrictId', null);
                    this.$store.commit('districtList', null);
                    this.$store.commit('selectedLibrary', null);
                    this.$store.commit('selectedLibraryId', null);
                    this.$store.commit('libraryList', null);
                    this.$store.commit('selectedWorkstationType', null);
                    this.$store.commit('selectedWorkstationTypeId', null);
                    this.$store.commit('workStationTypeList', null);
                    this.$store.commit('isReadTerm', false);
                    this.$store.commit('selectedWorkstationFeature', null);
                    this.$store.commit('selectedWorkstationFeatureId', null);
                    this.$store.commit('featureList', null);
                    this.$store.commit('selectedWorkstationLanguage', null);
                    this.$store.commit('selectedWorkstationLanguageId', null);
                    this.$store.commit('languageList', null);
                    this.$store.commit('selectedDateOfUse', null);
                    this.$store.commit('dateOfUseList', null);
                    this.$store.commit('selectedHour', null);
                    this.$store.commit('sessionList', null);
                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession1Group', null);
                    this.$store.commit('selectedSession1Workstation', null);
                    this.$store.commit('selectedSession1WorkstationId', null);
                    this.$store.commit('selectedSession1WorkstationGrid', null);
                    this.$store.commit('selectedSession2Time', null);
                    this.$store.commit('selectedSession2Group', null);
                    this.$store.commit('selectedSession2Workstation', null);
                    this.$store.commit('selectedSession2WorkstationId', null);
                    this.$store.commit('selectedSession2WorkstationGrid', null);
                    this.$store.commit('listGroup', null);
                    this.$store.commit('defaultWorkstation', null);
                }
            });
        }
    }
</script>

<style scoped>
ol,
ul,
dl {
    margin-top: 0;
    margin-bottom: 0rem !important;
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

#containerBottom {
    padding-top: 15px;
    padding-bottom: 15px;
}

#containerBottom div {
    display: inline-flex;
    justify-content: center;
}

#containerBottomRow {
    width: 100%;
}

#bookingConfirmationOK {
    background-image: linear-gradient(#1B7BD4, #0164C1);
    color: white;
    width: 14.5%;
    min-width: 174px;
}

#bookingConfirmationAnotherBooking {
    background-image: linear-gradient(#FEFEFE, #F2F2F2);
    color: #676767;
    width: 14.5%;
    min-width: 174px;
}

#bookingConfirmationOK, #bookingConfirmationAnotherBooking {
    border: 1px solid #D1D1D1;
    border-radius: 4px;
    height: 4%;
    min-height: 44px;
}

</style>