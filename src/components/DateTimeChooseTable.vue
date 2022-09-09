<template>
    <b-container>
        <div class="p-order">
            <div class="firstHeader">
                <div class="firstfont">DATE OF USE</div>
                <div class="secondfont" style="padding: 10px 0px 0px 0px; margin: 0px;">{{ currentDateTime }}</div>
            </div>
            <div class="Calendar-group">
                <div v-for="(data, index) in dateOfUseList" :key="index">
                    <div class="dateOfTime">
                        <button class="Cal-btn-close" v-if="data.close" :id="'date' + data.dayAndWeek" :ref="'date' + data.dayAndWeek">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div>
                            <div class="Cal-Status">   
                                <div>Closed</div>
                            </div>
                        </button>

                        <button class="Cal-btn-selected" v-else-if= "chooseDate == data.dayAndWeek.substring(4) + ' ' + data.yearAndMonth"
                            :id="'date' + data.dayAndWeek" :ref="'date' + data.dayAndWeek" @click="clickDate(data.dayAndWeek, data.yearAndMonth)">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div><!-- !data.closed && !data.holiday -->
                            <div class="Cal-Status">
                                <div v-if="chooseDate == data.dayAndWeek.substring(4) + ' ' + data.yearAndMonth" style="color: #ffffff;">Selected</div>
                                <div v-else-if="data.holiday" style="color: red;">Holiday</div>
                            </div>
                        </button>
                        
                        <button class="Cal-btn-normal" v-else-if="!data.chooseDate" 
                            :id="'date' + data.dayAndWeek" :ref="'date' + data.dayAndWeek" @click="clickDate(data.dayAndWeek, data.yearAndMonth)">
                            <div>
                                <span class="Cal-Date">{{ data.date }}</span>
                                <span class="Cal-Day">{{ data.day }}</span>
                            </div>
                            <div class="Cal-Status">
                                <div v-if="chooseDate == data.dayAndWeek.substring(4) + ' ' + data.yearAndMonth" style="color:#ffffff;">Selected</div>
                                <div v-else-if="data.holiday" style="color: red">Holiday</div>
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
            <div v-if="isLoading"><b>Loading</b></div>
            <b-button-group v-else class="TimePeriod-group">
                <table>
                    <!--<thead>
                        <tr>
                            <th colspan="4">Morning</th>
                            <th colspan="5">Afternoon</th>
                            <th colspan="4">Night</th>
                        </tr>
                    </thead>-->
                    <tbody>
                        <!--<tr>
                            <td v-for="time in morningPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="parseInt(time.name.substring(0, 2))" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
                                </div>
                            </td>
                            <td v-for="time in afternoonPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="parseInt(time.name.substring(0, 2))" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
                                </div>
                            </td>
                            <td v-for="time in nightPeriod" :key="time.id" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time.name }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time.name" :value="parseInt(time.name.substring(0, 2))" class="checkbox" ref="checkbox" @change="addRemoveHour(time.name)" />
                                </div>
                            </td>
                        </tr>-->
                        <tr v-if="sessionList.length > 0">
                            <td v-for="time in sessionList" :key="time" v-bind:id="'timeRange' + time">
                                <div class="timeRange">{{ time + ':00' }}</div>
                                <div align="center">
                                    <input type="checkbox" :name="time" :value="time" class="checkbox" ref="checkbox" @change="addRemoveHour(time)" />
                                </div>
                            </td>
                        </tr>
                        <tr v-else>
                            <td>No available session</td>
                        </tr>
                    </tbody>
                </table>
            </b-button-group>
        </div>
    </b-container>
</template>

