<template>
<div class="TermPageH5">
<div>i am term</div>
 <b-container class="bv-example-row" id="container-DTC" fluid>
        <b-row>
            <b-col class="titlediv">
                <h1 style="font-size: 20px;">CONDITIONS OF USING WORKSTATION AT HONG KONG PUBLIC LIBRARIES
                </h1>
                <p style="font-size: 18px;">Please read the conditions of use below.</p>

            </b-col>
            <b-col>
                        <p>
                            1. Members of the public are welcome to use the public libraries’ Internet & Digital Service
                            Workstations free of charge.
                            Children aged below 12 may use the Kid’s Internet & Digital Service Workstations. <br><br>
                            2. Prior booking is required for using the library computer facilities. Members of the
                            public may book a workstation or
                            multimedia content 7 days in advance (including the date of use). If users want to make a
                            booking for the current day,
                            they should complete the booking procedures 15 minutes before the session begins. Users who
                            place bookings in
                            person at the service counter are required to complete a form and produce valid proof of
                            identity, such as the Library
                            Card of the Hong Kong Public Libraries or Hong Kong Identity Card. For bookings by
                            telephone, users are required to
                            produce valid proof of identity when they claim their bookings. Registered readers may use
                            the MMIS online booking
                            service. Users are required to produce upon request their library cards or Hong Kong
                            Identity Cards for verification.
                        </p>
            </b-col>
        </b-row>
    </b-container>
     <b-container fluid id="container3" class="controller clearfix">
        <button type="button" class="button2" style="float: right;" @click='jumpToNext'>Accept and Continue
            <font-awesome-icon icon="fas fa-right-long" />
        </button>
    </b-container>
</div>
</template>

<script>
import { mixins } from '@/common/mixins'


export default {
  name: 'TermPageH5',
  data(){
    return {
        districtList:null,
        allLibrariesList: null,
        libraryResult:null,
    }
  },
  mixins: [mixins],
  props: {
    msg: String
  },
  computed: {
  },
  methods: {
       
  },

}   







</script>

<style scoped>
</style>
