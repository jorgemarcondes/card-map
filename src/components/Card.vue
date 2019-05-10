<template>
  <div class="card" :style="{backgroundColor: color, height, boxShadow: '0px 0px 5px 2px '+color }">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Card",
    props: {
      height: String,
      color: String
    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 21px auto;

    width: 400px;
  }
</style>