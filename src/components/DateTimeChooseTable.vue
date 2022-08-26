<template>
    <b-container>
        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">DATE OF USE</div>
                <div class="secondfont">{{currentDateTime()}}</div>
            </div>
            <div v-for="data in this.dateOfUse" :key="data.yearAndMonth">
                <b-button-group class="Calendar-group" style="    margin: 10px;">
                    <b-button class="Calendar-primary">
                        <span class="Cal-Month">{{data.currentDay}}</span>
                        <!--{{date.yearAndMonth}}-->
                        <span class="Cal-Date">{{data.yearAndMonth}}</span>
                        <span Class="Cal-Status">Full Booking</span>
                    </b-button>
                </b-button-group>
            </div>
        </div>
        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">SESSION DURATION:</div>
                <div class="secondfont">Usage the thime</div>
            </div>
            <b-button-group class="Calendar-group">
                <b-button cols="3" class="ChooseTime-primary" variant="primary">
                    <span class="Ct-Time">1 Hour</span>
                </b-button>
                <b-button class="ChooseTime-outline" variant="outline-dark">
                    <span class="Ct-Time">2 Hour</span>
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
                        <b-button v-for='(product, index) in MorningPeriod' :key='product.id' class="TimePeriod-outline"
                            variant="outline-dark">
                            <span class="Tp-Time"><span style="display: none;">{{ index + 1}}
                                </span>{{ product.name }}</span>
                            <input type="checkbox" checked="checked" class="checkedboxstyle">
                        </b-button>
                    </li>
                    <!--<li>
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
                        <b-button v-for='(product, index) in NightPeriod' :key='product.id' class="TimePeriod-outline"
                            variant="outline-dark">
                            <span class="Tp-Time"><span style="display: none;">{{ index + 1}}
                                </span>{{ product.name }}</span>
                            <input type="checkbox" checked="checked" class="checkedboxstyle ">
                        </b-button>
                    </li>-->
                </ul>
            </b-button-group>
        </div>
    </b-container>
</template>

<script>
    import {
        getDateOfUse
    } from '@/service/test.js'
    export default {
        name: 'DateTimeChooseTable',
        data() {
            return {
                active: false,
                dateOfUse: null,
                aaaa: null
            }
        },
        props: {
            msg: String
        },
        methods: {
            currentDateTime() {
                const current = new Date();
                const date = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
                const dateTime = date;
                return dateTime;
            },
            // currentHour() {
            //     const current = new Hour();
            //     const date = current.getDate() + '-' + (current.getMonth() + 1) + '-' + current.getFullYear();
            //     const dateTime = date;
            //     return dateTime;
            // },
        },
        async created() {
            this.dateOfUse = (await getDateOfUse(1)).data.data;
        },
    }
    
import {
            ref
        } from 'vue'
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
        console.log(MorningPeriod);
        /*const AfternoonPeriod = ref([{
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
        ]) */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>