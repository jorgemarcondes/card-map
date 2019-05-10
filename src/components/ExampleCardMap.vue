<template>
  <div class="hello">
    <Card id="1" height="800px" color="#52b5e7"> Card 1</Card>
    <Card id="2" height="300px" color="#f7ce63"> Card 2</Card>
    <Card id="3" height="500px" color="#6bd6c6"> Card 3</Card>
    <Card id="4" height="1000px" color="#d0386a"> Card 4</Card>
  </div>
</template>

<script>

  import Card from '@/components/Card';

  export default {
    name: 'ExampleCardMap',
    components: {Card},
    props: {
      msg: String
    }
  }
</script>

<style scoped>

</style>
