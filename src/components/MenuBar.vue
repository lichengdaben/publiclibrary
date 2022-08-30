<template>
<div class="MenuBar">
  <b-navbar type="purple" variant="purple">
    <b-navbar-nav>
    <div>
    <b-nav-item href="#">HONG KONG PUBLIC LIBRARIES</b-nav-item>
    </div>
    <div>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <b-nav-item href="#">圖書館目錄</b-nav-item>
    </div>
    <div>
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      <b-nav-item href="#">主目錄</b-nav-item>
    </div>
    <div>
       <font-awesome-icon icon="fa-solid fa-square-user" />
       <b-nav-item href="#">登入</b-nav-item>
    </div>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'MenuBar',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.workStationGroupFieldTitle {
    color: #096BCC;
    font-weight: bold;
}

.workStationGroupFieldValue {
    font-weight: bold;
    display: inline;
}

</style>
