<template>
  <div>
    <div class="flex-row-cen">
      <div class="sr-content">
        <span ></span>
          <input class="" type="text" placeholder="輸入飯店名稱">
      </div>
    </div>
      <input type="submit" value="搜尋">
  </div>
</template>

<script>
export default {
  data () {
    return {
      coil: {
        data: {}
      }
    }
  },
  methods: {
  },
  created () {
  },
  computed: {
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
.sr-content{
  width: 20px;
  /* width: 20vw; */

}
.flex-row-cen{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
