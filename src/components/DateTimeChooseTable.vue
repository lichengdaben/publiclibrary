<template>
    <b-container>
        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">DATE OF USE</div>
                <div class="secondfont" style="padding: 10px 0px 0px 0px; margin: 0px;">{{ currentDateTime }}</div>
            </div>
            <div class="Calendar-group">
                <div v-for="(data, index) in this.dateOfUse" :key="index">
                    <div class="dateOfTime">
                        <button class="Cal-btn-close" v-if="data.close" :id="'date' + data.dayAndWeek">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div>
                            <div class="Cal-Status">   
                                <div>Closed</div>
                            </div>
                        </button>

                        <button class="Cal-btn-selected" v-else-if= "chooseDate == data.dayAndWeek"
                            :id="'date' + data.dayAndWeek" @click="clickDate(data.dayAndWeek, data.yearAndMonth)">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div><!-- !data.closed && !data.holiday -->
                            <div class="Cal-Status">
                                <div v-if="chooseDate == data.dayAndWeek" style="color: #ffffff " >Selected</div>
                                <div v-else-if="data.holiday" style="color: red " >Holiday</div>
                            </div>
                        </button>
                        
                        <button class="Cal-btn-normal" v-else-if="!data.chooseDate" 
                            :id="'date' + data.dayAndWeek" @click="clickDate(data.dayAndWeek, data.yearAndMonth)">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div>
                            <div  class="Cal-Status">
                                <div v-if="chooseDate == data.dayAndWeek" style="color:#ffffff;">Selected</div>
                                <div v-else-if="data.holiday" style="color: red"  >Holiday</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">SESSION DURATION:</div>
            </div>
            <div v-if="this.numOfHours != 1" class="dateOfTime">
                <button class="Cal-btn-normal" style="border: 1px solid grey;" variant="primary" @click="clickHour(1)">
                    <span class="Cal-Date" style="width: 100%">1 Hour</span>
                </button>
            </div>
            <div v-else class="dateOfTime">
                <button class="Cal-btn-selected" style="border: 1px solid grey;" variant="primary" @click="clickHour(1)">
                    <span class="Cal-Date" style="width: 100%">1 Hour</span>
                </button>
            </div>
            <div v-if="this.numOfHours != 2" class="dateOfTime">
                <button class="Cal-btn-normal" style="border: 1px solid grey;" variant="primary" @click="clickHour(2)">
                    <span class="Cal-Date" style="width: 100%">2 Hours</span>
                </button>
            </div>
            <div v-else class="dateOfTime">
                <button class="Cal-btn-selected" style="border: 1px solid grey;" variant="primary" @click="clickHour(2)">
                    <span class="Cal-Date" style="width: 100%">2 Hours</span>
                </button>
            </div>
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
                            <th colspan="4">Night</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td v-for="time in morningPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
                                </div>
                            </td>
                            <td v-for="time in afternoonPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
                                </div>
                            </td>
                            <td v-for="time in nightPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="time.name" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
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
                chooseDate: null,
                currentDateTime: null,
                numOfHours: 1,
                morningPeriod: null,
                afternoonPeriod: null,
                nightPeriod: null,
                selectedHours: [],
                checkbox:null
            }
        },
        props: [ 'dateTimeChoosePage' ],
        methods: {
            async clickDate(dayAndWeek, yearAndMonth) {
                this.$store.commit('selectedDateOfUse', dayAndWeek.substring(4) + ' ' + yearAndMonth);

                this.selectedHours = [];
                
                if (this.chooseDate != dayAndWeek) {
                    let checkboxes = this.$refs.checkbox;
                    for (let checkbox of checkboxes) {
                        checkbox.checked = false;
                        checkbox.disabled = false;
                    }

                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession2Time', null);
                    this.chooseDate = dayAndWeek;
                }

                this.$emit('checkComplete');
            },

            async clickHour(hourTime) {
                this.$store.commit('selectedHour', hourTime);

                this.selectedHours = [];
                
                if (this.numOfHours != hourTime) {
                    let checkboxes = document.getElementsByClassName('checkbox');
                    for (let checkbox of checkboxes) {
                        checkbox.checked = false;
                        checkbox.disabled = false;
                    }
                    
                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession2Time', null);
                    this.numOfHours = hourTime;
                }

                this.$emit('checkComplete');
            },

            addRemoveHour(time) {
                let hour = parseInt(time.substring(0, 2));
                let index = this.selectedHours.indexOf(hour);
                let checkboxes = document.getElementsByClassName('checkbox');
                let maxSelections = 3 - this.$store.state.selectedHour;

                if (index == -1) {
                    this.selectedHours.push(hour);
                    if (this.selectedHours.length >= maxSelections) {
                        for (let checkbox of checkboxes) {
                            if (!checkbox.checked) {
                                checkbox.disabled = true;
                            }
                        }
                    }
                    
                    if (maxSelections == 1) {
                        this.$store.commit('selectedSession1Time', ('0' + hour).slice(-2) + ':00-' + ('0' + (hour + 2)).slice(-2) + ':00');
                    } else if (maxSelections == 2 && this.selectedHours.length == 1) {
                        this.$store.commit('selectedSession1Time', ('0' + hour).slice(-2) + ':00-' + ('0' + (hour + 1)).slice(-2) + ':00');
                    } else if (maxSelections == 2 && this.selectedHours.length == 2) {
                        if (this.selectedHours[0] > this.selectedHours[1]) {
                            [this.selectedHours[0], this.selectedHours[1]] = [this.selectedHours[1], this.selectedHours[0]];
                        }
                        this.$store.commit('selectedSession1Time', ('0' + this.selectedHours[0]).slice(-2) + ':00-' + ('0' + (this.selectedHours[0] + 1)).slice(-2) + ':00');
                        this.$store.commit('selectedSession2Time', ('0' + this.selectedHours[1]).slice(-2) + ':00-' + ('0' + (this.selectedHours[1] + 1)).slice(-2) + ':00');
                    }
                } else {
                    this.selectedHours.splice(index, 1);

                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession2Time', null);
                    if (maxSelections == 2 && this.selectedHours.length > 0) {
                        this.$store.commit('selectedSession1Time', ('0' + this.selectedHours[0]).slice(-2) + ':00-' + ('0' + (this.selectedHours[0] + 1)).slice(-2) + ':00');
                    }

                    for (let checkbox of checkboxes) {
                        checkbox.disabled = false;
                    }
                }

                this.$emit('checkComplete');
            },

            getCurrentDateTime() {
                const current = new Date();
                const monthArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
                const date = monthArray[current.getMonth()] + ' ' + current.getFullYear();
                return date;
            },

            resetPage() {
                for (let i = 0; i < this.dateOfUse.length; i++) {
                    if (!this.dateOfUse[i].close) {
                        this.$store.commit('selectedDateOfUse', (this.dateOfUse[i].dayAndWeek).substring(4) + ' ' + this.dateOfUse[i].yearAndMonth);
                        this.chooseDate = this.dateOfUse[i].dayAndWeek;
                        break;
                    }
                }

                this.$store.commit('selectedHour', 1);
                this.numOfHours = 1;

                this.$store.commit('selectedSession1Time', null);
                this.$store.commit('selectedSession2Time', null);
                this.selectedHours = [];
                for (let checkbox of this.$refs.checkbox) {
                    checkbox.checked = false;
                    checkbox.disabled = false;
                }
            }
        },
        async created() {
            this.dateOfUse = (await getDateOfUse(1)).data.data;

            this.dateOfUse[1].close = false; // 臨時代碼
            this.dateOfUse[2].close = false; // 臨時代碼
            this.dateOfUse[3].close = false; // 臨時代碼
            this.dateOfUse[4].close = false; // 臨時代碼
            this.dateOfUse[5].close = false; // 臨時代碼
            this.dateOfUse[3].holiday = true; // 臨時代碼

            for (let i = 0; i < this.dateOfUse.length; i++) {
                if (!this.dateOfUse[i].close) {
                    this.$store.commit('selectedDateOfUse', (this.dateOfUse[i].dayAndWeek).substring(4) + ' ' + this.dateOfUse[i].yearAndMonth);
                    this.chooseDate = this.dateOfUse[i].dayAndWeek;
                    break;
                }
            }
            this.$store.commit('selectedHour', 1);
            this.$store.commit('selectedSession1Time', null);
            this.$store.commit('selectedSession2Time', null);
        },
        async mounted() {
            this.currentDateTime = this.getCurrentDateTime();
            this.morningPeriod = MorningPeriod.value;
            this.afternoonPeriod = AfternoonPeriod.value;
            this.nightPeriod = NightPeriod.value;

            //let dateButton = document.getElementById('date' + this.$store.state.selectedDateOfUse);
            //dateButton.style.color = var(--primary);

            let checkboxes = document.getElementsByClassName('checkbox');
            for (var checkbox of checkboxes) {
                checkbox.checked = false;
            }
        }
    }

    import { ref } from 'vue'

    const MorningPeriod = ref([
        {
            id: 0,
            name: '09:00'
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

/*.dateOfTime{
    display: flex;
    align-items:center;
    flex-direction:row;
}*/

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