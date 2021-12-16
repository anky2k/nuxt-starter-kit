import { get } from '../network'
import { ref, useFetch, useContext } from '@nuxtjs/composition-api'

export function useHomePage(top = 20) {
  const homePageLayout = ref(null)
  const { $http } = useContext()
  const { fetch: fetchHomePageLayout } = useFetch(async () => {
    const { data } = await get($http, 'https://api.foxweather.com/spark/layouts?type=layout&size=1&subtype=homeLayout')
    console.log('check this data...')
    homePageLayout.value = data
  })

  return {
    homePageLayout,
    fetchHomePageLayout
  }
}