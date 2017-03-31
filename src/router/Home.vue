<template>
  <div :class="$options.name">
    <!-- Home gallery -->
    <div class="cs-home-slider">
      <div class="cs-container">
        <slider :slides="slides"></slider>
      </div>
    </div>
    <div class="cs-container">
      <!-- Main content -->
      <div class="cs-main-content">
        <!-- Recipes category -->
        <headline text="Popular recipes"></headline>
        <div class="cs-recipes-category four-recipes">
          <ul class="cs-recipes">
            <!-- Recipe -->
            <recipe title="Low-Carb Main Dish" image="http://placehold.it/600x600" url="http://google.com" yield="4 Persons" prepTime="20 min" className="first"></recipe>
            <recipe></recipe>
            <recipe></recipe>
            <recipe className="last"></recipe>
            <recipe></recipe>
            <recipe></recipe>
            <recipe></recipe>
            <recipe className="last"></recipe>
          </ul>
        </div>
        <!-- end .cs-recipes-category -->
      </div>
    </div>
  </div>
</template>

<script>
  import Slider from 'components/Slider'
  import Headline from 'components/Headline'
  import Recipe from 'components/Recipe'

  export default {
    name: 'home',
    data () {
      return {
        slides: [{
          title: 'Slide 1',
          text: 'Lorem ipsum dolor sit amet',
          image: 'http://placehold.it/1024x341',
          url: 'http://google.com'
        }]
      }
    },
    components: {
      Slider, Headline, Recipe
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
