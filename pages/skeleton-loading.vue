<template>
  <div class="flex flex-wrap justify-around p-4 lg:p-16">
    <Card
      v-for="(item, i) in items"
      :key="i"
      :item="item"
      :is-loaded="isLoaded"
    />
  </div>
</template>

<script>
import Card from '../components/card'

export default {
    name: 'SkeletonLoading',
    components: {
        Card,
    },
    data() {
      return {
        isLoaded: false,
        items: [
          {
            thumbnail: 'https://picsum.photos/320/200',
            avatar: 'https://picsum.photos/50/50',
            bgColor: '#BCD1FF',
            tag: 'PRODUCTIVITY',
            date: '3 days ago',
            title: '7 Skills of Highly Effective Programmers',
            desc: 'Our team was inspired by the seven skills of highly effective programmers created by the TechLead. We wanted to provide our own take on the topic. Here are our seven...',
            author: 'Glen Williams',
          },
        ],
      }
    },
    mounted() {
      this.onLoad()
    },
    methods: {
        onLoad() {
          this.isLoaded = false
          setTimeout(() => {
              this.isLoaded = true
          }, 3000)
        },
    },
}
</script>