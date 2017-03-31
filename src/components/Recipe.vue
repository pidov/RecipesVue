<template>
  <li :class="['cs-recipe', className]">
    <div class="cs-recipe-image">
      <div class="cs-recipe-details-button">
        <a :href="url">Details</a>
      </div>
      <img :src="image" :alt="title">
    </div>
    <div class="cs-recipe-meta">
      <span>
        <i class="fa fa-hourglass-half"></i> 
        {{prepTime}}
      </span>
      <span>
        <i class="fa fa-cutlery"></i> 
        {{yield}}
      </span>
    </div>
    <h3>
      <a :href="url">{{title}}</a>
    </h3>
  </li>
</template>

<script>
  export default {
    name: 'headline',
    props: ['title', 'className', 'url', 'image', 'prepTime', 'yield']
  }
</script>

<style>
  
</style>
