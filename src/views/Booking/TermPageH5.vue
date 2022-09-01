<template>
    <div class="TermPageH5">
        <b-container class="bv-example-row" id="container-DTC" fluid>
            <NavBarCoU />
        <b-row cols="12" id="cfm_nav_title">
            <b-col cols="12" >
                <div class="cfm_cou_contentbody">
                    <ol><li>
Members of the public are welcome to use the public libraries’ Internet & Digital Service Workstations free of charge.  Children aged below 12 may use the Kid’s Internet & Digital Service Workstations.
</li><li>
Prior booking is required for using the library computer facilities.  Members of the public may book a workstation or multimedia content 7 days in advance (including the date of use).  If users want to make a booking for the current day, they should complete the booking procedures 15 minutes before the session begins.  Users who place bookings in person at the service counter are required to complete a form and produce valid proof of identity, such as the Library Card of the Hong Kong Public Libraries or Hong Kong Identity Card.  For bookings by telephone, users are required to produce valid proof of identity when they claim their bookings.  Registered readers may use the MMIS online booking service.  Users are required to produce upon request their library cards or Hong Kong Identity Cards for verification.
</li><li>
The “Library Card for Guarantor’s Use” cannot be used for booking workstations or multimedia content.
</li><li>
User may book a maximum of 2 sessions with the total length of time not exceeding 4 hours a day (including booking of workstation or content). The duration of a workstation booking is 1 hour or 2 hours per session.  For multimedia content, the maximum duration of a booked session is 2 or 3 hours each, subject to the time length (on an hourly basis) of the reserved item(s) and the time limit of respective libraries :
</li><li>
Users who reserve workstations or multimedia content at the Hong Kong Central Library may book a maximum of 2 sessions with the total length of time not exceeding 4 hours a day.
</li><li>
Users who reserve workstations or multimedia content at branch libraries may book a maximum of 2 sessions with the total length of time not exceeding 2 hours a day.
</li><li>
Users who book workstation only can select two consecutive sessions, each session cannot be longer than 1 hour and must be in the same workstation group.    
</li><li>
Users are required to claim their bookings at a workstation in the reserved workstation group within 15 minutes before or within 10 minutes after the session’s start time.  If a booking has not been claimed within 10 minutes after the session begins, it will be cancelled and reallocated to other eligible users in the queue.
</li><li>
Users shall vacate the workstation after their booked session ends.
</li><li>
Unreserved workstations with no users in the queue are available for immediate use.
</li><li>
Access to content and materials in the MMIS is governed by the Terms of Use of the MMIS.
</li><li>
A fee is payable for the use of printing facilities of the library.  Please refer to the relevant library notice or approach library staff for details.
</li><li>
Users are strictly prohibited from sending any unsolicited electronic messages (whether of commercial or non-commercial nature) via the library’s network or accessing websites containing materials which are obscene, indecent, violent, disgusting, libellous, threatening or discriminating in nature or engaging in online games or gambling.  They are also not allowed to bring their own CDs, CD-ROMs (except those used as storage media for files produced by users themselves), VCDs, DVDs, or any computer software for use in the workstations.
</li><li>
Users may print out materials from files produced by themselves or save these files into their own USB memory devices.  They shall scan the memory devices for virus before operating them on the workstations.
</li><li>
Copying of a copyright work is an act restricted by the Copyright Ordinance.  Users shall make sure there is no infringement of copyright or other intellectual property rights when using the computer facilities for printing, downloading and browsing the Internet and MMIS materials.  Please contact the library staff for the full text of the Copyright Ordin.
</li>
</ol>
                </div>
            </b-col>
        </b-row>
        <b-row align-v="space-around" class="footer">
            <b-col cols="12">
                <button type="button"  class="buttonNextCou"  style="float: right;"
                 @click='jumpToAccept'>Accept and Continue
                    <font-awesome-icon icon="fas fa-right-long" />
                </button>
            </b-col>
        </b-row>
        </b-container>
        <PageFooter />
    </div>
</template>

<script>
    import { mixins } from '@/common/mixins'
    import PageFooter from '@/components/PageFooter.vue'
    import NavBarCoU from '@/components/NavBarCoU.vue'

    export default {
        name: 'TermPageH5',
        components:{
            PageFooter,
            NavBarCoU
        },
        data() {
            return {
                // districtList: null,
                // allLibrariesList: null,
                // libraryResult: null,
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        computed: {},
        methods: {
            jumpToAccept() {
                this.$router.push('/workstationbooking/SelectLocation');
            },


        },

    }
</script>

<style scoped>
</style>