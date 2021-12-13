<template>
  <div>
    <ContinueWatchingList 
        :items=items
    />    
  </div>
</template>

<script>

import ContinueWatchingList from '../components/video-list/continue-watching.vue'

export default {
    name: 'Feed',
    components: {
      ContinueWatchingList
    },      
    data() {
        return {
        show: false,
        items: [
            {
                id: '1',
                name: 'Masked Singer - S6 E20',
                desc: 'Aired 2 days ago',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/689/okop108.jpg"
            },
            {
                id: '2',
                name: 'Prison Break - S2 E12',
                desc: 'Aired 3 days ago',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '3',
                name: 'Breaking Bad - S1 E3',
                desc: 'Aired yesterday',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '4',
                name: '911 S3 E1',
                desc: 'Aired 09/11/2021',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg"
            },
            {
                id: '5',
                name: 'S3 E2',
                desc: 'Aired last wednesday',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
            },
            {
                id: '6',
                name: 'S4 E9',
                desc: 'Aired 2 days ago',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/789/189/tr509.jpg"
            },
            {
                id: '2',
                name: 'Masked Singer',
                desc: 'Aired 2 days ago',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/786/837/tms611.jpg"
            },
            {
                id: '3',
                name: 'Masked Singer',
                desc: 'Aired 2 days ago',
                url: "https://s.foxdcg.com/dcg/img/Fox_Networks_DCG_-_FOX_Broadcasting/787/313/alt109.jpg?fit=inside%7C278:156"
            },
            {
                id: '4',
                name: 'Masked Singer',
                desc: 'Aired 2 days ago',
                url: "https://abcd.photos/seed/c/1200/900"
            },
        ]
        }
  }
}
</script>