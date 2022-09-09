<template>
<div class="BookingSystem">
    <div v-if="isMobile()">
        <BookingSystemH5/>
    </div>
        <div v-else style="overflow-y: auto; height: calc(100vh - 84px);">
        <MenuBar/>
        <b-container class="bv-example-row">
            <p>電腦設施網上預約系統</p>
            <p>COMPUTER FACILITIES ONLINE BOOKING SYSTEM</p>
            <b-row class="squaregroup">
                <b-col type=button class="square1" @click="goToHome()">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-display" />
                        <div>我要預約</div>
                        <div>Book Now</div>
                    </div>
                </b-col>
                <b-col class="squareline">
                    <b-col class="square2">
                        <div>
                            <div>電腦設施</div>
                            <div>Computer Facilities</div>
                        </div>
                    </b-col>
                    <b-col class="square2">
                        <div>
                            <div>我的預約</div>
                            <div>My Booking</div>
                        </div>
                    </b-col>
                </b-col>
                <b-col class="squareline" >
                    <b-col class="square2">
                        <div>
                            <div>如何預約</div>
                            <div>How to Book</div>
                        </div>
                    </b-col>
                    <b-col class="square2">
                        <div>
                            <div>常見問題</div>
                            <div>FAQ</div>
                        </div>
                    </b-col>
                </b-col>
            </b-row>
        </b-container>
    </div>
</div>
</template>


<script>
    import BookingSystemH5 from './BookingSystemH5.vue'
    import MenuBar from '@/components/MenuBar.vue'
    import { mixins } from '@/common/mixins'

    export default {
        name: 'BookingSystem',
        components: {
           BookingSystemH5,
           MenuBar
        },
        data() {
            return {
                active: false,
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {
            goToHome() {
                this.$router.push("/workstationbooking/SelectLocation")
            }
        },
        created() {
            this.$store.commit('selectedDistrict', null);
            this.$store.commit('selectedDistrictId', null);
            this.$store.commit('districtList', null);
            this.$store.commit('selectedLibrary', null);
            this.$store.commit('selectedLibraryId', null);
            this.$store.commit('libraryList', null);
            this.$store.commit('selectedWorkstationType', null);
            this.$store.commit('selectedWorkstationTypeId', null);
            this.$store.commit('workStationTypeList', null);
            this.$store.commit('isReadTerm', null);
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
            this.$store.commit('selectedSession2Time', null);
            this.$store.commit('selectedSession2Group', null);
            this.$store.commit('selectedSession2Workstation', null);
            this.$store.commit('listGroup', null);
        }
    }
</script>

<style scoped>

.square1{
    width:233px;
    height:233px;
    background: #F2653E 0% 0% no-repeat padding-box;
    border-radius: 38px;
    opacity: 1;
    text-align: center;
}

.square2{
    width: 175px;
    height: 175px;
    background: #F2653E 0% 0% no-repeat padding-box;
    border-radius: 26px;
    opacity: 1;
    margin:20px;
    text-align: center;
}

.square1 > div { margin: 35% auto; }
.square2 > div { margin: 35% auto; }
.squareline {
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

div {
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal bold 20px/26px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
}

.svg-inline--fa {
    display: var(--fa-display, inline-block);
    height: 2em;
    overflow: visible;
    vertical-align: -0.125em;
}

p {
    color: var(--unnamed-color-000000);
    text-align: left;
    font: normal normal bold 26px/34px Roboto;
    letter-spacing: 0px;
    color: #000000;
    text-transform: uppercase;
    opacity: 1;
    margin:0;
    font-weight:bold
}

.squaregroup {
    display: flex;
}

</style>
