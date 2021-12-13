<template>  
  <Static>
    <template v-slot:StaticContent> 
        <span class="text-white text-xs md:text-base lg:text-base">{{text}}</span>
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