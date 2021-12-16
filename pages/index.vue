<template>
  <!-- <div>
    <ContinueWatching 
        :items=items
    />    
  </div> -->
  <div class="page">
    <Component
      :is="component.is"
      v-for="(component, index) in layout.body"
      :key="index"
      :component-props="component.props"
    ></Component>
  </div>
</template>

<script>
import ContinueWatchingList from "../components/video-list/continue-watching";
import TopMoviesList from "../components/video-list/top-movies";
import { fetchAndProcess } from "../sources/layout/fetch-and-process";
import {
  defineComponent,
  ref,
  useContext,
  useAsync,
  onMounted,
} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "Feed",
  components: {
    ContinueWatchingList,
    TopMoviesList,
  },
  setup(props) {
    const layout = ref({});
    const { $http } = useContext();
    // const data = useAsync(() => fetchAndProcess($http));
    // layout.value = data.value;
    onMounted(async () => {
      const data = await fetchAndProcess($http);
      layout.value = data;
    });

    return { layout };
  },
});
</script>