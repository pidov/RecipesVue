<template>
  <ul>
    <li v-for="(step, index) in steps" class="step">
      <div class="step-number">
        <h5>{{index + 1}}</h5>
      </div>
      <div class="step-description">
        <h3 v-if="step.name">
          {{step.name}}
          <span v-if="step.duration">{{step.duration | duration}}</span>
        </h3>
        <div v-html="step.text"></div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'steps-list',
    props: ['steps']
  }
</script>

<style lang="scss" scoped>
  
</style>
