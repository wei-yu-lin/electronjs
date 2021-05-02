<template>
  <div class="box">
    <div class="wrapper fadeInDown">
        <h1 class="headline">會員登入/註冊</h1>
        <MemberSystem></MemberSystem>
    </div>
  </div>
</template>

<script>
import MemberSystem from '@/components/Member/LoginForm'
export default {
  name: 'Login',
  components: {
    MemberSystem
  }
}
</script>

<style scoped lang="scss" >
@import "@/assets/helpers/login.scss";
</style>
