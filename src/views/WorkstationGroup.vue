<template>
<div class="WorkstationGroup">WorkstationGroup</div>
</template>

<script>
    import {
        mixins
    } from '@/common/mixins'

    export default {
        name: 'WorkstationGroup',
        data() {
            return {
                districtList: null,
                districtname: null,
                allLibrariesList: null,
                libraryResult: null,
                isShow: true
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {

    }}
</script>

<style scoped>
</style>