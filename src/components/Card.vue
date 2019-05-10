<template>
  <div class="card" :style="{backgroundColor: color, height, boxShadow: '0px 0px 5px 2px '+color }">
    <div class="content">
      <div class="inside">{{ pageOffset }}</div>
      <div class="inside"><slot></slot></div>
      <div class="inside">{{ pageOffset }}</div>
    </div>
  </div>
</template>

<script>

  import WindowMap from '@/utils/WindowMap';

  export default {
    name: "Card",
    props: {
      height: String,
      color: String
    },
    computed: {
      pageOffset() {
        return WindowMap.pageOffset
      }
    }
  }
</script>

<style scoped>
  .card {
    display: flex;
    justify-content: center;
    margin: 21px auto;

    width: 400px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: center;
  }
</style>