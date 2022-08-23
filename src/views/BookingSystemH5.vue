<template>
<div class="BookingSystemH5">
<div>
    <b-container class="bv-example-row" id="container-DTC" fluid>             
    </b-container>
</div>
</div>
</template>


<script>
    import {  mixins } from '@/common/mixins'
    export default {
        name: 'BookingSystem',
        data() {
            return {
                active: false,
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