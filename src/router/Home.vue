<template>
  <div :class="$options.name">
    <!-- Home gallery -->
    <div class="cs-home-slider" v-if="false"> <!-- Hide not implemented -->
      <div class="cs-container">
        <slider :slides="slides" :controls="true"></slider>
      </div>
    </div>
    <div class="cs-container">
      <!-- Main content -->
      <div class="cs-main-content">
        <!-- Recipes category -->
        <headline text="Популярни рецепти"></headline>
        <div class="cs-recipes-category four-recipes">
          <ul class="cs-recipes">
            <!-- Recipe -->
            <recipe v-for="(recipe, index) in recipes"
              :className="classNameForIndex(index)"
              :title="recipe.title" 
              :image="recipe.featured_image" 
              :url="`рецепта/${decodeURI(recipe.slug)}`" 
              :serving="recipe.serving" 
              :prepTime="recipe.preparation_time">
            </recipe>
           
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
  import * as api from '../services/api'

  export default {
    name: 'home',
    methods: {
      classNameForIndex (i) {
        const adjustedIndex = i + 1
        if (adjustedIndex === 1) {
          return 'first'
        } else if (!(adjustedIndex % 4)) {
          return 'last'
        }
        return ''
      }
    },
    data () {
      return {
        recipes: [],
        slides: [{
          title: 'Slide 1',
          text: 'Lorem ipsum dolor sit amet',
          image: 'http://placehold.it/1024x600',
          url: 'http://localhost:8080/#/recipe/1'
        }, {
          title: 'Slide 2',
          text: 'Lorem ipsum dolor sit amet',
          image: 'http://placehold.it/1024x600',
          url: 'http://google.com'
        }]
      }
    },
    mounted () {
      api.getRecipes().then(recipes => {
        console.log(recipes)
        this.recipes = recipes
      }).catch(
        console.err
      )
    },
    components: {
      Slider, Headline, Recipe
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>

