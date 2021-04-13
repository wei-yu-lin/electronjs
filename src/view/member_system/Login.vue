<template>
  <div class="wrapper fadeInDown">
    <h1 class="headline">會員登入/註冊</h1>
    <MemberSystem></MemberSystem>
  </div>
</template>

<script>
import MemberSystem from '@/components/MemberSystem'
export default {
  name: 'Login',
  components: {
    MemberSystem
  }
}
</script>
