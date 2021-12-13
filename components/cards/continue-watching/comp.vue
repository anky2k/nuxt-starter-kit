<template>
  <div class="flex justify">
    <div class="flex-col">
      <ImgComp    
        :dimensions="'w-36 h-20 md:w-72 md:h-44 lg:w-72 lg:h-44'"
        :alt="item.alt"
        :src="item.url" />      
      <div class="play-icon-mob md:play-icon lg:play-icon" />    
      <div class="flex md:flex-col lg:flex-col line-clamp-2 md:line-clamp-none lg:line-clamp-none">
        <LabelPrimary :text="item.name" />
         <div class="pr-1" />
        <LabelSecondary :text="item.desc" />
      </div>  
    </div>  
    <div class="pr-2 md:pr-6 lg:pr-6" /> 
  </div>    
</template>

<script>
import ImgComp from '../../commons/img.vue'
import LabelPrimary from '../../labels/cards/primary.vue'
import LabelSecondary from '../../labels/cards/secondary.vue'
export default {
  name: 'Card',
  components: {
    ImgComp,
    LabelPrimary,
    LabelSecondary
  },
  props: ['item'],
}
</script>