import { OPEN_NEWS } from '../actions/constants'

export default (state = {
  articles: [],
  lng: '',
  query: '',
}, action) => {
  switch(action.type) {
    case OPEN_NEWS:
      return action.payload
    default:
      return state
  }
}
