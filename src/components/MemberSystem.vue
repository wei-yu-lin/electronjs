 <template>

  <article class="content-box">
    <section class="login-box">
        <div id="formContent">
          <template v-if="wannalogin">
            <div class="fadeIn first">
              <header class="wrapper">
                <h2>會員登入</h2>
              </header>
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
              <button class="underlineHover" @click="login(false)">會員註冊</button>
            </div>
          </template>

          <template v-else>
            <div class="fadeIn first">
              <header class="wrapper">
                 <button class="wrapper btn-svg" @click="login(true)">
                    <svg  viewBox="0 0 15 12"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg>
                </button>
                <h2>會員註冊</h2>
              </header>
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
          </template>

        </div>
    </section>
    <section class="login-box">
      <div id="formContent" class="wrapper fadeInDown">
        <header class="wrapper">
          <h2>第三方登入</h2>
        </header>
        <ul>
          <li></li>
          <li>
            <button>
              <span><svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><rect fill="#3A559F" width="20" height="20" rx="2"></rect><path d="M16.91 5.865h-1.871c-.98 0-1.208.806-1.208 1.123l-.012 2.248h2.96c-.182 1.633-.358 3.009-.358 3.009h-2.602V20h-3.113v-7.755H8.058v-3.01h2.648V6.5c0-.466.415-3.5 3.817-3.5l2.387.109v2.756z" fill="#FFF"></path></g></svg></span>
              <span></span>
            </button>
          </li>
          <li>
            <button>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="000" d="M17.5 12.6c0-1.6.8-3 2.2-3.8-.8-1.2-2.2-1.9-3.7-2-1.5-.2-3 .9-3.8.9s-2-.9-3.3-.9c-1.7.1-3.3 1-4.1 2.5C2.9 12.5 4.3 17 6 19.5c.8 1.2 1.8 2.5 3.1 2.5s1.8-.8 3.3-.8 2 .8 3.3.8c1.4 0 2.2-1.2 3-2.5.6-.9 1.1-1.8 1.4-2.8-1.6-.7-2.7-2.3-2.6-4.1z"></path><path fill="000" d="M14.9 5.2c.7-.9 1.1-2 1-3.2-1.1.1-2.2.7-2.9 1.5-.8.9-1.1 2-1.1 3.1 1.2 0 2.3-.5 3-1.4z"></path></svg></span>
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </section>
  </article>

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
  computed: {
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
    login (val) {
      this.wannalogin = val
    }
  }
}
</script>
