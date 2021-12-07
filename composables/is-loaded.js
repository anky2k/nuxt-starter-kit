import { ref } from '#imports'

export function useLoadedFlag () {
  const loaded = ref(false)
  const error = ref(false)

  const setLoaded = () => loaded.value = !loaded.value

  const setError = () => {
    setLoaded()
    error.value = !error.value
  }
  
  return {
    loaded,
    setLoaded,
    error,
    setError
  }  
}

