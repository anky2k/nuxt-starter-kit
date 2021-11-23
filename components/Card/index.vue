<template>
  <div v-if="isLoaded">
    <CardComp      
      :item="item"
    />
  </div>  
  <div v-else>
    <CardLoader />
  </div>  
</template>

<script>
import CardLoader from './Loader.vue'
import CardComp from './CardComp.vue'

export default {
  name: 'Card',
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    isLoaded: {
      type: Boolean,
      default: true,
    },
  },
}
</script>