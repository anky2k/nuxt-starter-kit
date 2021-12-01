// https://image.nuxtjs.org/components/nuxt-img#modifiers

<template>
    <div class="w-full h-full">    
        <div
            v-if="!loaded" 
            class="rounded-md w-96 h-80 bg-gray-400 animate-pulse blur-md"
        />            
        <div
            v-if="error" 
            class="rounded-md w-96 h-80 bg-gray-400 blur-md"
        />            
        <img
            :loading=loading
            :alt=alt
            :height=height
            :width=width
            :src=src            
            @load="setLoaded"
            @error="setError"
        />        
    </div>        
</template>

<script>
import {
  defineComponent,  
} from '@nuxtjs/composition-api'

import { useLoadedFlag } from '../../composables/is-loaded'

export default defineComponent({
  name: 'Img',  
  props: {
    src: {
      type: String,
      default: () => '',
    },
    height: {
      type: String,
      default: () => "600",
    },
    width: {
      type: String,
      default: () => "800",
    },
    loading: {
      type: String,
      default: () => 'lazy',
    },
    alt: {
      type: String,
      default: () => 'fox now',
    }
  },
  setup (props) {
    const { loaded, setLoaded, error, setError } = useLoadedFlag()    
    return { 
        loaded, 
        setLoaded,
        error,
        setError
    }
  }  
})
</script>