<template>
    <div class="BookingConfirmation">BookingConfirmation</div>
</template>
<script>
    import {
        mixins
    } from '@/common/mixins'

    export default {
        name: 'BookingConfirmation',
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