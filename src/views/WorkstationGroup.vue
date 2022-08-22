<template>
    <div class="WorkstationGroup">
        <div v-if="isMobile()">
            <WorkstationGroupH5 />
        </div>
        <div v-else>
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <ul>
                            <li>
                                <div class="firstHeader">
                                    <div class="firstfont">DISTRICT</div>
                                    <div class="secondfont">Item name</div>
                                </div>
                            </li>
                            <li>
                                <div class="firstHeader">
                                    <div class="firstfont">LIBRARY</div>
                                    <div class="secondfont">Item name</div>
                                </div>
                            </li>
                            <li>
                                <div class="firstHeader">
                                    <div class="firstfont">CHOOSE COMPUTER</div>
                                    <div class="secondfont">Item name</div>
                                </div>
                            </li>
                            <li style="border-bottom: 1px dotted #BBBBBB;">
                                <vs-button @click="active=!active" 
                                        color="primary" class="SettingButton" 
                                        type="filled">Setting
                                </vs-button>
                                <div class="firstHeader">
                                    <div class="firstfont">DATE AND TIME OF USE</div>
                                    <div class="secondfont">Item name</div>
                                </div>
                            </li>
                        </ul>
                    </b-col>
                    <b-col cols="9" id="WorkstationGroup" class="right-content">
                        <div ref="parentSidebar" id="parentx">
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
                        </div>
                        <WorkstationGroupTable />
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>


<script>
    import WorkstationGroupTable from '../components/WorkstationGroupTable.vue'
    import WorkstationGroupH5 from './WorkstationGroupH5.vue'

    import { mixins } from '@/common/mixins'

    export default {
        el: 'WorkstationGroup',
        name: 'WorkstationGroup',
        components: {
            WorkstationGroupH5,
            WorkstationGroupTable
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