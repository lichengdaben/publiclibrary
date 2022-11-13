<template>
  <div class="block">
    <div class="innerblock">
      <el-form label-width="80px" :model="User">
        <!--<el-form :label-position="labelPosition" label-width="80px" :model="User">-->
        <div class="title-container">
          <h3 class="title">LOGIN</h3>
        </div>
        <el-form-item label="UserName">
          <!--<i class=" el-icon-user-solid"></i>-->
          <el-input v-model="User.name"></el-input>
        </el-form-item>
        <el-form-item label="PassWord">
          <el-input v-model="User.password"></el-input>
        </el-form-item>
        <el-button type="submit" @click="logIn">Login</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  name: "AdminPage",
  store,
  data() {
    return {
      User: {
        name: "",
        password: "",
      },
    };
  },
  props: {},

  methods: {
    logIn() {
      if (this.User.name == "xue" && this.User.password == 1) {
        this.$store.dispatch("login", this.User);
        this.$router.push("/");
      } else {
        alert("login failed");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  display: flex;
  justify-content: center;
}
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.el-form-item {
  line-height: 40px;
  position: relative;
  font-size: 14px;
  display: flex;
  color: white;
}
.el-button {
  color: white;
  border: 2px solid white;
  background-color: #f2653e;
  font-weight: bold;
  border-radius: 4px;
  height: 4%;
  min-height: 44px;
}
.title {
  color: white;
}
.title2 {
  display: flex;
  direction: row;
}
.name {
  margin: 20px;
}

.innerblock {
  width: 450px;
  background-color: #f2653e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 38px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
}
.el-input__inner {
  width: 80%;
  border: none;
  border-radius: 38px;
}
</style>
