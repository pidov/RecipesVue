<template>
  <li :class="['cs-recipe', className]">
    <div class="cs-recipe-image">
      <div class="cs-recipe-details-button">
         <router-link :to="url">Подробно</router-link>
      </div>
      <img v-if="image" :src="image" :alt="title">
    </div>
    <div class="cs-recipe-meta">
      <span>
        <i class="fa fa-hourglass-half"></i> 
        {{prepTime | duration}}
      </span>
      <span>
        <i class="fa fa-cutlery"></i> 
        {{serving}}
      </span>
    </div>
    <h3>
      <router-link :to="url">{{title}}</router-link>
    </h3>
  </li>
</template>

<script>
  export default {
    name: 'headline',
    props: ['title', 'className', 'url', 'image', 'prepTime', 'serving']
  }
</script>

<style>
  
</style>
