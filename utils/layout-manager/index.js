import mapperProvider from './mapper'
import fetcherProvider from './fetcher'

const getRegionsPromises = (
    rawLayout,
    meta
) => {
    const regions = [
        rawLayout['first-view'] || [],
        rawLayout.body || [],
    ]
    const promises = regions.map((components) => {
        return getComponentsPromises(components, meta)
    })

    // resolve all promises at the same time
    return Promise.all(promises)
        .then((result) => {
            return {
                'first-view': result[0],
                body: result[1]
            }
        })
        .then((regions) => regions)
        .catch((e) => {
            console.error('[ LayoutManagerPipeline.js ] :: getRegionsPromises')
            console.error(e.message, e.stack)
            return {
                'first-view': result[0],
                body: result[1]
            }
        })
}

const getComponentsPromises = (
    regionComponents,
    meta
) => {
    const defaultFetcher = (_component, _meta) => Promise.resolve({})
    const promises = []

    regionComponents.forEach((component) => {
        const mapper = mapperProvider.getMapper(component)
        if (!mapper) {
            console.warn('[ LayoutManagerPipeline.js ] :: getComponentsPromises')
            console.warn("Couldn't find mapper for component", component)
            return
        }

        const fetcher = fetcherProvider.getFetcher(component) || defaultFetcher
        const promise = fetcher(component, meta).then((serviceData) =>
            mapper(component, serviceData)
        )
        promises.push(promise)
    })

    return Promise.all(promises)
        .then((components) => components.filter(validComponent))
        .catch((e) => {
            console.warn(
                '[ LayoutManagerPipeline.js, Warning ] :: getComponentsPromises'
            )
            const error = e.message && e.stack ? `${e.message}, ${e.stack}` : e
            console.warn(error)
            return []
        })
}

const validComponent = (component) => {
    const valid = component.is && component.props
    if (!valid) {
        console.error(
            'layoutManagerPipeline/utils/validComponent:: invalid component -',
            component
        )
    }
    return valid
}

export default getRegionsPromises
