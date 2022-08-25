<template>
    <div class="BookingConfirmation">
        <div v-if="isMobile()">
            <WorkstationGroupH5/>
        </div>

        <div v-else>
            <b-container class="bv-example-row" fluid>
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
                                    <div class="bookingConfirmationFieldValue">{{ this.$store.state.selectedWorkstationGroup }}</div>
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
                                <img id="bookingConfirmationImage" src="../assets/img/sample.png" />
                            </li>
                            <li>
                                <div>&nbsp;</div>
                            </li>
                            <li>
                                <div class="bookingConfirmationButtons">
                                    <button id="bookingConfirmationPrint">
                                        <font-awesome-icon icon="fa-solid fa-print" />&nbsp;&nbsp;Print
                                    </button>
                                </div>
                                <div class="bookingConfirmationButtons">
                                    <button id="bookingConfirmationSave">
                                        <font-awesome-icon icon="fa-regular fa-folder" />&nbsp;&nbsp;Save
                                    </button>
                                </div>
                            </li>
                        </ul>
                    </b-col>
                </b-row>
            </b-container>

            <PageFooter />
        </div>
    </div>
</template>

<script>
    import PageFooter from '../components/PageFooter.vue'

    import {
        mixins
    } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        components: {
            PageFooter,
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

</style>