<template>
  <div v-if="this.listGroup">
    <div class="workStationGroupFieldTitle" id="workstationGroupSessionTime">SESSION 1 : {{ this.$store.state.selectedSession1Time }}</div>

    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="12">
          <table class="workstationGroupSessionDetails">
            <thead>
              <tr>
                <th></th>
                <th>WORKSTATION GROUP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="session1Group in this.listGroup.session1Group" :key="session1Group.groupId" v-bind:id="'session1Group' + session1Group.groupId">
                <td align="center">
                  <input type="radio" class="workstationGroupRadioButton" name="location1" :ref="'session1Group' + session1Group.groupId" @click="setSession1WorkstationGroup(session1Group.groupId)" />
                </td>
                <td>{{ session1Group.floorNum + ' ' + session1Group.groupName }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>

    <div v-if="this.$store.state.selectedSession2Time" style="padding: 10px;"></div>

    <div v-if="this.$store.state.selectedSession2Time" class="workStationGroupFieldTitle" id="workstationGroupSessionTime">SESSION 2 : {{ this.$store.state.selectedSession2Time }}</div>

    <b-container v-if="this.$store.state.selectedSession2Time" class="bv-example-row" fluid>
      <b-row>
        <b-col cols="12">
          <table class="workstationGroupSessionDetails">
            <thead>
              <tr>
                <th></th>
                <th>WORKSTATION GROUP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="session2Group in this.listGroup.session2Group" :key="session2Group.groupId" v-bind:id="'session2Group' + session2Group.groupId">
                <td align="center">
                  <input type="radio" class="workstationGroupRadioButton" name="location2" :ref="'session2Group' + session2Group.groupId" @click="setSession2WorkstationGroup(session2Group.groupId)" />
                </td>
                <td>{{ session2Group.floorNum + ' ' + session2Group.groupName }}</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import { queryGroup } from '@/service/test.js'

  export default {
    name: 'WorkstationGroupTable',
    data() {
      return {
        walkInBookingChooseTimeVO: {},
        listGroup: null
      }
    },
    props: [ 'workstationGroupPage' ],
    methods: {
      setSession1WorkstationGroup(groupId) {
        this.$store.commit('selectedSession1Workstation', null);

        for (let i = 0; i < this.listGroup.session1Group.length; i++) {
          if (this.listGroup.session1Group[i].groupId == groupId) {
            this.$store.commit('selectedSession1Group', this.listGroup.session1Group[i]);
            break;
          }
        }

        this.$emit('checkComplete', 'workstationGroupPage');
      },

      setSession2WorkstationGroup(groupId) {
        this.$store.commit('selectedSession2Workstation', null);

        for (let i = 0; i < this.listGroup.session2Group.length; i++) {
          if (this.listGroup.session2Group[i].groupId == groupId) {
            this.$store.commit('selectedSession2Group', this.listGroup.session2Group[i]);
            break;
          }
        }
        
        this.$emit('checkComplete', 'workstationGroupPage');
      },

      resetPage() {
        if (this.$store.state.selectedSession1Group) {
          (this.$refs['session1Group' + this.$store.state.selectedSession1Group.groupId])[0].checked = false;
        }
        if (this.$store.state.selectedSession2Group) {
          (this.$refs['session2Group' + this.$store.state.selectedSession2Group.groupId])[0].checked = false;
        }

        this.$store.commit('selectedSession1Group', null);
        this.$store.commit('selectedSession2Group', null);
                        
        this.$emit('checkComplete', 'workstationGroupPage');
      },

      initializePage() {
        this.$emit('checkComplete', 'workstationGroupPage');

        return Promise.resolve('');
      }
    },
    async created() {
      if (!this.$store.state.listGroup) {
        this.listGroup = (await queryGroup(this.$store.state.selectedDateOfUse,
                                           this.$store.state.selectedWorkstationFeatureId,
                                           this.$store.state.selectedWorkstationLanguageId,
                                           this.$store.state.selectedLibraryId,
                                           this.$store.state.selectedSession1Time,
                                           this.$store.state.selectedSession2Time,
                                           this.$store.state.selectedWorkstationTypeId,
                                           this.walkInBookingChooseTimeVO)  
                         ).data.data;
        this.$store.commit('listGroup', this.listGroup);
      } else {
        this.listGroup = this.$store.state.listGroup;
      }
    },
    mounted() {
      if (this.$store.state.selectedSession1Group || this.$store.state.selectedSession2Group) {
        this.initializePage().then(val => {
          console.log(val);

          if (this.$store.state.selectedSession1Group) {
            (this.$refs['session1Group' + this.$store.state.selectedSession1Group.groupId])[0].checked = true;
          }

          if (this.$store.state.selectedSession2Group) {
            (this.$refs['session2Group' + this.$store.state.selectedSession2Group.groupId])[0].checked = true;
          }
        });
      }
    }
  }

/*export default {
  name: 'WorkstationGroupTable',
  data(){
    return {
      columns: [
        {
          label: 'Workstation Group',
          field: 'WorkstationGroup',
        },
        {
          label: 'Status',
          field: 'Status',
        },
        {
          label: 'T.Chinese',
          field: 'TChinese',
          type: 'number',
        },
          // dateInputFormat: 'yyyy-MM-dd',
          // dateOutputFormat: 'MMM do yy',
        {
          label: 'English',
          field: 'English',
          type: 'number',
        },
      ],
      rows: [
        { id: 1, WorkstationGroup: "John", Status: 20, TChinese: '2011-10-31', English: 0.03343 },
        { id: 2, WorkstationGroup: "Jane", Status: 24, TChinese: '2011-10-31', English: 0.03343 },
        { id: 3, WorkstationGroup: "Susan", Status: 16, TChinese: '2011-10-30', English: 0.03343 },
        { id: 4, WorkstationGroup: "Chris", Status: 55, TChinese: '2011-10-11', English: 0.03343 },
        { id: 5, WorkstationGroup: "Dan", Status: 40, TChinese: '2011-10-21', English: 0.03343 },
        { id: 6, WorkstationGroup: "John", Status: 20, TChinese: '2011-10-31', English: 0.03343 },
      ],
    };
  },
};*/
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.workStationGroupFieldTitle {
    color: #096BCC;
    font-weight: bold;
}

#workstationGroupSessionTime {
    padding-left: 15px;
    padding-right: 15px;
    padding-bottom: 5px;
}

.workstationGroupSessionDetails {
    width: 100%;
}

.workstationGroupSessionDetails tr {
    height: 30px;
}

.workstationGroupSessionDetails tr:nth-child(odd) {
    background-color: white;
}

.workstationGroupSessionDetails tr:nth-child(even) {
    background-color: #F3F3F3;
}

.workstationGroupSessionDetails th {
    background-color: #676767;
    color: white;
    padding-left: 0px;
    padding-right: 0px;
}

.workstationGroupSessionDetails td {
    font-weight: bold;
    vertical-align: middle;
    border-bottom: 1px dotted #BBBBBB;
}

.workstationGroupSessionDetails td:nth-child(odd) {
    width: 50px;
}

.workstationGroupRadioButton {
    width: 18px;
    height: 18px;
    margin-top: 6px;
}

</style>
