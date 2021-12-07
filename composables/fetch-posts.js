import { get } from '../network'
import { ref , useLazyFetch, useNuxtApp } from '#imports'

export function usePosts (top = 20) {
  const posts = ref(null)
  const { $http } = useNuxtApp()  
  const { fetch: fetchPosts  } =  useLazyFetch(async () => {
    const { data } = await get($http, 'https://jsonplaceholder.typicode.com/posts')
    posts.value = data.slice(0, top)        
  })
  
  return {
    posts,
    fetchPosts
  }  
}

