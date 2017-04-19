<template>
  <header id="cs-header-style-one">
    <!-- Header main -->
    <div id="cs-header-main">
      <div class="cs-container">
        <div class="cs-header-body-table">
          <div class="cs-header-body-row">
            <!-- Logo brand image -->
            <div id="cs-logo-brand">
              <a href="index.html"><img src="demo/Bakery.png" alt="Bakery"></a>
            </div>
            <!-- end .cs-logo-brand -->
            <!-- Toggle button for menu -->
            <div class="cs-toggle-main-navigation">
              <i class="fa fa-bars"></i>
            </div>
            <!-- end .cs-toggle-main-navigation -->
            <!-- Main navigation -->
            <div class="cs-main-navigation-wrapper cs-menu-is-sticky">
              <div id="cs-div-navigation">
                <nav id="cs-main-navigation" class="cs-clearfix">
                  <navigation :items="items"></navigation>
                </nav>
              </div>
            </div>
            <!-- end .cs-main-navigation-wrapper -->
          </div>
        </div>
      </div>
    </div>
    <!-- end .cs-header-main -->
  </header>
</template>

<script>
  import Navigation from 'components/Navigation'

  export default {
    name: 'header',
    data () {
      return {
        items: [{
          name: 'Home',
          url: 'http://localhost:8080/#/'
        }, {
          name: 'Pages',
          items: [{
            name: 'Recipe',
            url: 'http://localhost:8080/#/recipe/1'
          }, {
            name: 'Pages',
            items: [{
              name: 'Recipe',
              url: 'http://localhost:8080/#/recipe/1'
            }]
          }]
        }]
      }
    },
    components: {
      Navigation
    }
  }
</script>

<style>
  
</style>
