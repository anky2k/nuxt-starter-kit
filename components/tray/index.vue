<template>  
    <!-- <div
        class="rail"        
      >
        <TrayContent     
          :items="items"     
        >
          <template v-slot:TrayContentContainer>            
              <slot
                :items="items"
                name="TrayContent"          
              >
              </slot>             
          </template>        
      </TrayContent>
    </div>     -->    
        <TrayContent     
          :items=items    
        >
          <template v-slot:TrayContentContainer="{item}"> 
               <Img
                  alt="some image"
                  height="252"
                  width="448"
                  :src=item.url
                />
          </template>  
      </TrayContent>
</template>

<script>
import TrayContent from './tray-content.vue';
import Img from '../commons/img.vue';

export default {
  name: 'Tray',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
  components: {
    TrayContent,
    Img
  }  
}
</script>