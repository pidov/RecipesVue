<template>
  <div class="cs-ingredients-check-list">
    <h3>Ingredients</h3>
    <ul>
      <li v-for="ingredient in ingredients">
        <check-box :text="ingredient"></check-box>
      </li>
    </ul>
  </div>
</template>

<script>
  import CheckBox from 'components/Checkbox'

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

