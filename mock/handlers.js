import { rest } from 'msw'
import { homeLayout } from './seeds/home-layout';

// ref - https://mswjs.io/docs/recipes/query-parameters

export default [
  rest.get('https://api.foxweather.com/spark/layouts', (req, res, ctx) => {
    console.log(req.url.searchParams) // read query params here
    return res(
      ctx.json(homeLayout)
    )
  })
]