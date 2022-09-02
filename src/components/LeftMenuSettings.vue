<template>
    <div ref="parentSidebar" id="parentx">
        <vs-sidebar :parent="$refs.parentSidebar" default-index="1" class="sidebarx" pacer v-model="active">
            <div class="header-sidebar">
                <div class="settingtitle">Feature</div>
                <div v-for="feature in workstationFeature" :key="feature.featureName">
                    <input type="checkbox" id="workstationFeature" name="fav_language" value="workstationFeature" :ref="'feature' + feature.featureId" v-on:click="clickWorkStationFeature(feature)">
                    <label for="workstationFeature">
                        <div class="thirdfont">&nbsp;&nbsp;{{ feature.featureName }}<br></div>
                    </label>
                </div>
            </div>
            <div class="header-sidebar">
                <div class="settingtitle">Language</div>
                <div v-for="language in workstationLanguage" :key="language.languageId">
                    <input type="radio" id="workstationLanguage" name="fav_language" value="workstationLanguage" :ref="'language' + language.languageId" v-on:click="clickWorkStationLanguage(language)">
                    <label for="workstationLanguage">
                        <div class="thirdfont">&nbsp;&nbsp;{{ language.languageName }}<br></div>
                    </label>
                </div>
            </div>
        </vs-sidebar>
    </div>
</template>

<script>
    import { workstationLanguage, workstationFeature } from '@/service/test.js'

    export default {
        name: 'LeftMenuSettings',
        data() {
            return {
               workstationFeature: null,
               selectedWorkstationFeature: [],
               selectedWorkstationFeatureId: [],
               workstationLanguage: null,
               selectedWorkstationLanguage: null,
               selectedWorkstationLanguageId: null,

               active: false
            }
        },
        props: [ 'leftMenuSettings' ],
        methods: {
            showLeftMenuSettings(isActive) {
                this.active = isActive;
            },

            async clickWorkStationFeature(workstationFeature) {
                if (this.selectedWorkstationFeature.indexOf(workstationFeature.featureName) == -1) {
                    this.selectedWorkstationFeature.push(workstationFeature.featureName);
                } else {
                    this.selectedWorkstationFeature.splice(this.selectedWorkstationFeature.indexOf(workstationFeature.featureName), 1);
                }
                this.$store.commit('selectedWorkstationFeature', this.selectedWorkstationFeature);

                if (this.selectedWorkstationFeatureId.indexOf(workstationFeature.featureId) == -1) {
                    this.selectedWorkstationFeatureId.push(workstationFeature.featureId);
                } else {
                    this.selectedWorkstationFeatureId.splice(this.selectedWorkstationFeatureId.indexOf(workstationFeature.featureId), 1);
                }
                this.$store.commit('selectedWorkstationFeatureId', this.selectedWorkstationFeatureId);

                this.$emit('selectFeature', this.selectedWorkstationFeature);
            },

            async clickWorkStationLanguage(workstationLanguage) {
                this.$store.commit('selectedWorkstationLanguage', workstationLanguage.languageName);
                this.$store.commit('selectedWorkstationLanguageId', workstationLanguage.languageId);

                this.selectedWorkstationLanguage = workstationLanguage.languageName;
                this.selectedWorkstationLanguageId = workstationLanguage.languageId;

                this.$emit('selectLanguage', this.selectedWorkstationLanguage);
            },

            initializeFeature() {
                if (this.$store.state.selectedWorkstationFeatureId.length > 0) {
                    this.workstationFeature = this.$store.state.featureList;
                }

                return Promise.resolve('');
            },

            initializeLanguage() {
                if (this.$store.state.selectedWorkstationLanguageId) {
                    this.workstationLanguage = this.$store.state.languageList;
                }

                return Promise.resolve('');
            }
        },
        async created() {
            if (!this.$store.state.selectedWorkstationFeature) {
                this.$store.commit('selectedWorkstationFeature', []);
            }

            if (!this.$store.state.selectedWorkstationFeatureId) {
                this.$store.commit('selectedWorkstationFeatureId', []);
            }

            if (!this.$store.state.featureList) {
                this.workstationFeature = (await workstationFeature(this.$store.state.selectedWorkstationTypeId, this.$store.state.selectedLibraryId)).data.data;
                this.$store.commit('featureList', this.workstationFeature);
            }
            
            if (!this.$store.state.languageList) {
                this.workstationLanguage = (await workstationLanguage(this.$store.state.selectedLibraryId)).data.data;
                this.$store.commit('languageList', this.workstationLanguage);
            }
        },
        mounted() {
            if (this.$store.state.selectedWorkstationFeatureId.length > 0) {
                this.selectedWorkstationFeature = this.$store.state.selectedWorkstationFeature;
                this.selectedWorkstationFeatureId = this.$store.state.selectedWorkstationFeatureId;
                this.initializeFeature().then(val => {
                    console.log(val);
                    for (let i = 0; i < this.$store.state.selectedWorkstationFeatureId.length; i++) {
                        (this.$refs['feature' + this.$store.state.selectedWorkstationFeatureId[i]])[0].checked = true;
                    }
                });
            }

            if (this.$store.state.selectedWorkstationLanguageId) {
                this.initializeLanguage().then(val => {
                    console.log(val);
                    (this.$refs['language' + this.$store.state.selectedWorkstationLanguageId])[0].checked = true;
                });
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.settingtitle {
    background: #C8C8C8;
    font-weight: bold;
    color: black;  
}

input {
    vertical-align: middle;
}

</style>
