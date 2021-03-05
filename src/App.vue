<template>
  <div id="app" class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">燁聯小幫手</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active"  :to="{name:'Login'}" replace>首頁</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" :to="{name:'鋼捲'}" replace>在製鋼捲</router-link>
            </li>
          </ul>
          <form class="d-flex">
           <button class="btn btn-outline-success" v-if="user_platform" type="submit" @click="user_login">登入</button>
            <button class="btn btn-outline-success" v-else type="submit" @click="user_logout">登出</button>
          </form>
        </div>
      </div>
    </nav>
    <!-- <img class="img-thumbnail" src="./assets/貓咪2.jpg"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    user_login () {
      this.$router.push({name: 'Login'})
    }
  },
  data: function () {
    return {
      user_platform: true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style lang="scss">
@import "./assets/all.scss";
</style>
