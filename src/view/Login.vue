<template>
  <div class="wrapper fadeInDown">
    <div id="formContent">
      <div class="fadeIn first">
        <img src="@/assets/logo.png" id="icon" alt="User Icon" />
      </div>

      <form>
        <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" v-model="user.username">
        <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" v-model="user.password">
        <input type="submit" class="fadeIn fourth" value="Log In">
      </form>

      <div id="formFooter">
        <a class="underlineHover" href="#">Forgot Password?</a>
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
  }
}
</script>

<style lang="scss">
@import"../assets/helpers/login.scss";
</style>
