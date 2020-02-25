<template>
      <div class="tab-bar">
             <slot></slot>
      </div>
</template>

<script>
import TabBarItem from './tab-bat-item'

export default {
 components:{
     TabBarItem
 }
}
</script>

<style>
.tab-bar{
  font-size: 15px;
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f6f6f6;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1)
}

</style>