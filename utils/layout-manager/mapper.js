import CWMapper from '../../components/video-list/continue-watching/mapper'
import TMMapper from '../../components/video-list/top-movies/mapper'

const mappers = new Map()
mappers.set('continue-watching-list', CWMapper)
mappers.set('top-movies-list', TMMapper)
export default {
    getMapper(layoutComponent) {
        return mappers.get(layoutComponent.component)
    },
}
