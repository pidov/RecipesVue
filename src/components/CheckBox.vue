<template>
  <div :class="{active: isActive}" @click="isActive = !isActive">
    <div class="check-box">
      <i class="fa fa-check"></i>
    </div>
    {{text}}
  </div>
</template>

<script>
  export default {
    name: 'check-box',
    props: ['text'],
    data () {
      return {
        isActive: false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .active {
    color: #888;
    text-decoration: line-through;
  }
  
  .check-box {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    position: relative;
    width: 15px;
    height: 15px;
    background-color: #ddd;
    i {
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      width: 15px;
      height: 15px;
      line-height: 15px;
      text-align: center;
      font-size: 10px;
      color: #fff;
      visibility: hidden;
      .active & {
        visibility: visible;
      }
    }
    .active & {
      background-color: #71a866;
    }
  }
</style>

