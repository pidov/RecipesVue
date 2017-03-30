<template>
  <aside v-bind:class="['widget', className]">
    <h2 class="widget-title">
      <span>
        {{title}}
      </span>
    </h2>
    <slot></slot>
  </aside>
</template>

<script>
  export default {
    name: 'widget',
    props: ['className', 'title']
  }
</script>

<style>
  
</style>
