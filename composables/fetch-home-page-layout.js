import { get } from '../network'
import { ref , useLazyFetch, useNuxtApp } from '#imports'

export function useHomePage (top = 20) {
  const homePageLayout = ref(null)
  const { $http } = useNuxtApp()  
  const { fetch: fetchHomePageLayout  } =  useLazyFetch(async () => {
    const { data } = await get($http, 'https://api.foxweather.com/spark/layouts?type=layout&size=1&subtype=homeLayout')
    homePageLayout.value = data
  })
  
  return {
    homePageLayout,
    fetchHomePageLayout
  }  
}
