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
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/689/okop108.jpg"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '4',
                name: 'News',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg"
            },
            {
                id: '5',
                name: 'Sports',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
            },
            {
                id: '6',
                name: 'Food',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '2',
                name: 'Show',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '3',
                name: 'Music',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
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