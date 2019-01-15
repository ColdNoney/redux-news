import { setQuery, filterArticle, openNews } from '../actions/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import View from './view'

function mapStateToProps(state) {
    return {
        articles: state.openNews.articles,
        language: state.openNews.lng,
        query: state.openNews.query
    }
}

function mapDispatchToProps(dispatch, props) {
  return {
    handleLoad: bindActionCreators(load, dispatch)
  }
  const load = (query) = async(dispatch, getState) => {
    try {

    }
    catch(error) {
      console.error(error)
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(View)