<script>
    import { getDateOfUse, getLibraryTimeSlot } from '@/service/test.js'
    export default {
        name: 'DateTimeChooseTable',
        data() {
            return {
                active: false,
                dateOfUseList: null,
                isShow:false,
                chooseDate: null,
                currentDateTime: null,
                numOfHours: 1,
                morningPeriod: null,
                afternoonPeriod: null,
                nightPeriod: null,
                selectedHours: [],
                checkbox: null,
                sessionList: null,
                isLoading: false,
            }
        },
        props: [ 'dateTimeChoosePage' ],
        methods: {
            async resetCheckboxes(isGetLibraryTimeSlot) {
                this.selectedHours = [];

                if (this.$refs.checkbox) {
                    for (let checkbox of this.$refs.checkbox) {
                        checkbox.checked = false;
                        checkbox.disabled = false;
                    }
                }

                this.$store.commit('selectedSession1Time', null);
                this.$store.commit('selectedSession1Group', null);
                this.$store.commit('selectedSession1Workstation', null);
                this.$store.commit('selectedSession1WorkstationId', null);
                this.$store.commit('selectedSession1WorkstationGrid', null);
                this.$store.commit('selectedSession2Time', null);
                this.$store.commit('selectedSession2Group', null);
                this.$store.commit('selectedSession2Workstation', null);
                this.$store.commit('selectedSession2WorkstationId', null);
                this.$store.commit('selectedSession2WorkstationGrid', null);
                this.$store.commit('listGroup', null);
                this.$store.commit('defaultWorkstation', null);

                if (isGetLibraryTimeSlot) {
                    let bookingDateStr = (new Date(this.chooseDate)).getFullYear() + '-' +
                                     ('0' + ((new Date(this.chooseDate)).getMonth() + 1)).slice(-2) + '-' +
                                     ('0' + (new Date(this.chooseDate)).getDate()).slice(-2);
                
                    this.isLoading = true;
                    let timeSlot = (await getLibraryTimeSlot(bookingDateStr, 
                                                            this.$store.state.selectedWorkstationFeatureId,
                                                            this.$store.state.selectedHour,
                                                            this.$store.state.languageId,
                                                            this.$store.state.selectedLibraryId,
                                                            this.$store.state.selectedWorkstationTypeId) 
                                ).data.data;
                    this.isLoading = false;

                    this.sessionList = [];
                    for (let i = 0; i < timeSlot.length; i++) {
                        if (timeSlot[i].status == 1) {
                            this.sessionList.push(parseInt(timeSlot[i].startTimeSlot.substring(0, 2)));
                        }
                    }
                }

                this.$store.commit('sessionList', this.sessionList);
            },

            clickDate(dayAndWeek, yearAndMonth) {
                if (this.chooseDate != dayAndWeek) {
                    this.$store.commit('selectedDateOfUse', dayAndWeek.substring(4) + ' ' + yearAndMonth);
                    this.$store.commit('sessionList', null);
                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession1Group', null);
                    this.$store.commit('selectedSession1Workstation', null);
                    this.$store.commit('selectedSession1WorkstationId', null);
                    this.$store.commit('selectedSession1WorkstationGrid', null);
                    this.$store.commit('selectedSession2Time', null);
                    this.$store.commit('selectedSession2Group', null);
                    this.$store.commit('selectedSession2Workstation', null);
                    this.$store.commit('selectedSession2WorkstationId', null);
                    this.$store.commit('selectedSession2WorkstationGrid', null);
                    this.$store.commit('listGroup', null);
                    this.$store.commit('defaultWorkstation', null);

                    this.chooseDate = dayAndWeek.substring(4) + ' ' + yearAndMonth;
                    this.resetCheckboxes(true);
                    this.$emit('checkComplete', 'dateTimeChoosePage');
                }
            },

            clickHour(numOfHours) {
                if (this.numOfHours != numOfHours) {
                    this.$store.commit('selectedHour', numOfHours);
                    this.$store.commit('sessionList', null);
                    this.$store.commit('selectedSession1Time', null);
                    this.$store.commit('selectedSession1Group', null);
                    this.$store.commit('selectedSession1Workstation', null);
                    this.$store.commit('selectedSession1WorkstationId', null);
                    this.$store.commit('selectedSession1WorkstationGrid', null);
                    this.$store.commit('selectedSession2Time', null);
                    this.$store.commit('selectedSession2Group', null);
                    this.$store.commit('selectedSession2Workstation', null);
                    this.$store.commit('selectedSession2WorkstationId', null);
                    this.$store.commit('selectedSession2WorkstationGrid', null);
                    this.$store.commit('listGroup', null);
                    this.$store.commit('defaultWorkstation', null);

                    this.numOfHours = numOfHours;
                    this.resetCheckboxes(true);
                    this.$emit('checkComplete', 'dateTimeChoosePage');
                }
            },

            addRemoveHour(hour) {
                this.$store.commit('selectedSession1Group', null);
                this.$store.commit('selectedSession1Workstation', null);
                this.$store.commit('selectedSession1WorkstationId', null);
                this.$store.commit('selectedSession1WorkstationGrid', null);
                this.$store.commit('selectedSession2Group', null);
                this.$store.commit('selectedSession2Workstation', null);
                this.$store.commit('selectedSession2WorkstationId', null);
                this.$store.commit('selectedSession2WorkstationGrid', null);
                this.$store.commit('listGroup', null);
                this.$store.commit('defaultWorkstation', null);

                let index = this.selectedHours.indexOf(hour);

                if (index == -1) { // 添加時間
                    this.selectedHours.push(hour);
                    
                    if (this.numOfHours == 2) {
                        if (this.sessionList.indexOf(hour + 1) != -1) {
                            this.$store.commit('selectedSession1Time', ('0' + hour).slice(-2) + ':00-' + ('0' + (hour + 2)).slice(-2) + ':00');
                            this.selectedHours.push(hour + 1);
                            if (this.$refs.checkbox) {
                                for (let checkbox of this.$refs.checkbox) {
                                    if (checkbox.value == hour + 1) {
                                        checkbox.checked = true;
                                        break;
                                    }
                                }
                            }
                        } else {
                            this.$store.commit('selectedSession1Time', ('0' + (hour - 1)).slice(-2) + ':00-' + ('0' + (hour + 1)).slice(-2) + ':00');
                            this.selectedHours.push(hour - 1);
                            [this.selectedHours[0], this.selectedHours[1]] = [this.selectedHours[1], this.selectedHours[0]];
                            if (this.$refs.checkbox) {
                                for (let checkbox of this.$refs.checkbox) {
                                    if (checkbox.value == hour - 1) {
                                        checkbox.checked = true;
                                        break;
                                    }
                                }
                            }
                        }
                        
                    } else if (this.numOfHours == 1) {
                        if (this.selectedHours.length == 1){
                            this.$store.commit('selectedSession1Time', ('0' + hour).slice(-2) + ':00-' + ('0' + (hour + 1)).slice(-2) + ':00');
                        } else if (this.selectedHours.length == 2) {
                            if (this.selectedHours[0] > this.selectedHours[1]) {
                                [this.selectedHours[0], this.selectedHours[1]] = [this.selectedHours[1], this.selectedHours[0]];
                            }
                            this.$store.commit('selectedSession1Time', ('0' + this.selectedHours[0]).slice(-2) + ':00-' + ('0' + (this.selectedHours[0] + 1)).slice(-2) + ':00');
                            this.$store.commit('selectedSession2Time', ('0' + this.selectedHours[1]).slice(-2) + ':00-' + ('0' + (this.selectedHours[1] + 1)).slice(-2) + ':00');
                        }
                    }

                    if (this.selectedHours.length >= 2) {
                        if (this.$refs.checkbox) {
                            for (let checkbox of this.$refs.checkbox) {
                                if (!checkbox.checked) {
                                    checkbox.disabled = true;
                                }
                            }
                        }
                    }
                } else { // 取消時間
                    if (this.numOfHours == 1 && this.selectedHours.length > 1) {
                        this.selectedHours.splice(index, 1);
                        this.$store.commit('selectedSession1Time', ('0' + this.selectedHours[0]).slice(-2) + ':00-' + ('0' + (this.selectedHours[0] + 1)).slice(-2) + ':00');
                        this.$store.commit('selectedSession2Time', null);
                        if (this.$refs.checkbox) {
                            for (let checkbox of this.$refs.checkbox) {
                                checkbox.disabled = false;
                            }
                        }
                    } else {
                        this.resetCheckboxes(false);
                    }
                }

                this.$emit('checkComplete', 'dateTimeChoosePage');
            },

            getCurrentDateTime() {
                const current = new Date();
                const monthArray = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
                const date = monthArray[current.getMonth()] + ' ' + current.getFullYear();
                return date;
            },

            resetPage() {
                for (let i = 0; i < this.dateOfUseList.length; i++) {
                    if (!this.dateOfUseList[i].close) {
                        this.$store.commit('selectedDateOfUse', (this.dateOfUseList[i].dayAndWeek).substring(4) + ' ' + this.dateOfUseList[i].yearAndMonth);
                        this.chooseDate = (this.dateOfUseList[i].dayAndWeek).substring(4) + ' ' + this.dateOfUseList[i].yearAndMonth;
                        break;
                    }
                }

                this.$store.commit('selectedHour', 1);
                this.numOfHours = 1;

                this.resetCheckboxes(true);
                
                this.$emit('checkComplete', 'dateTimeChoosePage');
            },

            initializePage() {
                if (this.$store.state.selectedDateOfUse) {
                    this.chooseDate = this.$store.state.selectedDateOfUse;
                    this.dateOfUseList = this.$store.state.dateOfUseList;

                    if (this.$store.state.selectedHour) {
                        this.numOfHours = this.$store.state.selectedHour;

                        if (this.$store.state.selectedSession1Time) {
                            this.selectedHours.push(parseInt(this.$store.state.selectedSession1Time.substring(0, 2)));

                            if (this.numOfHours == 1) {
                                if (this.$store.state.selectedSession2Time) {
                                    this.selectedHours.push(parseInt(this.$store.state.selectedSession2Time.substring(0, 2)));
                                }
                            } else if (this.numOfHours == 2) {
                                this.selectedHours.push(parseInt(this.$store.state.selectedSession1Time.substring(0, 2)) + 1);
                            }
                            
                            this.$emit('checkComplete', 'dateTimeChoosePage');
                        }
                    }
                }

                return Promise.resolve('');
            }
        },
        async created() {
            if (!this.$store.state.selectedDateOfUse) {
                this.dateOfUseList = (await getDateOfUse(this.$store.state.selectedLibraryId)).data.data;

                this.dateOfUseList[1].close = false; // 臨時代碼
                this.dateOfUseList[2].close = false; // 臨時代碼
                this.dateOfUseList[3].close = false; // 臨時代碼
                this.dateOfUseList[4].close = false; // 臨時代碼
                this.dateOfUseList[5].close = false; // 臨時代碼
                this.dateOfUseList[3].holiday = true; // 臨時代碼

                for (let i = 0; i < this.dateOfUseList.length; i++) {
                    if (!this.dateOfUseList[i].close) {
                        this.$store.commit('selectedDateOfUse', (this.dateOfUseList[i].dayAndWeek).substring(4) + ' ' + this.dateOfUseList[i].yearAndMonth);
                        this.chooseDate = (this.dateOfUseList[i].dayAndWeek).substring(4) + ' ' + this.dateOfUseList[i].yearAndMonth;
                        break;
                    }
                }

                this.$store.commit('dateOfUseList', this.dateOfUseList);
                this.$store.commit('selectedSession1Time', null);
                this.$store.commit('selectedSession2Time', null);
            } else {
                this.chooseDate = this.$store.state.selectedDateOfUse;
            }

            if (!this.$store.state.selectedHour) {
                this.$store.commit('selectedHour', 1);
                this.numOfHours = 1;

                this.$store.commit('selectedSession1Time', null);
                this.$store.commit('selectedSession2Time', null);
            }
            
            if (!this.$store.state.sessionList) {
                let bookingDateStr = (new Date(this.chooseDate)).getFullYear() + '-' +
                                     ('0' + ((new Date(this.chooseDate)).getMonth() + 1)).slice(-2) + '-' +
                                     ('0' + (new Date(this.chooseDate)).getDate()).slice(-2);

                let timeSlot = (await getLibraryTimeSlot(bookingDateStr, 
                                                         this.$store.state.selectedWorkstationFeatureId,
                                                         this.$store.state.selectedHour,
                                                         this.$store.state.languageId,
                                                         this.$store.state.selectedLibraryId,
                                                         this.$store.state.selectedWorkstationTypeId) 
                               ).data.data;

                this.sessionList = [];
                for (let i = 0; i < timeSlot.length; i++) {
                    if (timeSlot[i].status == 1) {
                        this.sessionList.push(parseInt(timeSlot[i].startTimeSlot.substring(0, 2)));
                    }
                }

                this.$store.commit('sessionList', this.sessionList);
            } else {
                this.sessionList = this.$store.state.sessionList;
            }
        },
        mounted() {
            this.currentDateTime = this.getCurrentDateTime();
            this.morningPeriod = MorningPeriod.value;
            this.afternoonPeriod = AfternoonPeriod.value;
            this.nightPeriod = NightPeriod.value;

            if (this.$store.state.selectedDateOfUse) {
                this.initializePage().then(val => {
                    console.log(val);

                    this.dateOfUseList[1].close = false; // 臨時代碼
                    this.dateOfUseList[2].close = false; // 臨時代碼
                    this.dateOfUseList[3].close = false; // 臨時代碼
                    this.dateOfUseList[4].close = false; // 臨時代碼
                    this.dateOfUseList[5].close = false; // 臨時代碼
                    this.dateOfUseList[3].holiday = true; // 臨時代碼

                    this.chooseDate = this.$store.state.selectedDateOfUse;
                    if (this.$refs.checkbox) {
                        for (let checkbox of this.$refs.checkbox) {
                            if (checkbox.value == this.selectedHours[0] || checkbox.value == this.selectedHours[1]) {
                                checkbox.checked = true;
                            }
                        }
                    }

                    if (this.selectedHours.length >= 2) {
                        if (this.$refs.checkbox) {
                            for (let checkbox of this.$refs.checkbox) {
                                if (!checkbox.checked) {
                                    checkbox.disabled = true;
                                }
                            }
                        }
                    }
                });
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