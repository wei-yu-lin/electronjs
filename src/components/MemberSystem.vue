 <template>
  <div class="content-box">
    <div class="login-box">
        <div id="formContent">

          <template v-if="wannalogin">
            <div class="fadeIn first">
              <header>會員登入</header>
            </div>
            <form class="column-flex" @submit.prevent="signin">
              <div class="login-text">
                <label>帳號</label>
                <input type="text" class="fadeIn second" name="login_account" placeholder="login" v-model="user.username">
              </div>
              <div class="login-text">
                <label>密碼</label>
                <input type="text" class="fadeIn third" name="login_password" placeholder="password" v-model="user.password">
              </div>
                <input type="submit" class="fadeIn fourth" value="登入">
            </form>
            <div id="formFooter">
              <button class="underlineHover" @click="regsiter">會員註冊</button>
            </div>
          </template>

          <template v-else>
            <div class="fadeIn first">
              <header>會員註冊</header>
            </div>
            <form class="column-flex">
              <div class="login-text">
                <label>Email帳號</label>
                <input type="text"  class="fadeIn second" placeholder="sample@gmail.com">
              </div>
              <div class="login-text">
                <label>密碼</label>
                <input type="text"  class="fadeIn third"  placeholder="密碼">
              </div>
              <input type="submit" class="fadeIn fourth" value="註冊帳號">
            </form>
            <div id="formFooter">
              <button class="underlineHover" @click="login">會員登入</button>
            </div>
          </template>

        </div>
      </div>
    <div class="login-box">
      <div id="formContent" class="wrapper fadeInDown">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: '',
        token: ''
      },
      wannalogin: true
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
    },
    regsiter () {
      this.wannalogin = false
    },
    login () {
      this.wannalogin = true
    }
  }
}
</script>

<style>
  div.login-text{
    width: 65%;
  }
  div.content-box{
    display: inline-flex;
  }

</style>
