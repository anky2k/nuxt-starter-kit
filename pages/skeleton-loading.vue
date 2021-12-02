<template>
    <CardsList />
</template>

<script>
import CardsList from '../components/cards-list'
import withComponentState from '../hoc/with-component-state'
import { getSampleData } from '../sources/test'

const CardsListWithComponentState = withComponentState(CardsList, getSampleData)

export default {
    name: 'SkeletonLoading',
    components: {
        'CardsList': CardsListWithComponentState,
    }   
}
</script>