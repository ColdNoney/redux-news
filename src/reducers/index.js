import { combineReducers } from 'redux'
import query from './query'
import openNews from './openNews'
import filterArticle from './filterArticle'

export default combineReducers ({
  query,
  openNews,
  filterArticle,
})
