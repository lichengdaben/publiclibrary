<template>
<div class="TermPageH5">
<div>i am term</div>
</div>
</template>

<script>
import { mixins } from '@/common/mixins'


export default {
  name: 'TermPageH5',
  data(){
    return {
        districtList:null,
        allLibrariesList: null,
        libraryResult:null,
    }
  },
  mixins: [mixins],
  props: {
    msg: String
  },
  computed: {
  },
  methods: {
       
  },

}   







</script>

<style scoped>
</style>
