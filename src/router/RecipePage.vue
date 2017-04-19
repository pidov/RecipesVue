<template>
  <!-- Main content and sidebar -->
  <div class="cs-container">
    <!-- Page title -->
    <div class="cs-page-title">
      <h1>{{title}}</h1>
      <h4>Dramatically catchy recipe secondary title can be positioned here.</h4>
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
            <slider :slides="slides" :thumbs="true" :controls="true" :lightbox="true"></slider>
            </div>
          <!-- end .cs-recipe-media -->
        </div>
      </div>
      <div class="cs-row">
        <div class="cs-col cs-col-6-of-12">
          <!-- About recipe -->
          <div class="cs-recipe-info">
            <h3>Recipe</h3>
            <p>{{introduction}}</p>
          </div>
          <!-- end .cs-recipe-info -->
          <!-- Recipe details -->
          <div class="cs-recipe-details">
            <div v-for="detail in details">
              <span>{{detail.name}}</span> {{detail.value}}
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
            <ingredients-list :ingredients="ingredients"></ingredients-list>
          <!-- end .cs-ingredients-check-list -->
        </div>
      </div>
      <div class="cs-row">
        <div class="cs-col cs-col-12-of-12">
          <!-- Preparations steps -->
          <div class="cs-recipe-single-preparation">
            <h3>Preparation</h3>
            <steps-list :steps="steps"></steps-list>
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
  
  export default {
    name: 'recipe-page',
    data () {
      return {
        title: 'Chow Mein',
        introduction: 'Introduction text',
        ingredients: ['3 tomatoes', '200g sugar'],
        details: [{
          name: 'Preparation',
          value: '45 minutes'
        }, {
          name: 'Difficulty',
          value: 'Very easy'
        }, {
          name: 'Cook time',
          value: '1 hour 30 minutes'
        }, {
          name: 'Serving',
          value: '4'
        }],
        slides: [{
          image: 'http://placehold.it/1024x600'
        }, {
          image: 'http://placehold.it/1024x600'
        }],
        steps: [{
          title: 'Preparation',
          duration: '30 minutes',
          text: 'Start by washing all vegetables'
        }, {
          title: 'Cooking',
          duration: '45 minutes',
          text: 'Start by washing all vegetables'
        }]
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
