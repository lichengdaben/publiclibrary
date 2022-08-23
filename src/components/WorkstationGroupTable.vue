<template>
<div>
<vue-good-table :columns="columns" :rows="rows" :options="options" >
</vue-good-table>
</div>
</template>

<script>
export default {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
