<template>
  <div class="swiper-slide">
    <div class="cs-slider-caption">
      <h2>{{title}}</h2>
      <p>{{text}}</p>
      <a v-show="url" :href="url" class="cs-btn cs-btn-green">View recipe</a>
    </div>
    <img :src="image" :alt="title">
  </div>
</template>

<script>
  export default {
    name: 'slide',
    props: ['title', 'text', 'image', 'url']
  }
</script>

<style>
  
</style>
