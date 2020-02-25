<template>
  <div class="nav-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.nav-bar{
    top: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 44px;
    display: flex;
    line-height: 44px;
}
.left {
 background: red;
 width: 60px;
}
.right{
 background: red;
 width: 60px;
}   
.center{
    flex: 1;
    background: black;
}
</style>