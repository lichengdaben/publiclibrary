<template>
    <b-container>
        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">DATE OF USE</div>
                <div class="secondfont" style="padding: 10px 0px 0px 0px; margin: 0px;">{{ currentDateTime }}</div>
            </div>
            <div class="dateOfTime">
                <div v-for="data in this.dateOfUse" :key="data.yearAndMonth">
                    <b-button-group class="Calendar-group" style="margin: 10px;">
                        <b-button v-if="data.close" class="Calendar-primary" style="margin: 0px 10px; background-color: #545B62; color: white;">
                            <div>
                                <!--<span class="Cal-Month">{{ data.currentDay }}</span>-->
                                <span class="Cal-Date">{{ data.dayAndWeek }}</span>
                            </div>
                            <div>
                                <div style="background-color: #545B62;">Closed</div>
                            </div>
                        </b-button>
                        <b-button v-else-if="!data.close" class="Calendar-primary" @click="click(data.dayAndWeek)" style="margin: 0px 10px;">
                            <div>
                                <!--<span class="Cal-Month">{{ data.currentDay }}</span>-->
                                <span class="Cal-Date">{{ data.dayAndWeek }}</span>
                            </div>
                            <div>
                                <div v-if="chooseDate.includes(data.dayAndWeek)" class="secondHeader">Selected</div>
                                <div v-else-if="data.holiday" class="secondHeader">Holiday</div>
                            </div>
                        </b-button>
                    </b-button-group>
                </div>
            </div>
        </div>

        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">SESSION DURATION:</div>
            </div>
            <b-button-group class="Calendar-group" style="padding: 10px 0px;">
                <b-button cols="3" class="ChooseTime-primary" style="border: 1px solid grey;" variant="primary" @click="clickHour(1)">
                    <span class="Ct-Time" style="width: 100%">1 Hour</span>
                </b-button>
                <b-button cols="3" class="ChooseTime-primary" style="border: 1px solid grey;" variant="primary" @click="clickHour(2)">
                    <span class="Ct-Time" style="width: 100%">2 Hours</span>
                </b-button>
            </b-button-group>
        </div>

        <div class="p-order">
            <div class="firstHeader clearfix">
                <div class="firstfont">TIME SLOT:</div>
            </div>
            <b-button-group class="TimePeriod-group">
                <table>
                    <thead>
                        <tr>
                            <th colspan="4">Morning</th>
                            <th colspan="5">Afternoon</th>
                            <th colspan="5">Night</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="time in morningPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" />
                                </div>
                            </td>
                            <td v-for="time in afternoonPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" />
                                </div>
                            </td>
                            <td v-for="time in nightPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!--<ul class="clearfix">
                    <li>
                        <div class="secondfont">Morning</div>
                        <b-button v-for='(product, index) in MorningPeriod' :key='product.id' class="TimePeriod-outline" variant="outline-dark">
                            <span class="Tp-Time">
                                <span style="display: none;">{{ index + 1 }}</span>{{ product.name }}
                            </span>
                            <input type="checkbox" checked="checked" class="checkedboxstyle">
                        </b-button>
                    </li>
                    <li>
                        <div class="secondfont">Afternoon</div>
                        <b-button v-for='(product, index) in AfternoonPeriod' :key='product.id' class="TimePeriod-outline" variant="outline-dark">
                            <span class="Tp-Time">
                                <span style="display: none;">{{ index + 1 }}</span>{{ product.name }}
                            </span>
                            <input type="checkbox" checked="checked" class="checkedboxstyle ">
                        </b-button>
                    </li>
                    <li>
                        <div class="secondfont">Night</div>
                        <b-button v-for='(product, index) in NightPeriod' :key='product.id' class="TimePeriod-outline" variant="outline-dark">
                            <span class="Tp-Time">
                                <span style="display: none;">{{ index + 1 }}</span>{{ product.name }}
                            </span>
                            <input type="checkbox" checked="checked" class="checkedboxstyle ">
                        </b-button>
                    </li>
                </ul>-->
            </b-button-group>
        </div>
    </b-container>
</template>

<script>
    import { getDateOfUse } from '@/service/test.js'
    export default {
        name: 'DateTimeChooseTable',
        data() {
            return {
                active: false,
                dateOfUse: null,
                isShow:false,
                chooseDate: [],
                currentDateTime: null,
                morningPeriod: null,
                afternoonPeriod: null,
                nightPeriod: null
            }
        },
        props: {
            msg: String
        },
        methods: {
            async click(dayAndWeek) {
                this.$store.commit('selectedDate',dayAndWeek);
                this.$store.state.selectedDate=dayAndWeek
                console.log(this.$store.state.selectedDate)
                if (!this.chooseDate.includes(dayAndWeek)) {
                    this.chooseDate.push(dayAndWeek)
                } else {
                    let index = this.chooseDate.indexOf(dayAndWeek);
                    if (index !== -1) {
                        this.chooseDate.splice(index, 1);
                    }
                }
            },

            async clickHour(hourTime) {
                this.$store.commit('selectedHour', hourTime);
                //this.$store.state.selectedHour = hourTime;
                //console.log(this.$store.state.selectedHour);
            },

            async clickDate(date) {
                this.$store.commit('selectedDate',date);
                this.$store.state.selectedDate=date
            },

            getCurrentDateTime() {
                const current = new Date();
                const monthArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
                const date = monthArray[current.getMonth()] + ' ' + current.getFullYear();
                return date;
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
            this.clickHour(1);
            console.log(this.dateOfUse);
        },
        async mounted() {
            this.currentDateTime = this.getCurrentDateTime();
            this.morningPeriod = MorningPeriod.value;
            this.afternoonPeriod = AfternoonPeriod.value;
            this.nightPeriod = NightPeriod.value;
        }
    }

    import { ref } from 'vue'

    const MorningPeriod = ref([
        {
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
    ]);

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
    ]);

    const NightPeriod = ref([
        {
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
    ]);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.btn{
    display: flex;
    align-items:center;
    flex-direction: column;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.dateOfTime{
    display: flex;
    align-items:center;
    flex-direction:row;
}

.TimePeriod-group table {
    font-weight: bold;
}

.TimePeriod-group th {
    padding: 10px 0px;
    font-size: medium;
}

.TimePeriod-group td {
    border-left: 1px solid grey;
    border-right: 1px solid grey; 
    padding: 0px 10px;
}

.timeRange {
    padding: 10px 0px;
}

.checkbox {
    accent-color: #096BCC;
    width: 25px;
    height: 25px;
}

</style>