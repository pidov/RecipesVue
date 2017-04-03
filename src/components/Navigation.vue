<template>
  <ul class="cs-main-navigation cs-clearfix">
    <li v-for="item in items">
      <a v-if="item.items">
        <span >
          {{item.name}}
        </span>
      </a>
      <a v-else :href="item.url">
          {{item.name}}
      </a>
      <sub-menu v-if="item.items" :items="item.items"></sub-menu>
    </li>
  </ul>
</template>

<script>
  import SubMenu from 'components/SubMenu'

  export default {
    name: 'navigation',
    props: ['items'],
    components: {
      SubMenu
    }
  }
</script>

<style lang="scss" scoped>

</style>

