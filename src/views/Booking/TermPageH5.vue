<template>
    <div class="TermPageH5" style="height: calc(100vh - 84px);">
        <b-container class="bv-example-row" id="container-DTC" fluid>
            <NavBarCoU />
            <b-row cols="12" id="cfm_nav_title">
                <b-col cols="12" style="height: calc(100vh - 184px);">
                    <div class="cfm_cou_contentbody">{{ termOfUse.couContent }}</div>
                </b-col>
            </b-row>
            <b-row align-v="space-around" class="footer">
                <b-col cols="12">
                    <button type="button" class="buttonNextCou" ref="buttonNextCou" disabled="true" style="float: right;" @click='jumpToAccept()'>
                        Accept and Continue
                        <font-awesome-icon icon="fas fa-right-long" />
                    </button>
                </b-col>
            </b-row>
        </b-container>
        <div style="height: 100px;"></div>
        <PageFooter />
    </div>
</template>

<script>
    import { couAdvancedBooking } from '@/service/test.js'
    import { mixins } from '@/common/mixins'
    import PageFooter from '@/components/PageFooter.vue'
    import NavBarCoU from '@/components/NavBarCoU.vue'

    export default {
        name: 'TermPageH5',
        components:{
            PageFooter,
            NavBarCoU
        },
        data() {
            return {
                termOfUse: null
            }
        },
        mixins: [mixins],
        props: {
            msg: String
        },
        methods: {
            jumpToAccept() {
                this.$store.commit('isReadTerm', true);
                this.$router.push('/workstationbooking/SelectLocation');
            },

            async initializePage() {
                this.termOfUse = (await couAdvancedBooking()).data.data;

                return Promise.resolve('');
            }
        },
        mounted() {
            this.initializePage().then(val => {
                console.log(val);
                this.$refs.buttonNextCou.disabled = false;
            });
        }
    }
</script>

<style scoped>
</style>