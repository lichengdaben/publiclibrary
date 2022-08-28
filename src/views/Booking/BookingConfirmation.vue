<template>
    <div class="BookingConfirmation">
        <div v-if="isMobile()">
        </div>

        <div v-else ref="contentDesktop">
            <b-container class="bv-example-row" fluid>
            <NavBar/>
                <b-row>
                    <b-col cols="12">
                        <div class="bookingConfirmationWarning">*You need to claim your booking within <em>10 minutes</em> before to starts or within <em>50 minutes</em> after it begins</div>
                        <div>&nbsp;</div>
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
                                    <div class="bookingConfirmationFieldValue">HKCL-P-20211109-1024</div>
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
                                    <div class="bookingConfirmationFieldValue">Wan Chai District</div>
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
                                    <div class="bookingConfirmationFieldValue">Hong Kong Central Library</div>
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
                                    <div class="bookingConfirmationFieldValue">{{ this.$store.state.selectedWorkstationGroup1 }}</div>
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
                                    <div class="bookingConfirmationFieldValue">+ Visually Impaired Software<br/>+ Adobe CC<br/>+ English workstation</div>
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
                                    <div class="bookingConfirmationFieldValue">4 Oct 2021</div>
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
                                    <div class="bookingConfirmationFieldValue">1 Hour : 10:00-11:00</div>
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
                                    <div class="bookingConfirmationFieldValue">6F48</div>
                                </div>
                            </li>
                        </ul>
                    </b-col>

                    <b-col cols="3">
                        <ul>
                            <li>
                                <img id="bookingConfirmationImage" src="/src/assets/img/sample.png" />
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

            <b-container class="bv-example-row" id="containerBottom" fluid>
                <b-row id="containerBottomRow">
                    <b-col cols="3">
                    </b-col>
                    <b-col cols="3">
                        <button id="bookingConfirmationOK">OK</button>
                    </b-col>
                    <b-col cols="3">
                        <button id="bookingConfirmationAnotherBooking">Another Booking</button>
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
    import html2pdf from 'html2pdf.js'
    import NavBar from '@/components/NavBar.vue'
    export default {
        name: 'WorkstationGroup',
         components: {
            NavBar
        },
        data() {
            return {
                isShow: true,
                active: false,
                districtList: null,
                districtname: null,
                allLibrariesList: null,
                libraryResult: null,
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {
            printPage() {
                window.print();
            },

            savePage() {
                let rightNow = new Date();

                html2pdf(this.$refs.contentDesktop, {
					margin: 1,
					filename: 'AdvancedBookingConfirmation_' +
                              ("0000" + rightNow.getFullYear()).slice(-4) +
                              ("00" + (rightNow.getMonth() + 1)).slice(-2) +
                              ("00" + rightNow.getDate()).slice(-2) + '_' + '1024' + '.pdf',
					image: { type: 'png', quality: 0.98 },
					html2canvas: { dpi: 192, letterRendering: true },
					jsPDF: { unit: 'in', format: 'letter', orientation: 'landscape' }
				})
            }
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
    color: #FF0000;
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