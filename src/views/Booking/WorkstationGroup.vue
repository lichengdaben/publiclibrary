<template>
    <div class="WorkstationGroup">
        <div v-if="isMobile()">
           
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
            <MenuBar/>
           <NavBar/>
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
   
    import WorkstationGroupLeftMenu from '/src/components/WorkstationGroupLeftMenu.vue'
    import WorkstationGroupTable from '/src/components/WorkstationGroupTable.vue'
    import PageFooter from '/src/components/PageFooter.vue'
    import NavBar from '@/components/NavBar.vue'
     import MenuBar from '@/components/MenuBar.vue'
    import { mixins } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        components: {
           
            WorkstationGroupLeftMenu,
            WorkstationGroupTable,
            PageFooter,
            NavBar,
            MenuBar
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