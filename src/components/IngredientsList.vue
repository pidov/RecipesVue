<template>
  <div class="cs-ingredients-check-list">
    <h3>Продукти</h3>
    <ul>
      <li v-for="ingredient in ingredients">
        <check-box>
          {{ingredient.name}} : {{ingredient.quantity}}
        </check-box>
      </li>
    </ul>
  </div>
</template>

<script>
  import CheckBox from 'components/CheckBox'

  export default {
    name: 'ingredients-list',
    props: ['ingredients'],
    components: {
      CheckBox
    }
  }
</script>

<style>
  
</style>

