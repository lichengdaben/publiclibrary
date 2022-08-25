<template>
    <div class="BookingDetails">
        <div v-if="isMobile()">
            <WorkstationGroupH5/>
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <BookingDetailsLeftMenu />
                    </b-col>
                    <b-col cols="9" class="right-content">
                        <BookingDetailsTable />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <PageFooter />
    </div>
</template>

<script>
    import WorkstationGroupH5 from './WorkstationGroupH5.vue'
    import BookingDetailsLeftMenu from '../components/BookingDetailsLeftMenu.vue'
    import BookingDetailsTable from '../components/BookingDetailsTable.vue'
    import PageFooter from '../components/PageFooter.vue'
    
    import { mixins } from '@/common/mixins'

    export default {
        name: 'BookingDetails',
        components: {
            WorkstationGroupH5,
            BookingDetailsLeftMenu,
            BookingDetailsTable,
            PageFooter,
        },
        data() {
            return {
                workStationGroup: null,
                active: false,
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
</style>