<template>
  <div id="app">
    <ExampleCardMap />
  </div>
</template>

<script>
import ExampleCardMap from './components/ExampleCardMap.vue'

export default {
  name: 'app',
  components: {
    ExampleCardMap
  }
}
</script>

<style>
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    color: white;
  }
</style>
