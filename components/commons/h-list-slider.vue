<template>  
  <div class="rail">
    <InView @triggerIntersected="toggleLeftChevron">
        <template v-slot:LazyLoad>
            <div />                
        </template>                    
    </InView>            
    <Left
      ref="goLeft" 
      class="hidden z-10 lg:block w-8 md:h-8 left-56 fixed top-32 stroke-white transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
     />
    <a
      v-for="item in items" 
      :key="item.id"
      data-testid="dt-tray-content"
      class="card h-full m-1 flex-shrink-0 block transform"
    >
      <slot 
        :item="item"
        name="ListSlider"
      >
        some default
      </slot>      
    </a>    
    <Right
      class="hidden z-10 lg:block w-8 md:h-8 right-8 fixed top-32 stroke-white transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
     />
  </div>    
</template>

<script>
import Right from '../../assets/icons/chevron-right.svg?inline';
import Left from '../../assets/icons/chevron-left.svg?inline';
import InView from '../commons/lazy-loading.vue';

export default {
  name: 'ListSlider',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
  components: {
    Right,
    Left,
    InView
  },
  methods: {
    toggleLeftChevron(e) {
      if(e.isIntersecting) {
        this.$refs['goLeft'].style.display = 'none'
      }
    }
  }
}
</script>

