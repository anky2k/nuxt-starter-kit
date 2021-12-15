<template>  
  <Static>
    <template v-slot:StaticContent> 
        <span class="text-gray-400 text-xs md:text-base lg:text-base">{{renderText()}}</span>
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
  },
  methods: {
    renderText() {            
      if(process.server) {
        return '...'
      }
      if(process.client) {
        return this.$props.text
      }
    }
  }
}
</script>