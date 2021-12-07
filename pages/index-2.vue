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
      <NuxtLink class="text-indigo-800 cursor-pointer" to="/">More Blog Posts</NuxtLink>
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

// import { usePosts } from '../composables/fetch-posts'

export default {
  setup (props) {
    // const { posts } = usePosts(10)
    return { posts: {} }
  }
}
</script>
