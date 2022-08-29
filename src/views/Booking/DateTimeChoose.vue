<template>
    <div class="DateTimeChoose">
        <b-container class="bv-example-row" id="container-DTC" fluid>
        <NavBar/>
            <b-row>
                <b-col cols="3" class="left-menu">
                    <ul>
                        <li>
                            <div class="firstHeader">
                                <div class="firstfont">DISTRICT:</div>
                                <div class="secondfont">{{this.$store.state.selectedDistrict}}</div>
                            </div>
                        </li>
                        <li>
                            <div class="firstHeader">
                                <div class="firstfont">LIBRARY:</div>
                                <div class="secondfont">{{this.$store.state.selectedLibrary}}</div>
                            </div>
                        </li>
                        <li style="border-bottom: 1px dotted #BBBBBB;">
                        <vs-button @click="active=!active" 
                                        class="SettingButton" type="filled">Setting
                                </vs-button>
                            <div class="firstHeader">
                                <div class="firstfont">FEATURE & LANGUAGE</div>
                                <div class="secondfont">Item name</div>
                            </div>
                        </li>
                    </ul>
                </b-col>
                <b-col cols="9" class="right-content">
                    <div ref="parentSidebar" id="parentx">
                        <vs-sidebar :parent="$refs.parentSidebar" default-index="1" class="sidebarx" pacer v-model="active">
                            <div class="header-sidebar">
                                <div class="settingtitle">Feature</div>
                                <div v-for="feature in workstationFeature" :key="feature.featureName">
                                    <input type="radio" id="workstationFeature" name="fav_language" value="workstationFeature" v-on:click="clickWorkStationFeature(feature.featureName)">
                                    <label for="workstationFeature">
                                        <div class="thirdfont"> {{feature.featureName}}<br></div>
                                    </label>
                                </div>
                            </div>
                            <div class="header-sidebar">
                                <div class="settingtitle">Language</div>
                                <div v-for="Language in  workstationLanguage" :key="Language.languageId" >
                                    <input type="radio" id="workstationLanguage" name="fav_language" value="workstationLanguage" v-on:click="clickWorkStationLanguage(Language.languageName)">
                                    <label for="workstationLanguage">
                                        <div class="thirdfont"> {{Language.languageName}}<br></div>
                                    </label>
                                </div>
                            </div>
                        </vs-sidebar>
                    </div>
                    <DateTimeChooseTable />
                    <div></div>
                </b-col>
            </b-row>
        </b-container>
        <PageFooter />
    </div>
</template>

<script>
    import DateTimeChooseTable from '/src/components/DateTimeChooseTable.vue'
    import  {workstationLanguage,workstationFeature} from '@/service/test.js'
    import NavBar from '@/components/NavBar.vue'
    import PageFooter from '/src/components/PageFooter.vue'

    export default {
        name: 'DateTimeChoose',
        components: {
            DateTimeChooseTable,
            NavBar,
            PageFooter
        },
        data() {
            return {
               workstationLanguage:null,
               workstationFeature:null,
               active:false
            }
        },
        props: {
            msg: String
        },
        methods: {
       currentDateTime() {
      const current = new Date();
      const date = current.getFullYear()+'-'+(current.getMonth()+1)+'-'+current.getDate();
      const time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
      const dateTime = date +' '+ time;
      return dateTime;
    },
      async clickWorkStationLanguage(workstationLanguage) {
            this.$store.commit('workstationLanguage',workstationLanguage);
            this.$store.state.selectedWorkStationLanguage=workstationLanguage
            console.log(this.$store.state.selectedWorkStationLanguage)
        },
       async clickWorkStationFeature(workstationFeature) {
            this.$store.commit('workstationFeature',workstationFeature);
            this.$store.state.selectedWorkStationFeature=workstationFeature
            console.log(this.$store.state.selectedWorkStationFeature)
        },
       
        },
        async created() {
            this.workstationLanguage = (await workstationLanguage()).data.data.records;
            this.workstationFeature = (await workstationFeature(11)).data.data.records;
        },
    }
</script>

<style scoped>
.firstfont{
color:#096BCC;
font-weight: bold;
}

.secondfont{
color:#000000;  
font-weight: bold;
}
.thirdfont{
    color:black;  
font-weight: bold;
}
.vs-button-primary.vs-button-filled{
    color:grey;
    background:#ffffff!important;
}
.settingtitle{
background:#C8C8C8;
font-weight: bold;
color:black;  
}
</style>