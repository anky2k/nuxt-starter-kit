<template>
  <div
      v-if="error"
      :class="`rounded md:rounded-lg lg:rounded-lg bg-gray-400 blur-md ${dimensions}`"
  />            
  <img
    v-else
    ref="img"
    loading="lazy"
    src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QDeRXhpZgAASUkqAAgAAAAGABIBAwABAAAAAQAAABoBBQABAAAAVgAAABsBBQABAAAAXgAAACgBAwABAAAAAgAAABMCAwABAAAAAQAAAGmHBAABAAAAZgAAAAAAAACAqQMA6AMAAICpAwDoAwAABwAAkAcABAAAADAyMTABkQcABAAAAAECAwCGkgcAFgAAAMAAAAAAoAcABAAAADAxMDABoAMAAQAAAP//AAACoAQAAQAAACwBAAADoAQAAQAAACwBAAAAAAAAQVNDSUkAAABQaWNzdW0gSUQ6IDcyNP/bAEMACAYGBwYFCAcHBwkJCAoMFA0MCwsMGRITDxQdGh8eHRocHCAkLicgIiwjHBwoNyksMDE0NDQfJzk9ODI8LjM0Mv/bAEMBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/CABEIASwBLAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/9oADAMBAAIQAxAAAAH4YDUAYAADEMUBwA1bGoMaBgmMTGDGIbkQ2ymNlsplFDMqknmga6gwAAGKA4TGoxqNtU2KihUNibAG5lDETGyMpkoplK5ZhVJ5wzfUBwhigyVNijGo21G3CKFl0ElMltoikiGmRgy6VsuimJm4kiam3gGa6pjVMc0htU22k24G6E3RLbWSgltpLoSVcspNINNmrjRi6TmJz0zImpuuIZrsm20huaTbmkU1TdIqdQm6SSwkoJKaSWmYm5ZlMsTTZq5ti2iZWdQsJq65G3r0IpzpNNzcumst0k06mVTtJdVJDsSCyyHTZhaKZyjSLIGWSxsu4pKJJCHKpMrndO+1OnO0um1LpyQ7bE1VTKp2zLqpIdpmFSuRlMTGks5RpFQqSIasAIBAACGVnVN9WabnVOqM3bnOKqpzmrtmKupmHZMRGuVxnE53HRpzbM3Fymc3NkK1UKpElBazDUypNHNGk65PtlTpFVVzWT1c551pU5xd3M51bnPMsvPHm6uS8+XGsNc+no4upOgVJE6TUTaM89MazzeK0ZBtfPonTeGsndh1c+ftxtG8xppW064Vs5zxrSpiHczEzOV46rnV5act4a583PvhrOnVydJ13nrIpuaidJMOfp5q58dsrYKQ6TTS8Q97HVcfqz0rrh7XpjeE6ZObcWyY7cl548z5t8LWM657xkrHjcWV083Qdm3PvI4eRShk8/TlXFl1Y24lzQNIpcr9Dc6ef3b9vL2897LTLLm565t8d9uTazTj35Lnk59sOnJJq5iazsakrTfm3OzXmvLTAxrTTl1Tcmoxw6sNOfPbLSUK1Jo+jvN+P09Xb53XnXfiZZvLzbc/TlevO7nXnMtZxx1x3ESaizqLEJVeuFx03zONc5mtLwo6b5nJvlMUY1nqpCoEHuvlfm69vV5e8vpzxLOtcc51jWcZudc841msjPalBTkVJNDaEolFkC24ZZCTSYVVKStDEmV3GZzut87jpOYXoWImkwrLmVTkVCAABDBDESpLI3SGxK0QrRBRUtkJUHSbPLA6A5joFwNhMVszA6GvMupVynRCZGhGS1RmaCQaMyrS6xfRS8x0hyLrg5l0Fc50IwNw69L25sTqI5F2SvHPZNctb3XO+mo5J7JThy7sa5FvBktQyerMq0pM9L0IrW1wN0c8dM1zLoDBdCTnNw32jTGrc0Ctxit5rF6ITCwVIyw6sjkz6YTF7MwN5M7LHoaSqqohaKs51RiaqslqGS1RbCaq4tm7nTMSsjKNY1YGrQAmNITJaiZ1bMY6IMKtj1m4bC1DBKglWkhWjNWj/8QAHhABAQEAAwEBAQEBAAAAAAAAABEBAhASIDBAgFD/2gAIAQEAAQUC/wAD7/heIifV/siIifGt1Wb+dVV/GIiIiIneuTkrNZ+GtVVXrOt7xmIiIiJ865OXWM+9a35xnWt6xmIiIifFVuuTl1jiz61rfutb1mMxERE73W8np6Vut6xxZ9a1v3W9ZjjjMRPnXLW8np6elb1jiz61rfyzHHizOtXvXLXLW73V7xxZ3V73G4n4Y4uOI1y1Wb1rm5N+8cWK3W6vxuNz8McXHrk5arNVuuTl+OM1W63VZq9a1v4cXHrk5dYrdcm/jiqvxVVrW/ea46rlrl3W63Wt/GqvdVVX7qs1x5PTeTdVVVut3+Gqv3VZyZye3p6VVVf66qvT09Kqqq/31V/on5T8IiIn5REREREREREeXl5eXl5RHl5eXl5RE+oiI8vLy8oiIiIiPLy8vLy8vLy8vLy8vLeKJ8REREREREREREZjMREREREREbjcTqIiIiIiIiIiIiIxnzET61uNxERPiInzERPjPqIn3rcREROsZ/fERETrP+p//8QAHhEBAQEAAgMAAwAAAAAAAAAAAQARAjAQEiBAUGD/2gAIAQMBAT8B/av1lnY/IWWWdb8BBZZZ9PScY43rZ9vScYLJJ8s9aZHhk8Mz1848PhllnreUWzyva5MtvZsM8p5XtLPbsMs2292w2y/hb/O//8QAGxEAAwEBAAMAAAAAAAAAAAAAAAERMBASYHD/2gAIAQIBAT8B+O3alKUu9Gyl6taN8XELZ8XELWDR4kIQWsIQhCetf//EABQQAQAAAAAAAAAAAAAAAAAAAKD/2gAIAQEABj8CNJ//xAAeEAADAQEBAAMBAQAAAAAAAAAAAREQIDAhMUBQYP/aAAgBAQABPyH/AFiRCfw0JExj/LCEITwQkTGP3hCZCEIQnghCxjH7QhCEIQhCE8EIWPD9IQhCEIQhCEITtCFjGPzhCEEiEIQhCEITtCFjGPqEIQhCEEhIhCEIQhCEGPlC1j5hCEIQhCCQkQhCEIQhCEGPlCyjHsIQhCEIQhBISEiEIQhCEINDH3S8whCEIQhCEEhISIQhCEIQgxj9YQhCEIQhCCQkJEITHyxj9YQhCEIQhBBBYQhBjeExYxj6pSlLsJkIQhCCCCCwhBrnBPGMnDGx8AmLJqEuAgggtEJo2p9fDww9CCY2IMQnIEEEEITHuxRxxZCEHqw2UomMMUXCF6EWExvDxPh/fcg+G9QhPCiCW0ucQeg8Huv74K4fGfN0a4HWUxDH1noYYfBQxso8KKNE5oxLjGYYTFyobLo3yUxseFHpMNcPUFyWg8iY3wMPwZS6YfkBMQ1sND5S4a+hsngWB8PGMeofkAsCF4D6Qw4n8DjjYwsLZesepjCxYbExMWDDDdKXbWRxl4IwxSjY+ExaKUXBsNjfjot29L2DZSjY+aUpSlLwG/PEy8WWWWGxspfG7SlKUvgILkb2MN/qpSl4FKUvrCEIQhMQhCEIQhMQhCEIToEIQhCEIT9p+BAwPZCEITRBFcAy+/6K5M9C4B4HlCE5BFFcey/H+C3sveuPe0Ya6AggguAYfYBOEIPRCZBoTQfAQSEhBBCEITkIQgguJwJy0JyN4QQQSEiEIQhCEIQnCEJEINDXLGNcBh4JCCROYQhCE4QhC1j6eQmNDRBIQvX/2gAMAwEAAgADAAAAEBuhicG3w1g6/wCzpL5rME7Y/Qu83W3BgRsGlO4CHQv1ecxRNeNv/QUXry8EOut+BNPkhynTUwwoZ4QaB2tJHJtc57Z8g1EAqgBC7gj/AI73pF6co9oqGZVGdKxzJam9BZEPFyuussmI+vRJHYduSvw+Oaf+MULy2yrJyPevAaJiiNa3WQr/ACue4W1nzMv0tkdH9Wf3pe50FQCQ8wetg0hcoS5Poghz2Nnq8pGSNp91r4qYqPRaIrXIVXIab6YmijxSwFNVbstTTmmDO1s8QQWzKMQuHAAvL3lbfCXyiJSstw7ejomLAPh986Ov+YAsLfcjiGh/8iEpdjREv981busjrGFlJfuvRPJILPdZ5Ingy8//xAAdEQEBAQEBAQEBAQEAAAAAAAABABEQIDAhQDFQ/9oACAEDAQE/EPQRHlmZZfWQQQeWZZZbfGQQWWWeGZllLw4EQmWWWdZlmeGIg4FOGWeFltmeEgg6JzYknGWUtsszZB5sxJJJmWVvGbLPOvMJJOFLL5zyFJ+R4Jw5S/Jz/bfyUz76n45bTv8APJ6dj8z1San7kXDH3llnqvIvyyzxtvG/8bP4M5tv8K22x1+n/8QAGxEAAwEBAQEBAAAAAAAAAAAAAAERECAwIWD/2gAIAQIBAT8Q/TUu0XbylKUpSlLi7uUpRspRPULulKUbGKJiFt8DDwYohIQh5SifZZQohCEEPhMT4eJPD4FjxDxMWsQS+6TEEsZCDRBIXVIIIIQmwhCCXgaCCXrSl2lKXKUpSlKUo2UpSlKUpSlKUpSlKMmUXnSlLrxe/wD/xAAeEAEBAQACAwEBAQAAAAAAAAABABEQISAxYXFBUf/aAAgBAQABPxDPDPIOCCCCDjOCIggssssgggggssk4zjOMsss4yyyCCCCCCyyyyCCCCyyyCCCCCySTnLOMssss4yCCCCCCyyyyyCCCCyyyCCDgOBJ5yznLLLLLIIIIILLLLLIIIILLLLIIIcBEhwbLLOMssssggggggggss5CEJllnGQQQ4CJyPGWWWWWWWWQQQRCEzxAhAskss4IRhZDwssssssssggggiEIQ8QEJlkk8nAws8RlllllkEEEEQhCEPIAhwJJPJwPmWWWWWQQQQRCEOAQ8gDgYkk8ngmc+WWQWRCEIQhDkBCHiA4GCEllkEOAyznPGWRCEIQhCHICEIeAEOBghJJZBwUMxSmzgQhCEOAhDwAlKeEEOQMJLLIIh4MWZsiEIQpwEIQ8KpSnG8BCMEYSWWc7bLPGWRClKUpSFKeFUpxpw2IJIxhJJZZPllkUpSlKUpTwgEKVxdbO9reXU+uAhJJJMsx5RCzmCIcZSnjADl9EsGwve2ti/kITEkk4YcDwHBXDmSI7wkIeIAIcsYTzbFZ7WjaR3JCSSTguWfCPSHqxje1tdEQh40AuLCBl0JdN3M9ru4npZMYwcFz7TwjnWxh3Du1uqKfEfMcUnSXISTDl0Wmz7ZRS9XrB1JJMHXF+5e+LyfGdb3XZd96urpOro9cpCdS62Nh/b6z192/8AbbZ7vA+5+pdEOpJJIwj7jCyyCOoxfq72rbt6errOro9TicQQuhZ7Yb3fS7Pc9Pc/VvbXte0+yfRenIYo7e67eRlnC8Vto2yXq6sz1OSYcWrLqXVlt2tu8LWM1n3e0vU+i6PDveG23DlwZw8H3x3Xpg6si6llt3WjdfG9t2Mu5mU8Gy7uwukjpzptt5bbHJZQllmeA92OpHUpkN3N3XddV12+y7Z9+D7S2z7vRdV6++c7OS7F3jHiyy8E8sUvXwulu5uyxbEur3a7Ptn3bLOctvBjdfu9Pdvbvg6dbQ5JSy22xS95ei6bcbVZdxm6/wBvpbf3i7ODwFLbDY8tjTgFI8HfiWW22DHDw/t0e7U92z74Gv1fa+vgZ4Cngh8WIc5jwV2eHkXD+2f9j7t/7bf2frzAsYxZng423hsPIxjGby2cmNh/Yf8At3/s7/sz6TXmC2z4Zy+BHDM+OWcmrdq1aty5jFZnjLLLLLLJPAFONrHzwjt2pdu3b4a46tW5c+DMfEJCkOW/Ex8vT4j4t/5L/wAvza/yfi/N+Y+I+b835n4vjOf5wa884jg/G+EfF+L8XxvjPxx/M/F+L8W38tv5HzPxPxPzfCfiPi+EfMfN+b43wspjXjIQpxvlxHxfi/HB8J+L834mfi/HEP8AkGerH+cPhfCfiPjgB/kfE/F8r2defIIcD53y4jjeSvzfm/E38344hBZweI/HApA8gx2RCt6+R0HE1rHkPPw4jEHFjHxE8JGnxHxfGYdvMdGMa1rWvGEQ3aPJeaJ4CO2vE8PPbwyJlllnBjGMZkQ+LEnATwcMJCBAsIILGwR4Hjkkkkk8f//Z"
    :alt="alt"
    @load="onLoaded"
    @error="setError"
    :class="`object-cover rounded md:rounded-lg lg:rounded-lg w-36 h-20 md:w-72 md:h-44 lg:w-72 lg:h-44 ${dimensions}`"
  />        
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
    },
    dimensions: {
      type: String,
      default: () => '',
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