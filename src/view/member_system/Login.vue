<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="@/assets/logo.png" id="icon" alt="User Icon" />
      </div>

      <form @submit.prevent="signin">
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" v-model="user.username">
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model="user.password">
        <input type="submit" class="fadeIn fourth" value="Log In">
      </form>
      <div id="formFooter">
        <router-link class="underlineHover"  :to="{name:'Regsiter'}">申請帳號</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      let re = /\w+@gmail.com/
      let userid = this.user.username
      if (userid.search(re) !== 0) {
        alert('hi')
      }
      // this.$http.post('/api/signin', this.user).then((res) => {
      //   console.log('response=', res)
      //   // location.reload()
      // })
    }
  }
}
</script>

<style lang="scss">
@import"@/assets/helpers/login.scss";
</style>
