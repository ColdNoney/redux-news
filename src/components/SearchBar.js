import React, { Component } from 'react'
import '../page/App.css'
import { connect } from 'react-redux'
import { setQuery } from '../actions/actions'

class SearchBar extends Component {
  render() {
    const { query } = this.props
    return (
      <div className='news-bar'>
        <input
          className='search-news'
          type='text'
          placeholder='Search News'
          onChange={(event) => {
            this.props.queryNews({query: event.target.value})
          }}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        query: state.openNews.query,
    }
}

function mapDispatchToProps(dispatch) {
    return({
        queryNews: ({ query }) => {dispatch(setQuery(query))}
    })
}

export default connect (mapStateToProps, mapDispatchToProps)(SearchBar)
