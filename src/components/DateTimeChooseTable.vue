<template>
        <b-container>
            <div class="p-order">
                <!-- <b-button-toolbar >
                        <b-button-group >
                            <b-button>&lsaquo;</b-button>
                        </b-button-group> -->
                <div class="firstHeader">
                    <div class="firstfont">DISTRICT</div>
                    <div class="secondfont">Item name</div>
                </div>
                <b-button-group class="Calendar-group">
                    <b-button class="Calendar-primary" variant="primary">
                        <span class="Cal-Month">Sun</span>
                        <span class="Cal-Date">2</span>
                        <span Class="Cal-Status">Full Booking</span>
                    </b-button>
                    <b-button class="Calendar-light" variant="light">
                        <span class="Cal-Month">Mon</span>
                        <span class="Cal-Date">3</span>
                        <span Class="Cal-Status">Full Booking</span>
                    </b-button>

                    <b-button class="Calendar-outline" variant="outline-dark">
                        <span class="Cal-Month">Tue</span>
                        <span class="Cal-Date">4</span>
                        <span Class="Cal-Status">Selected</span>
                    </b-button>

                    <b-button class="Calendar-light" variant="light">
                        <span class="Cal-Month">Wed</span>
                        <span class="Cal-Date">5</span>
                        <span Class="Cal-Status">Selected</span>
                    </b-button>

                    <b-button class="Calendar-light" variant="light">
                        <span class="Cal-Month">Thu</span>
                        <span class="Cal-Date">6</span>
                        <span Class="Cal-Status">Holiday</span>
                    </b-button>

                    <b-button class="Calendar-light" variant="light">
                        <span class="Cal-Month">Fri</span>
                        <span class="Cal-Date">7</span>
                        <span Class="Cal-Status">Holiday</span>
                    </b-button>

                    <b-button class="Calendar-light" variant="light">
                        <span class="Cal-Month">Sat</span>
                        <span class="Cal-Date">4</span>
                        <span Class="Cal-Status">Closed</span>
                    </b-button>
                </b-button-group>

                <!-- <b-button-group>
                            <b-button>&rsaquo;</b-button>
                        </b-button-group> 
                    </b-button-toolbar>-->
            </div>
            <div class="p-order">
                <div class="firstHeader">
                    <div class="firstfont">SESSION DURATION:</div>
                    <div class="secondfont">Usage the thime</div>
                </div>
                <b-button-group class="Calendar-group">
                    <b-button cols="3" class="ChooseTime-primary" variant="primary">
                        <span class="Ct-Time">1 Hour</span>
                        <span Class="Ct-Msg">You can choose to use 1 hours</span>
                    </b-button>
                    <b-button class="ChooseTime-outline" variant="outline-dark">
                        <span class="Ct-Time">2 Hour</span>
                        <span Class="Ct-Msg">You can choose to use it 2 consecutive hours</span>
                    </b-button>
                </b-button-group>
            </div>
            <div class="p-order">
                <div class="firstHeader clearfix">
                    <div class="firstfont">TIME PERIOD:</div>
                </div>
                <b-button-group class="TimePeriod-group">
                    <ul class="clearfix">
                        <li>
                            <div class="secondfont">Morning</div>
                            <b-button v-for='(product, index) in MorningPeriod' :key='product.id' 
                                class="TimePeriod-outline" variant="outline-dark">
                                <span class="Tp-Time"><span style="display: none;">{{ index + 1}}
                                    </span>{{ product.name }}</span>
                                <input type="checkbox" checked="checked" class="checkedboxstyle ">
                            </b-button>
                        </li>
                        <li>
                            <div class="secondfont">Afternoon </div>
                            <b-button v-for='(product, index) in AfternoonPeriod' :key='product.id'
                                class="TimePeriod-outline" variant="outline-dark">
                                <span class="Tp-Time"><span style="display: none;">{{ index + 1}}
                                    </span>{{ product.name }}</span>
                                <input type="checkbox" checked="checked" class="checkedboxstyle ">
                            </b-button>
                        </li>
                        <li>
                            <div class="secondfont">Night </div>
                            <b-button v-for='(product, index) in NightPeriod' :key='product.id' 
                                class="TimePeriod-outline" variant="outline-dark">
                                <span class="Tp-Time"><span style="display: none;">{{ index + 1}}
                                    </span>{{ product.name }}</span>
                                <input type="checkbox" checked="checked" class="checkedboxstyle ">
                            </b-button>
                        </li>
                    </ul>
                </b-button-group>
            </div>
        </b-container>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    //const CalendarDay = ref([
    //  { id: 0, week: 'Sun' ,date:'2' , Status:'Full Booking' }, 
    //  { id: 1, week: 'Mon' ,date:'3' , Status:'Full Booking' }, 
    //  { id: 2, week: 'Tue' ,date:'4' , Status:'Selected' }, 
    //  { id: 3, week: 'Wed' ,date:'5' , Status:'Selected' }, 
    //  { id: 4, week: 'Thu' ,date:'6' , Status:'Holiday' }, 
    //  { id: 5, week: 'Fri' ,date:'7' , Status:'Holiday' }, 
    //  { id: 6,  week: 'Sat' ,date:'8' , Status:'Closed' }])
    const MorningPeriod = ref([{
            id: 0,
            name: '9:00'
        },
        {
            id: 1,
            name: '10:00'
        },
        {
            id: 2,
            name: '11:00'
        },
        {
            id: 3,
            name: '12:00'
        }
    ])
    const AfternoonPeriod = ref([{
            id: 4,
            name: '13:00'
        },
        {
            id: 5,
            name: '14:00'
        },
        {
            id: 6,
            name: '15:00'
        },
        {
            id: 7,
            name: '16:00'
        },
        {
            id: 8,
            name: '17:00'
        }
    ])
    const NightPeriod = ref([{
            id: 9,
            name: '18:00'
        },
        {
            id: 10,
            name: '19:00'
        },
        {
            id: 11,
            name: '20:00'
        },
        {
            id: 12,
            name: '21:00'
        }
    ])
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>