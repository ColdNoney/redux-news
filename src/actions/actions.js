import { QUERY_NEWS, OPEN_NEWS, FILTER_ARTICLE } from './constants'

export const setQuery = query => ({
  type: QUERY_NEWS,
  payload: query,
})

export const openNews = value => ({
  type: OPEN_NEWS,
  payload: value,
})

export const filterArticle = value => ({
  type: FILTER_ARTICLE,
  payload: value,
})
