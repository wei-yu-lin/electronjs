<template>
  <div class="box">
    <div class="wrapper fadeInDown">
        <h1 class="headline">會員登入/註冊</h1>
        <MemberSystem></MemberSystem>
    </div>
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

<style>
  .box{
    max-width: 75%;
    margin: 32px auto;
    height: 100%;
    border-radius: 2px;
    box-shadow: 0 1px 4px rgb(41 51 57 / 50%);
    background-color: #fff;
  }
</style>
