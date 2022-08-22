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
          field: 'WorkstationGroup ',
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
        { id:1, name:"John", age: 20, createdAt: '2011-10-31',score: 0.03343 },
        { id:2, name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
        { id:3, name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
        { id:4, name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
        { id:5, name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
        { id:6, name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
