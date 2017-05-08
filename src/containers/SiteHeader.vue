<template>
  <header id="cs-header-style-one">
    <!-- Header main -->
    <div id="cs-header-main">
      <div class="cs-container">
        <div class="cs-header-body-table">
          <div class="cs-header-body-row">
            <!-- Logo brand image -->
            <div id="cs-logo-brand">
              <a href="http://95.85.11.126/#/">
                <h1>Глезотийки</h1>
              </a>
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
          name: 'Начало',
          url: 'http://95.85.11.126/#/'
        }, {
          name: 'Рецепти',
          url: 'http://95.85.11.126/#/рецепти'
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
