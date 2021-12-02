// https://image.nuxtjs.org/components/nuxt-img#modifiers
// https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg

<template>
    <div class="w-full h-full">        
        <div
            v-if="error" 
            :style="`height: ${height}px; width: ${width}px`"
            class="rounded-md bg-gray-400 blur-md"
        />            
        <div 
          v-if="mode === 'fixed'" 
          :style="`height: ${height}px; width: ${width}px`">   
            <img
                ref="img"
                loading="lazy"                
                src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                :alt=alt                
                @load="onLoaded"
                @error.native="setError"
                class="w-full h-full object-fill"                
            />        
        </div>            
        <img
          v-else
          ref="img"
          loading="lazy"
          :height="height"
          :width="width"
          src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          :alt=alt                
          @load="onLoaded"
          @error="setError"
          class="w-full h-full object-fill"                
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
    mode: {
      type: String,
      default: () => 'responsive',
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
    const { error, setError } = useLoadedFlag()    
    return {        
        error,
        setError
    }
  },
  methods: {
      onLoaded: function (e) {
        if(this.$refs.img.src !== this.$props.src) {
            this.$refs.img.src = this.$props.src
        }
      }
  }
})
</script>