<template>  
  <Static>
    <template v-slot:StaticContent> 
        <span class="`uppercase text-white text-base md:text-4xl lg:text-4xl`">{{text}}</span>
    </template>  
  </Static>        
</template>

<script>
import Static from '../../commons/static.vue'

export default {
  name: 'LabelCardPrimary',
  props: {
    text: {
      type: String,
      default: () => (''),
    }
  },
  components: {
    Static
  }  
}
</script>