<template>
  <div class="tagcloud">
    <a href="#" v-for="tag in tags">
      {{tag}}
    </a>
  </div>
</template>

<script>
  export default {
    name: 'tag-cloud',
    data () {
      return {
        tags: ['pasta', 'sauce', 'chilli', 'cheese', 'chicken', 'fish', 'tomato', 'meat', 'salt', 'sugar', 'oil']
      }
    }
  }
</script>

<style>
  
</style>
