<template>
  <div ref="swiper" class="swiper-container">
    <div class="swiper-wrapper">
      <slide v-for="slide in slides" 
        :title="slide.title" 
        :text="slide.text" 
        :image="slide.image"
        :url="slide.url">
      </slide>
    </div>

    <div class="cs-swiper-gallery-controls">
      <div ref="handlerPrev" class="cs-swiper-button-prev">
        <i class="fa fa-angle-left"></i>
      </div>
      <div ref="handlerNext" class="cs-swiper-button-next">
        <i class="fa fa-angle-right"></i>
      </div>
    </div>
  </div>
</template>

<script>
  /* global Swiper */
  import Slide from 'components/Slide'
  
  export default {
    name: 'slider',
    props: ['slides'],
    mounted () {
      Swiper(this.$refs.swiper, {
        grabCursor: true,
        prevButton: this.$refs.handlerPrev,
        nextButton: this.$refs.handlerNext,
        autoHeight: true
      })
    },
    components: {
      Slide
    }
  }
</script>

<style>
  
</style>
