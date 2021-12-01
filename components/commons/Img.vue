// https://image.nuxtjs.org/components/nuxt-img#modifiers
// https://cdn-images-1.medium.com/max/30/1*xjGrvQSXvj72W4zD6IWzfg.jpeg

<template>
    <div class="w-full h-full">        
        <div
            v-if="error" 
            class="rounded-md w-80 h-64 bg-gray-400 blur-md"
        />            
        <img
            ref="img"
            loading="lazy"
            src="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            :alt=alt
            :height=height
            :width=width
            @load="onLoaded"
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