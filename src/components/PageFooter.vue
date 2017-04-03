<template>
  <footer id="cs-footer">
    <div class="cs-container">
      <div class="cs-row">
        <div class="cs-col cs-col-4-of-12">
            <slot name="left-column"></slot>
        </div>
        <div class="cs-col cs-col-4-of-12">
            <slot name="mid-column"></slot>
        </div>
        <div class="cs-col cs-col-4-of-12">
            <slot name="right-column"></slot>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'page-footer'
  }
</script>

<style>
  
</style>
