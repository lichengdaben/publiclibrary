<template>
    <div class="WorkstationGroup">
        <div v-if="isMobile()">
            <WorkstationGroupH5 />
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <WorkstationGroupLeftMenu />
                    </b-col>
                    <b-col cols="9" id="WorkstationGroup" class="right-content">
                        <!--<div ref="parentSidebar" id="parentx">
                            <vs-sidebar :parent="$refs.parentSidebar" 
                                        default-index="1" color="primary" class="sidebarx"
                                        pacer v-model="active">
                                            <div class="header-sidebar">
                                                <h4>ajhfkajsfkjs</h4>
                                                <h4>ajhfkajsfkjs</h4>
                                                <h4>ajhfkajsfkjs</h4>
                                                <h4>ajhfkajsfkjs</h4>
                                                <h4>ajhfkajsfkjs</h4>
                                                <h4>ajhfkajsfkjs</h4>
                                            </div>
                            </vs-sidebar>
                        </div>-->
                        <WorkstationGroupTable />
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <PageFooter />
    </div>
</template>

<script>
    import WorkstationGroupH5 from './WorkstationGroupH5.vue'
    import WorkstationGroupLeftMenu from '../components/WorkstationGroupLeftMenu.vue'
    import WorkstationGroupTable from '../components/WorkstationGroupTable.vue'
    import PageFooter from '../components/PageFooter.vue'

    import { mixins } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        components: {
            WorkstationGroupH5,
            WorkstationGroupLeftMenu,
            WorkstationGroupTable,
            PageFooter,
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