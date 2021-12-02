<template>
    <ul>
        <li v-for="(comment, index) in data" :key="index">{{comment}}</li>
    </ul>
</template>

<script>
    export default {
        name: 'comments-list',
        props: ['data'],
        updated() {
          console.log('update happened', this.data)
        },
        mounted() {
          console.log('mount happened', this.data)
        },
    }
</script>
