<template>
  <div>
    <Tray 
        :items=items
    />
    <!-- <Tray :items="items">
         <template v-slot:item="{ item }">
            {{ item.name }}            
         </template>
    </Tray> -->
   <!-- <Tray 
        :items={items} 
    >
        <template v-slot:TrayContent>
            <div>This is the tray 3 </div>
        </template>        
    </Tray> -->
  </div>
</template>

<script>

import Tray from '../components/tray'

export default {
    name: 'Feed',
    components: {
        Tray,
    },  
    data() {
        return {
        items: [
            {
                id: '1',
                name: 'Movie',
                url: "https://picsum.photos/seed/movie/1200/900"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://picsum.photos/seed/show/1200/900"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://picsum.photos/seed/music/1200/900"
            },
            {
                id: '4',
                name: 'News',
                url: "https://picsum.photos/seed/news/1200/900"
            },
            {
                id: '5',
                name: 'Sports',
                url: "https://picsum.photos/seed/sports/1200/900"
            },
            {
                id: '6',
                name: 'Food',
                url: "https://picsum.photos/seed/food/1200/900"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://picsum.photos/seed/a/1200/900"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://picsum.photos/seed/b/1200/900"
            },
            {
                id: '4',
                name: 'News',
                url: "https://abcd.photos/seed/c/1200/900"
            },
        ]
        }
  }
}
</script>