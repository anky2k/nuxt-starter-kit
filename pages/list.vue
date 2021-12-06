<template>
  <div class="w-full h-full">
    <ul class="m-auto">
        <li
         class="w-40 h-40 rounded-md bg-pink-400 mt-4 ml-8 text-center pt-14 border-2 border-pink-800 text-white"   
         v-for="(item, i) in list"
        :key="i"
        > 
            {{ item }}
        </li>
        <FetchMore @triggerIntersected="loadMore">
            <template v-slot:LazyLoad>
                <div class="w-40 h-40 rounded-md bg-pink-200 animate-pulse mt-4 ml-8 text-center pt-14 border-2 border-pink-400 text-white">
                    Loading...
                </div>
            </template>                    
        </FetchMore>            
    </ul>
  </div>
</template>

<script>

import FetchMore from '../components/commons/lazy-loading.vue'

export default {
    name: 'List',
    components: {
        FetchMore
    },    
    data() {
        return { 
            list: (new Array(10).fill(new Date().getTime()))
        }
    },
    methods: {
        loadMore() {
            setTimeout(() => (
                new Array(10).fill(new Date().getTime()).forEach( item => this.list.push(item))
            ), 500)            
        }
    }
}
</script>