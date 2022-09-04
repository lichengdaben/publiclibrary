<template>
    <ul>
        <li>
            <div class="firstHeader">
                <div class="firstfont">DISTRICT:</div>
                <div class="secondfont">{{ this.$store.state.selectedDistrict }}</div>
            </div>
        </li>
        <li>
            <div class="firstHeader">
                <div class="firstfont">LIBRARY:</div>
                <div class="secondfont">{{ this.$store.state.selectedLibrary }}</div>
            </div>
        </li>
        <li>
            <vs-button v-if="this.$route.name == 'DateTimeChoose'" @click="showLeftMenuSettings()" class="SettingButton" type="filled">{{ active ? 'Close' : 'More' }}</vs-button>
            <div class="firstHeader">
                <div class="firstfont">FEATURE & LANGUAGE</div>
                <div v-for="workstationFeature in selectedWorkstationFeature" :key="workstationFeature" class="secondfont">+ {{ workstationFeature }}</div>
                <div v-if="selectedWorkstationLanguage" class="secondfont">Language : {{ selectedWorkstationLanguage }}</div>
            </div>
        </li>
        <li v-if="this.$route.name != 'DateTimeChoose'" style="border-bottom: 1px dotted #BBBBBB;">
            <div class="firstHeader">
                <div class="firstfont">DATE AND TIME</div>
                <div class="secondfont">{{ this.$store.state.selectedDateOfUse }}</div>
                <div class="secondfont">Session 1 : {{ this.$store.state.selectedSession1Time }}</div>
                <div v-if="this.$store.state.selectedSession2Time" class="secondfont">Session 2 : {{ this.$store.state.selectedSession2Time }}</div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'LeftMenu',
        data() {
            return {
                active: false,
                selectedWorkstationFeature: null,
                selectedWorkstationLanguage: null
            }
        },
        props: [ 'leftMenu' ],
        methods: {
            showLeftMenuSettings() {
                this.active = !this.active;
                this.$emit('showLeftMenuSettings', this.active);
            },

            selectFeature(selectedWorkstationFeature) {
                this.selectedWorkstationFeature = selectedWorkstationFeature;
            },

            selectLanguage(selectedWorkstationLanguage) {
                this.selectedWorkstationLanguage = selectedWorkstationLanguage;
            }
        },
        created() {
            this.selectedWorkstationFeature = this.$store.state.selectedWorkstationFeature;
            this.selectedWorkstationLanguage = this.$store.state.selectedWorkstationLanguage;
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.firstfont {
    color: #096BCC;
    font-weight: bold;
}

.secondfont {
    color: black;  
    font-weight: bold;
}
.thirdfont {
    color: black;
}

.vs-button-primary.vs-button-filled {
    color: grey;
    background: white !important;
    border: 1px solid #C8C8C8;
}

</style>
