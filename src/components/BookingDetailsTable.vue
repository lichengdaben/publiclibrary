<template>
  <div>
    <div class="bookingDetailsFieldTitle" id="bookingDetailsSessionTime">SESSION 1 : 10:00-11:00</div>

    <b-button v-b-toggle.info-details class="bookingDetailsItem" style="">
      <b-row align-v="center">
        <b-col cols="10">
          <div class="bookingDetailsInfoLeft">
            <img src="../assets/img/wg-img.png" class="bookingDetailsImage">
          </div>

          <div class="bookingDetailsInfoCenter">
            <ul>
              <li class="bookingDetailsFieldTitle">WORKSTATION GROUP :</li>
              <li class="bookingDetailsFieldValue">2/F Children's Library Workstation</li>
              <li class="bookingDetailsFieldTitle">WORKSTATION NO. :</li>
              <li class="bookingDetailsFieldValue">2F15</li>
            </ul>
          </div>
        </b-col>

        <b-col cols="2">
          <div class="bookingDetailsInfoRight">
            <div class="bookingDetailsInfoRightUpper">
              <img src="../assets/img/click-icon.png" class="bookingDetailsIcon" />
              <div>N , SELECT WORKSTATION</div>
            </div>
            <div class="bookingDetailsInfoRightLower">
              <font-awesome-icon icon="fa-solid fa-angle-down" />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-button>

    <b-collapse id="info-details" class="info-details">
      <b-card>
        <ul>
          <li></li>
          <li>
            <ol>
              <li>Workstation Group :</li>
              <li>2/F Children's Library Workstation</li>
              <li>Workstation no. :</li>
              <li>2F15</li>
            </ol>
          </li>
          <li><b-button v-b-toggle.toggle-item></b-button></li>
        </ul>
      </b-card>
    </b-collapse>

    <!--<vue-good-table :columns="columns" :rows="rows" :options="options" >
    </vue-good-table>-->
  </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
