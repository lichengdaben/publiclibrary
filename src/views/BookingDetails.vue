<template>
<div class="BookingDetails">
<div v-if="isMobile()">
    <WorkstationGroupH5/>
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
                    <b-col cols="9" class="right-content">
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
                        <h2 class="title2">Information Details</h2>
                         <b-button v-b-toggle.info-details class="info-button">
                            <div class="info-left">
                                <img src="../assets/img/wg-img.png" class="info-img" >
                            </div>
                            <ul class="info-center">
                                <li>Workstation Group :</li>
                                <li>2/F Children's Library Workstation</li>
                                <li>Workstation no. :</li>
                                <li>2F15</li>
                            </ul>
                            <div class="info-right">
                                    <div>
                                    <img src="../assets/img/click-icon.png" class="info-img" >
                                    <p>N , select workstation</p>
                                    </div>
                                    <p>icon</p>
                            </div>
                         </b-button>
                        <b-collapse id="info-details" class="info-details">
                             <b-card>
                            <ul>
                                <li></li>
                                <li><ol>
                                        <li>Workstation Group :</li>
                                        <li>2/F Children's Library Workstation</li>
                                        <li>Workstation no. :</li>
                                        <li>2F15</li>
                                    </ol>
                                </li>
                                <li> <b-button v-b-toggle.toggle-item > </b-button></li>
                            </ul>
                            </b-card>
                        </b-collapse>
                    </b-col>
                </b-row>
    </b-container>
</div>
</div>
</template>


<script>
    import WorkstationGroupH5 from './WorkstationGroupH5.vue'
    
    import {  mixins } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        components: {
            WorkstationGroupH5
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

    }}
</script>

<style scoped>
</style>