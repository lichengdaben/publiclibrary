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
                        <LeftMenu ref="leftMenu" style="height: 10000px;" />
                    </b-col>
                    <b-col cols="9" id="WorkstationGroup" class="right-content">
                        <WorkstationGroupTable />
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
    import PageFooter from '/src/components/PageFooter.vue'
    import { mixins } from '@/common/mixins'
    import WorkstationGroupTable from '@/components/WorkstationGroupTable.vue'
    export default {
        name: 'WorkstationGroup',
        components: {
            MenuBar,
            NavBar,
            LeftMenu,
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
            
        }
    }
</script>

<style scoped>
</style>