<template>
<div class="WorkstationGroup">WorkstationGroupmob</div>

</template>

<script>

    import {
        mixins
    } from '@/common/mixins'
    export default {
        name: 'WorkstationGroup',
        data() {
            return {
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