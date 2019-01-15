import { FILTER_ARTICLE } from '../actions/constants'
import { filterArticle } from '../actions/actions'
import escapeRegExp from 'escape-string-regexp'

const initialState = { articles: filterArticle }

export default (state = initialState, action) => {
  console.log('filter', state)
  switch(action.type) {
    case FILTER_ARTICLE:
      const match = new RegExp(escapeRegExp(action.payload), 'i')
      return [
        ...state,
        action.payload.filter((article) => match.test(article.title))
      ]
    default:
      return state
  }
}
