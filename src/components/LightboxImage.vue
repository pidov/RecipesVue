<template>
  <a :href="src" class="cs-lightbox-image">
    <img :src="src" :alt="alt">
  </a>
</template>

<script>
  export default {
    name: 'lightbox-image',
    props: ['src', 'alt']
  }
</script>

<style>
  
</style>
