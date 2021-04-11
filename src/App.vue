<template>
  <div id="app" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="logo">
          <img src="./assets/yusco.jpg" style="width:35px;height:35px;">
          <router-link class="navbar-brand " :to="{name:'Login'}" replace>Neon</router-link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" :to="{name:'About'}">關於</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" :to="{name:'鋼捲'}" replace>在製鋼捲</router-link>
            </li>
          </ul>
          <form class="d-flex">
           <router-link class="btn btn-outline-success" v-if="user_platform"  :to="{name:'Login'}">登入/註冊</router-link>
            <button class="btn btn-outline-success" v-else @click="logout">登出</button>
          </form>
        </div>
      </div>
    </nav>
    <router-view class="bg" @login='login'/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    login (val) {
      this.user_platform = val
    },
    logout () {
      this.$cookies.remove('login')
    }
  },
  data: function () {
    return {
      user_platform: true
    }
  },
  beforeMount:
    function () {
      if (this.$cookies.get('login')) {
        this.user_platform = false
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.bg{
  background-color: burlywood;
}
.logo{
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  min-width: 0;
  word-wrap: break-word;
  background-clip: border-box;
}
</style>

<style lang="scss">
@import "@/assets/all.scss";
</style>
