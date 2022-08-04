<template>
    <div class="DateTimeChoose">DateTimeChoose</div>
</template>

<script>
    import {
        mixins
    } from '@/common/mixins'

    export default {
        name: 'DateTimeChoose',
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