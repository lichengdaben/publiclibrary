<template>
    <div class="BookingConfirmation">
        <div v-if="isMobile()">
            
        </div>
        <div v-else style="overflow-y: auto; height: calc(100vh - 84px);">
            <MenuBar/>
            <NavBar/>
            <BookingConfirmationSession1Table ref="bookingConfirmtaionPage1" />
            <b-container class="bv-example-row" id="containerBottom" fluid>
                <b-row id="containerBottomRow">
                    <b-col cols="3">
                    </b-col>
                    <b-col cols="3">
                        
                            <button id="bookingConfirmationOK" @click="clickOk()">OK</button>
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
                <PageFooter/>
        </div>

    </div>
</template>

<script>
    import { mixins } from '@/common/mixins'
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import BookingConfirmationSession1Table from '@/components/BookingConfirmationSession1Table.vue'
    import PageFooter from '@/components/PageFooter.vue'

    export default {
        name: 'WorkstationGroup',
        components: {
            MenuBar,
            NavBar,
            BookingConfirmationSession1Table,
            PageFooter
        },
        data() {
            return {
               
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {
           clickOk(){
            alert("you have successfully booked")

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