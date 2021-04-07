<template>
<div >
  <div class="column-left">
    左邊
    <div >
      <ul class="sidebar">
        <li>公司簡介<a href="#"></a></li>
        <li>產品</li>
      </ul>
    </div>
  </div>
  <div class="column-right">
    右邊
  </div>
</div>
</template>

<style>
.column-left{
  width: 30%;
  height: 100vh;
  float: left;
  background-color: cadetblue;
  overflow:auto;
}
.column-right{
  width: 70%;
  height: 100vh;
  float: left;
  background-color:red;
}
.sidebar{
  list-style:none;
}
</style>
