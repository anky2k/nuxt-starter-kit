<template>  
  <Static>
    <template v-slot:StaticContent> 
        <span class="text-white text-xs md:text-base lg:text-base">{{renderText($device)}}</span>
    </template>  
  </Static>        
</template>

<script>
import Static from '../../commons/static.vue'
import { isMobile } from '../../../utils/device'

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
  methods:{
    renderText(device) {            
      return isMobile(device) ? (this.$props.text.split('-')[1] || this.$props.text) : this.$props.text
    }
  }
}
</script>