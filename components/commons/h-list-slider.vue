<template>  
  <div class="rail">
    <a
      v-for="item in items" 
      :key="item.id"
      data-testid="dt-tray-content"
      class="card h-full m-1 flex-shrink-0 block"
    >
      <slot 
        :item="item"
        name="ListSlider"
      >
        some default
      </slot>      
    </a>    
  </div>    
</template>

<script>
export default {
  name: 'ListSlider',
  props: {
    items: {
      type: Array,
      default: () => ([]),
    }
  },
}
</script>

