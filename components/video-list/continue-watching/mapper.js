const CWMapper = (
    rawComponent
) => {
    const { model } = rawComponent
    const { items } = model
    const componentProps = {
        title: model.title,
        url: model.url || '',
        items: items.map((item) => {
            return {
                title: item.title,
                url: item.canonicalUrl,
                duration: item.duration,
                image: item.thumbnail.url,
            }
        }),
        showThumbnail: model.showImage,
        showPublishTime: model.showTime,
    }

    return {
        is: 'ContinueWatchingList',
        props: componentProps,
    }
}

export default CWMapper
