<template>
  <div>
    <div ref="swiper" :class="['swiper-container', className]">
      <div class="swiper-wrapper">
        <slide v-for="slide in slides" 
          :title="slide.title" 
          :text="slide.text" 
          :image="slide.image" 
          :url="slide.url"
          :lightbox="lightbox">
        </slide>
      </div>
  
      <div v-if="controls" class="cs-swiper-gallery-controls">
        <div ref="handlerPrev" class="cs-swiper-button-prev">
          <i class="fa fa-angle-left"></i>
        </div>
        <div ref="handlerNext" class="cs-swiper-button-next">
          <i class="fa fa-angle-right"></i>
        </div>
      </div>
    </div>
  
    <div v-if="thumbs" ref="thumbs" class="cs-recipe-thumbs swiper-container gallery-thumbs">
      <div class="swiper-wrapper">
        <slide v-for="slide in slides" :image="slide.image">
        </slide>
      </div>
    </div>
  </div>
</template>

<script>
  /* global Swiper */
  import Slide from 'components/Slide'
  
  export default {
    name: 'slider',
    props: ['slides', 'thumbs', 'controls', 'lightbox', 'className'],
    mounted () {
      const gallery = new Swiper(this.$refs.swiper, {
        grabCursor: true,
        prevButton: this.$refs.handlerPrev,
        nextButton: this.$refs.handlerNext,
        autoHeight: true
      })

      if (this.thumbs) {
        const thumbs = Swiper(this.$refs.thumbs, {
          centeredSlides: true,
          slidesPerView: 'auto',
          slideToClickedSlide: true
        })
        gallery.params.control = thumbs
        thumbs.params.control = gallery
      }
    },
    components: {
      Slide
    }
  }
</script>

<style>
  
</style>
