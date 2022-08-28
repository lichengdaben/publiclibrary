<template>
    <div class="BookingDetails">
        <div v-if="isMobile()">
            <WorkstationGroupH5/>
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
            <NavBar/>
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
   
    import BookingDetailsLeftMenu from '/src/components/BookingDetailsLeftMenu.vue'
    import BookingDetailsTable from '/src/components/BookingDetailsTable.vue'
    import PageFooter from '/src/components/PageFooter.vue'
    
    import { mixins } from '@/common/mixins'
 import NavBar from '@/components/NavBar.vue'
    export default {
        name: 'BookingDetails',
        components: {
            BookingDetailsLeftMenu,
            BookingDetailsTable,
            PageFooter,
            NavBar
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
        },
        mounted() {
            document.getElementById("pageFooterNextLink").classList.remove("btn");
            document.getElementById("pageFooterNextLink").classList.remove("disabled");
        }
    }
</script>

<style scoped>
</style>