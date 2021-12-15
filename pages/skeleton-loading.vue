<template>
    <div class="flex flex-wrap justify-around p-4 lg:p-16">
        <Card
        v-for="(item, i) in fetchedData"
        :key="i"
        :item="item"
        :fetchState="fetchState"
        />
  </div>
</template>

<script>
import Card from '../components/cards/sample'
import withComponentState from '../hoc/with-component-state'
import { getSampleData } from '../sources/test'

const CardWithCompState = withComponentState(Card, getSampleData)

export default {
    name: 'SkeletonLoading',
    components: {
        'Card': CardWithCompState,
    }   
}
</script>