<template>
    <div class="WorkstationGroup">
        <div v-if="isMobile()">
           
        </div>
        <div v-else style="overflow-y: auto; height: calc(100% - 84px);">
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <MenuBar/>
                <NavBar/>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <LeftMenu ref="leftMenu" @showLeftMenuSettings="showLeftMenuSettings" style="height: 10000px;" />
                    </b-col>
                    <b-col cols="9" id="WorkstationGroup" class="right-content">
                        <LeftMenuSettings ref="leftMenuSettings" @selectFeature="selectFeature" @selectLanguage="selectLanguage" />
                        <WorkstationGroupTable ref="workstationGroupPage" @checkComplete="checkComplete" />
                    </b-col>
                </b-row>
            </b-container>
            <div style="height: 100px;"></div>
            <PageFooter ref="pageFooterSection" @resetWorkstationGroupPage="resetWorkstationGroupPage" />
        </div>
    </div>
</template>

<script>
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import LeftMenu from '@/components/LeftMenu.vue'
    import LeftMenuSettings from '@/components/LeftMenuSettings.vue'
    import WorkstationGroupTable from '/src/components/WorkstationGroupTable.vue'
    import PageFooter from '/src/components/PageFooter.vue'
    import { mixins } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        components: {
            MenuBar,
            NavBar,
            LeftMenu,
            LeftMenuSettings,
            WorkstationGroupTable,
            PageFooter
        },
        data() {
            return {
                isShow: true,
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

            resetWorkstationGroupPage() {
                this.$refs.workstationGroupPage.resetPage();
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