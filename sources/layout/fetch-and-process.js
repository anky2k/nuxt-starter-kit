import { get } from '../../network'
import buildLayout from '../../utils/layout-manager'

const fetchAndProcess = async (
    $http,
    layoutToFetch = '',
    context,
    elementId
) => {
    const layoutQuery = {
        type: 'layout',
        size: 1,
        subtype: `${layoutToFetch}Layout`,
        elementId,
    }
    let layout = {}
    try {
        const { data } = await get($http, 'https://api.foxweather.com/spark/layouts?type=layout&size=1&subtype=homeLayout')
        if (!data.ok) {
            throw new Error('api failed')
        }
        const { data: moreData } = data
        const { results } = moreData
        if (results.length === 0) {
            return null
        }
        const layoutResponseResults = results[0]
        const meta = Object.assign({}, context)
        layout = await buildLayout(layoutResponseResults, meta)
    } catch (e) {
        console.log(e)
    }
    return layout
}

export { fetchAndProcess }
