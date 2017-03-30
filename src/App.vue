<template>
  <div id="cs-wrapper" class="wide">
    <site-header></site-header>
    <router-view></router-view>
    <site-footer></site-footer>
    <!-- Copyright -->
    <div id="cs-copyright">
      <div class="cs-container">
        &copy; Copyright 2016. All rights reserved. 
      </div>
    </div>
  </div>
</template>

<script>
  import SiteHeader from './containers/SiteHeader'
  import SiteFooter from './containers/SiteFooter'
  
  export default {
    name: 'app',
    components: {
      SiteHeader,
      SiteFooter
    }
  }
</script>

<style lang="sass-loader">
  @import "scss/app";
</style>
