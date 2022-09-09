<template>
    <div class="BookingDetails">
        <div v-if="isMobile()">
            <WorkstationGroupH5/>
        </div>
        <div v-else style="overflow-y: auto; height: calc(100vh - 84px);"> 
            <b-container class="bv-example-row" fluid>
                <MenuBar/>
                <NavBar/>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <LeftMenu ref="leftMenu" @showLeftMenuSettings="showLeftMenuSettings" />
                    </b-col>
                    <b-col cols="9" class="right-content">
                        <LeftMenuSettings ref="leftMenuSettings" @selectFeature="selectFeature" @selectLanguage="selectLanguage" />
                        <BookingDetailsTable ref="dateTimeChoosePage" @checkComplete="checkComplete" />
                    </b-col>
                </b-row>
            </b-container>
            <div style="height: 100px;"></div>
            <PageFooter ref="pageFooterSection" />
        </div>
    </div>
</template>

<script>
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import LeftMenu from '@/components/LeftMenu.vue'
    import LeftMenuSettings from '@/components/LeftMenuSettings.vue'
    import BookingDetailsTable from '@/components/BookingDetailsTable.vue'
    import PageFooter from '@/components/PageFooter.vue'
    import { mixins } from '@/common/mixins'

    export default {
        name: 'BookingDetails',
        components: {
            MenuBar,
            NavBar,
            LeftMenu,
            LeftMenuSettings,
            BookingDetailsTable,
            PageFooter
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
            showLeftMenuSettings(isActive) {
                this.$refs.leftMenuSettings.showLeftMenuSettings(isActive);
            },

            checkComplete(pageName) {
                this.$refs.pageFooterSection.checkComplete(pageName);
            },

            selectFeature(selectedWorkstationFeature) {
                this.$refs.leftMenu.selectFeature(selectedWorkstationFeature);
            },

            selectLanguage(selectedWorkstationFeature) {
                this.$refs.leftMenu.selectLanguage(selectedWorkstationFeature);
            }
        }
    }
</script>

<style scoped>
</style>