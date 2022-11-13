<template>
    <div class="DateTimeChoose">
        <div style="overflow-y: auto; height: calc(100vh - 84px);">
            <b-container class="bv-example-row" id="container-DTC" fluid>
                <MenuBar/>
                <NavBar/>
                <b-row>
                    <b-col cols="3" class="left-menu">
                        <LeftMenu />
                    </b-col>
                    <b-col cols="9" class="right-content">
                        <DateTimeChooseTable />
                    </b-col>
                </b-row>
            </b-container>
            <div style="height: 100px;"></div>
            <PageFooter ref="pageFooterSection" />
        </div>
    </div>
</template>

<script>
    import MenuBar from '@/components/MenuBar.vue'
    import NavBar from '@/components/NavBar.vue'
    import LeftMenu from '@/components/LeftMenu.vue'
    import DateTimeChooseTable from '@/components/DateTimeChooseTable.vue'
    import PageFooter from '@/components/PageFooter.vue'

    export default {
        name: 'DateTimeChoose',
        components: {
            MenuBar,
            NavBar,
            LeftMenu,
            DateTimeChooseTable,
            PageFooter
        },
        data() {
            return {
            }
        },
        props: {
            msg: String
        },
        methods: {
          
    }}
</script>

<style scoped>

</style>