<template>
    <div class="DateTimeChoose">
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
                                        color="primary" class="SettingButton" type="filled">Setting
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
                            <vs-sidebar :parent="$refs.parentSidebar" default-index="1" 
                            color="primary" class="sidebarx" pacer v-model="active">
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
                        <DateTimeChooseTable />
                    <div>

                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
    import DateTimeChooseTable from '../components/DateTimeChooseTable.vue'

    export default {
        name: 'DateTimeChoose',
        components: {
            DateTimeChooseTable 
        },
        data() {
            return {
                active: false,
            }
        },
        props: {
            msg: String
        },
        methods: {

        }
    }
</script>

<style scoped>
</style>