<template>  
  <div class="ml-10 md:ml-52 lg:ml-52">
    <div class="mb-2 ml-2 md:mb-5 lg:mb-5">
      <LabelListPrimary :text="text" />
    </div>      
    <ListSlider     
        :items=items    
      >
        <template v-slot:ListSlider="{item}"> 
          <ContinueWatching
            :item="item"
          />
        </template>               
    </ListSlider>
  </div>    
</template>

<script>
import ListSlider from '../commons/h-list-slider.vue'
import ContinueWatching from '../cards/continue-watching'
import LabelListPrimary from '../labels/list/primary.vue'
export default {
  name: 'ContinueWatchingList',
  setup (props) {
    return {
      text: "New Episodes"
    }
  },
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
  components: {
    ListSlider,
    ContinueWatching,
    LabelListPrimary
  }  
}
</script>