<template>
  <div>
    <div class="workStationGroupFieldTitle" id="workstationGroupSessionTime">SESSION 1 : 10:00-11:00</div>

    <b-container class="bv-example-row" fluid>
      <b-row>
        <b-col cols="12">
          <table id="workstationGroupSessionDetails">
            <thead>
              <tr>
                <th></th>
                <th>WORKSTATION GROUP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td align="center"><input type="radio" class="workstationGroupRadioButton" name="location" value="G"/></td>
                <td>G/F UE Hall Workstation</td>
              </tr>
              <tr>
                <td align="center"><input type="radio" class="workstationGroupRadioButton" name="location" value="2"/></td>
                <td>2/F Chlildren's Library Workstation</td>
              </tr>
              <tr>
                <td align="center"><input type="radio" class="workstationGroupRadioButton" name="location" value="3"/></td>
                <td>3/F Adult Lending Library Workstation</td>
              </tr>
            </tbody>
          </table>
        </b-col>
      </b-row>
    </b-container>

    <!--<vue-good-table :columns="columns" :rows="rows" :options="options" >
    </vue-good-table>-->
  </div>
</template>

<script>
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
</style>
