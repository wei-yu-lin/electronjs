<template>
<div>
  <div id="formContent" class="wrapper fadeInDown">
      <form>
        <div>請輸入帳號</div>
        <input type="text" v-model="username" class="fadeIn second" placeholder="login">
        <div>請輸入密碼</div>
        <input type="text" v-model="password" class="fadeIn third"  placeholder="password">
        <button type="button" class="btn btn-primary" @click="MemberRegsiter_Submit">註冊帳號</button>
      </form>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Understood</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    MemberRegsiter_Submit () {
      let re = /@gmail.com/
      let username = this.username
      let password = this.password
      if (username.search(re) > 0) {
        this.$http.post('/auth/regsiter', {
          'username': username,
          'password': password
        }).then((res) => {
          if (res.data === '帳號已註冊') {
            console.log('帳號註冊過')
          } else if (res.data === '註冊成功') {
            console.log('註冊成功')
          }
        })
      } else {
        console.log('不符合' + username.search(re) + username)
      }
    }
  }
}
</script>

<style lang="scss">
@import"@/assets/helpers/login.scss";
</style>
