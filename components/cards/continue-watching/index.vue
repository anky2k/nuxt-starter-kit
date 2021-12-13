<template>
  <Card      
    :item="item"
  />      
</template>

<script>
import Card from './comp.vue'

export default {
  name: 'ContinueWatching',
  components: {
    Card
  },  
  props: ['item']
}
</script>