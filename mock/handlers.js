import { rest } from 'msw'
import {homeLayout } from './seeds/home-layout';

export default [
  rest.get('https://api.foxweather.com/spark/layouts', (req, res, ctx) => {
    console.log(req.url.searchParams)
    return res(
      ctx.json(homeLayout)
    )
  })
]