<template>
  <ul class="sub-menu">
    <li v-for="item in items">
      <a v-if="item.items">
        <span>
          {{item.name}}
        </span>
      </a>
      <a v-else :href="item.url">
          {{item.name}}
      </a>
      <sub-menu v-if="item.items" :items="item.items">
      </sub-menu>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'sub-menu',
    props: ['items']
  }
</script>

<style lang="scss" scoped>
  
</style>

