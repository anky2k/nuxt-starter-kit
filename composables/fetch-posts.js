import { get } from '../network'
import { ref , useFetch, useContext } from '@nuxtjs/composition-api'

export function usePosts (top = 20) {
  const posts = ref(null)
  const { $http } = useContext()  
  const { fetch: fetchPosts  } =  useFetch(async () => {
    const { data } = await get($http, 'https://jsonplaceholder.typicode.com/posts')
    posts.value = data.slice(0, top)        
  })
  
  return {
    posts,
    fetchPosts
  }  
}

