<template>
  <div>
    <h1>Blog posts</h1>
    
    <template v-if="$fetchState.pending">
      <content-placeholders>
        <content-placeholders-text :lines="20" />
      </content-placeholders>
    </template>

    <template v-else-if="$fetchState.error">
      <p>Error while fetching posts: {{ $fetchState.error.message }}</p>
    </template>

    <template v-else>
      <NuxtLink to="/index-2">Less Blog Posts</NuxtLink>
      <div>{{homePageLayout}}</div>
      <ul>
        <li v-for="post of posts" :key="post.id">
          <n-link :to="`/posts/${post.id}`">
            {{ post.title }}
          </n-link>
        </li>        
      </ul>
    </template>
  </div>
</template>

<script>
import {
  defineComponent,  
} from '@nuxtjs/composition-api'

import { usePosts } from '../composables/fetch-posts'
import { useHomePage } from '../composables/fetch-home-page-layout'

export default defineComponent({
  setup (props) {
    const { posts } = usePosts()
    const { homePageLayout } = useHomePage()
    return { posts, homePageLayout }
  }
})
</script>
