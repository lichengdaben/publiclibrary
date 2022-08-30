<template>
<div class="MenuBar">
  <b-navbar type="purple" variant="purple">
    <b-navbar-nav style="width: 50%;">
     <img src="@/assets/librarylogo.jpeg" alt=""  id="titleimage">
    </b-navbar-nav>
    <b-navbar-nav style="width: 50%;" align="right" >
         <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        <b-nav-item href="#">
        <div class="purple">圖書館目錄</div>
       </b-nav-item> 
        <font-awesome-icon icon="fa-solid fa-file-lines" />
       <b-nav-item href="#" >
       <div class="purple">主目錄</div>
       </b-nav-item>
           <font-awesome-icon icon="fa-regular fa-user" />
        <b-nav-item href="#">
        <div class="purple">登入</div>
        </b-nav-item>
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
.MenuBar{
  list-style-type: none;
  margin: 0;
  padding: 0;
  color: #3C2879;
  border-radius: 4px;
  opacity: 1;
}

.purple{
color: #3C2879;
}
.navbar-nav {
 display: flex;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    flex-direction: row;
    align-items: center;
  }
</style>
