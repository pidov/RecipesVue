<template>
  <div class="swiper-slide">
    <div class="cs-slider-caption" v-if="title || text || url">
      <h2 v-if="title">{{title}}</h2>
      <p v-if="text">{{text}}</p>
      <a v-if="url" :href="url" class="cs-btn cs-btn-green">View recipe</a>
    </div>
    <lightbox-image v-if="lightbox" :src="image" :alt="title"></lightbox-image>
    <img v-else :src="image" :alt="title">
  </div>
</template>

<script>
  import LightboxImage from 'components/LightboxImage'

  export default {
    name: 'slide',
    props: ['title', 'text', 'image', 'url', 'lightbox'],
    components: {
      LightboxImage
    }
  }
</script>

<style>
  
</style>
