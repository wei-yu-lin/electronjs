<template>
  <div class="wrapper fadeInDown">
    <div class="login-box">
      <div id="formContent">
        <div class="fadeIn first">
          <img src="@/assets/cat.gif" id="icon" class="img-thumbnail" />
        </div>
        <form @submit.prevent="signin">
          <div style="">
            <label>帳號</label>
            <input type="text" class="fadeIn second" name="login" placeholder="login" v-model="user.username">
          </div>
          <div>
            <label>密碼</label>
            <input type="text" class="fadeIn third" name="login" placeholder="password" v-model="user.password">
            <input type="submit" class="fadeIn fourth" value="Log In">
          </div>
        </form>
        <div id="formFooter">
          <router-link class="underlineHover"  :to="{name:'Regsiter'}">申請帳號</router-link>
        </div>
      </div>
    </div>
    <div class="login-box">
      <div id="formContent" class="wrapper fadeInDown">
        <form>
          <div>請輸入帳號</div>
          <input type="text" v-model="username" class="fadeIn second" placeholder="login">
          <div>請輸入密碼</div>
          <input type="text" v-model="password" class="fadeIn third"  placeholder="password">
          <button type="button" class="btn btn-primary" @click="MemberRegsiter_Submit">註冊帳號</button>
        </form>
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
        password: '',
        token: ''
      }
    }
  },
  methods: {
    signin () {
      let re = /gmail.com$/
      const token = 'asds32adsavrAS3Fadf5567'
      const username = this.user.username
      const password = this.user.password
      if (username.search(re) > 0) {
        // 假如有符合gmail.com格式就寫入cookies
        console.log('寫入token')
        this.user.token = token
        this.$cookies.set('login', JSON.stringify(this.user))
      }
      if (this.$cookies.get('login') && this.user.token) {
        // 去資料庫讀取會員帳號密碼
        this.$http.post('/auth/login', {
          username: username,
          password: password
        }).then((res) => {
          if (res.data === '登入成功') {
            this.$emit('login', false)
            this.$router.push({name: '鋼捲'})
          }
        })
      }
    }
  }
}
</script>
