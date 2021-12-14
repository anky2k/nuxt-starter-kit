<template>  
  <div ref="slider" class="rail">
    <InView @triggerIntersected="hideLeftArrow">
        <template v-slot:LazyLoad>
            <div />                
        </template>                    
    </InView>            
    <Left
      v-on:click="moveLeft"
      ref="left" 
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
      ref="right"
      v-on:click="moveRight"
      class="hidden z-10 lg:block w-8 md:h-8 right-8 fixed top-32 stroke-white transform hover:scale-125 transition duration-500 ease-in-out cursor-pointer"
     />
     <InView @triggerIntersected="hideRightArrow">
        <template v-slot:LazyLoad>
            <div />                
        </template>                    
    </InView>            
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
    hideLeftArrow(e) {
      if(e.isIntersecting) {
        this.$refs['left'].style.display = 'none'
      }
    },
    hideRightArrow(e) {
      if(e.isIntersecting) {
        this.$refs['right'].style.display = 'none'
      }
    },
    moveRight(e) {
      this.$refs['slider'].scrollBy({
        left: 800,
        behavior: 'smooth',
      })
      this.$refs['left'].style.display = 'block'
    },
    moveLeft(e) {
      this.$refs['slider'].scrollBy({
        left: -800,
        behavior: 'smooth',
      })
      this.$refs['right'].style.display = 'block'
    }
  }
}
</script>

