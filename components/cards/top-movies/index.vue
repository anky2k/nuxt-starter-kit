<template>
  <Card :item="item" />
</template>

<script>
import Card from "./comp.vue";

export default {
  name: "TopMovies",
  components: {
    Card,
  },
  props: ["item"],
};
</script>