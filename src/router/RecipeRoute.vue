<template>
  <!-- Main content and sidebar -->
  <div class="cs-container">
    <!-- Page title -->
    <div class="cs-page-title">
      <h1>{{recipe.title}}</h1>
      <!-- <breadcrumbs></breadcrumbs> -->
    </div>
    <!-- end .cs-page-title -->
    <!-- Main content -->
    <div class="cs-main-content cs-sidebar-on-the-right">
      <div class="cs-row">
        <div class="cs-col cs-col-12-of-12">
          <!-- Recipe media -->
          <div class="cs-recipe-media">
            <!-- Swiper gallery -->
            <slider :slides="recipe.gallery" :thumbs="true" :controls="true" :lightbox="true"></slider>
            </div>
          <!-- end .cs-recipe-media -->
        </div>
      </div>
      <div class="cs-row">
        <div class="cs-col cs-col-6-of-12">
          <!-- Recipe details -->
          <div class="cs-recipe-info">
            <h3>Рецепта</h3>
            <div v-html="recipe.content"></div>
          </div>
          <div class="cs-recipe-details">
            <div>
              <span>Време за приготвяне</span> {{recipe['preparation-time']}}
            </div>
            <div>
              <span>Трудност</span> {{recipe.acf.taxonomies[0].difficulty.name}}
            </div>
            <div>
              <span>Порции</span> {{recipe.acf.serving}}
            </div>
          </div>
          <!-- end .cs-recipe-details -->
          <!-- Recipe meta details -->
          <!-- <div class="cs-recipe-meta-details">
            <div class="print"><a href="javascript:window.print()"><i class="fa fa-print"></i>Print</a></div>
            <div class="views"><a href="#"><i class="fa fa-eye"></i>1,568</a></div>
          </div> -->
          <!-- end .cs-recipe-meta-details -->
        </div>
        <div class="cs-col cs-col-6-of-12">
          <!-- Ingredients check list -->
            <ingredients-list :ingredients="recipe.acf.ingredients"></ingredients-list>
          <!-- end .cs-ingredients-check-list -->
        </div>
      </div>
      <div class="cs-row">
        <div class="cs-col cs-col-12-of-12">
          <!-- Preparations steps -->
          <div class="cs-recipe-single-preparation">
            <!-- About recipe -->
            <div class="cs-recipe-info">
              <h3>Приготвяне</h3>
            </div>
          <!-- end .cs-recipe-info -->
            <steps-list :steps="recipe.directions"></steps-list>
          </div>
          <!-- end .cs-recipe-single-preparation -->
        </div>
      </div>
    </div>
    <sidebar></sidebar>
  </div>
  <!-- end .cs-container -->
</template>

<script>
  import Sidebar from 'components/Sidebar'
  import Slider from 'components/Slider'
  import IngredientsList from 'components/IngredientsList'
  import StepsList from 'components/StepsList'
  import Breadcrumbs from 'components/Breadcrumbs'
  import * as api from '../services/api'

  export default {
    name: 'recipe-page',
    data () {
      return {
        recipe: {
          title: '',
          content: '',
          ingredients: [],
          details: [],
          gallery: [],
          directions: []
        }
      }
    },
    mounted () {
      this.getRecipe()
    },
    methods: {
      getRecipe () {
        api.getRecipe(this.$route.params.id).then(recipe => {
          recipe.directions = recipe.acf.directions
          recipe.gallery = recipe.acf.gallery
          this.recipe = recipe
        }).catch(console.err)
      }
    },
    components: {
      Slider,
      IngredientsList,
      StepsList,
      Breadcrumbs,
      Sidebar
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
