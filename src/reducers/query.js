import { QUERY_NEWS } from '../actions/constants'

export default (state = '', action) => {
  switch(action.type) {
    case QUERY_NEWS:
      return action.payload
    default:
      return state
  }
}
