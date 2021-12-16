// import TwoAcrossMapper from '~/components/layoutComponents/TwoAcross/TwoAcrossMapper'
// import ArticleListMapper from '~/components/layoutComponents/articleList/ArticleListMapper'
// import VideoListMapper from '~/components/layoutComponents/VideoList/VideoListMapper'
// import BigTopMapper from '~/components/layoutComponents/BigTop/BigTopMapper'
// import PromoMapper from '~/components/layoutComponents/promo/PromoMapper'
// import ThreeAcrossMapper from '~/components/layoutComponents/ThreeAcross/ThreeAcrossMapper'
// import HourlyForecastMapper from '~/components/layoutComponents/HourlyForecast/HourlyForecastMapper'
// import PersonalityCarouselMapper from '~/components/layoutComponents/personalityCarousel/PersonalityCarouselMapper'
// import TagBucketMapper from '~/components/layoutComponents/tagBucket/TagBucketMapper'
// import LiveDoomsdayMapper from '~/components/layoutComponents/liveDoomsday/LiveDoomsdayMapper'
// import LivestreamMapper from '~/components/layoutComponents/livestream/LivestreamMapper'
// import FeaturedAdMapper from '~/components/layoutComponents/FeaturedAd/FeaturedAdMapper'
// import LiveUpdatesMapper from '~/components/layoutComponents/liveUpdates/LiveUpdatesMapper'
// import { LayoutMapper } from '~/types/ProcessedLayout'
// import { LayoutComponent } from '~/types/SparkLayout'

const fetchers = new Map()
// mappers.set('two-across', TwoAcrossMapper)
// mappers.set('article-list', ArticleListMapper)
// mappers.set('video-list', VideoListMapper)
// mappers.set('big-top', BigTopMapper)
// mappers.set('promo', PromoMapper)
// mappers.set('full-width-promo', PromoMapper)
// mappers.set('three-across', ThreeAcrossMapper)
// mappers.set('hourly-forecast', HourlyForecastMapper)
// mappers.set('personality-carousel', PersonalityCarouselMapper)
// mappers.set('tag-bucket', TagBucketMapper)
// mappers.set('doomsday', LiveDoomsdayMapper)
// mappers.set('livestream', LivestreamMapper)
// mappers.set('featured-ad', FeaturedAdMapper)
// mappers.set('live-updates', LiveUpdatesMapper)

export default {
    getFetcher(layoutComponent) {
        return fetchers.get(layoutComponent.component)
    },
}
