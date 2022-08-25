<template>
  <div>
    <b-container fluid id="workstationGroupFooter">
      <b-row>
        <b-col cols="1" class="left-menu">
          <button id="workstationGroupResetButton">Reset&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-rotate-right" /></button>
        </b-col>
        <b-col cols="1" class="left-menu">
          <button id="workstationGroupBackButton">Back&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-reply" /></button>
        </b-col>
        <b-col cols="10" class="left-menu">
          <router-link class="btn disabled" id="workstationGroupNextLink" to="/workstationbooking/BookingDetails">
            <button id="workstationGroupNextButton">Next&nbsp;&nbsp;<font-awesome-icon icon="fa-solid fa-circle-right" /></button>
          </router-link>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
