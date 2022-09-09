<template>
    <div class="DateTimeChoose">
        <div style="overflow-y: auto; height: calc(100vh - 84px);">
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <MenuBar/>
                <NavBar/>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <LeftMenu ref="leftMenu" @showLeftMenuSettings="showLeftMenuSettings" />
                    </b-col>
                    <b-col cols="9" class="right-content">
                        <LeftMenuSettings ref="leftMenuSettings" @selectFeature="selectFeature" @selectLanguage="selectLanguage" @resetCheckboxes="resetCheckboxes" @checkComplete="checkComplete" />
                        <DateTimeChooseTable ref="dateTimeChoosePage" @checkComplete="checkComplete" />
                    </b-col>
                </b-row>
            </b-container>
            <div style="height: 100px;"></div>
            <PageFooter ref="pageFooterSection" @resetDateTimeChoosePage="resetDateTimeChoosePage" />
        </div>
    </div>
</template>

<script>
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import LeftMenu from '@/components/LeftMenu.vue'
    import LeftMenuSettings from '@/components/LeftMenuSettings.vue'
    import DateTimeChooseTable from '@/components/DateTimeChooseTable.vue'
    import PageFooter from '@/components/PageFooter.vue'

    export default {
        name: 'DateTimeChoose',
        components: {
            MenuBar,
            NavBar,
            LeftMenu,
            LeftMenuSettings,
            DateTimeChooseTable,
            PageFooter
        },
        data() {
            return {
               active: null
            }
        },
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

            resetDateTimeChoosePage() {
                this.$refs.dateTimeChoosePage.resetPage();
            },

            selectFeature(selectedWorkstationFeature) {
                this.$refs.leftMenu.selectFeature(selectedWorkstationFeature);
            },

            selectLanguage(selectedWorkstationFeature) {
                this.$refs.leftMenu.selectLanguage(selectedWorkstationFeature);
            },

            resetCheckboxes(isGetLibraryTimeSlot) {
                this.$refs.dateTimeChoosePage.resetCheckboxes(isGetLibraryTimeSlot);
            }
        }
    }
</script>

<style scoped>
</style>