import { store } from '../store'
import { openNews, setQuery, filterArticle } from './actions'
import NewsAPI from '../indexAPI'

export const openEng = () => {
    const newsapi = new NewsAPI('503f3230564f4ed3b78a5c344507bdbe')
    newsapi.v2.topHeadlines({
      language: 'en',
      country: 'us'
    }).then(response => {
      console.log(response)
      store.dispatch(openNews({ lng: 'en', articles: response.articles }))
      store.dispatch(setQuery({ query: '' }))
    })
}

export const openRus = () => {
  const newsapi = new NewsAPI('503f3230564f4ed3b78a5c344507bdbe')
  newsapi.v2.topHeadlines({
    language: 'ru',
    country: 'ru'
  }).then(response => {
    console.log(response)
    store.dispatch(openNews({ lng: 'ru', articles: response.articles }))
    store.dispatch(setQuery({ query: '' }))
  })
}

export const updateQuery = (query) => {
  const newsapi = new NewsAPI('503f3230564f4ed3b78a5c344507bdbe')
  newsapi.v2.everything({
    language: this.props.language,
    q: query.trim()
  }).then(response => {
    store.dispatch(setQuery({ query: query.trim() }))
    store.dispatch(filterArticle({ articles: response.articles }))
  })
}
