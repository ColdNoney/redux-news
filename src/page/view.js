import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import Article from '../containers/Articles'
import './App.css'
import { openEng, openRus } from '../actions/dispatchers'

class View extends Component {
  render() {
    const { query, articles } = this.props
    return (
      <div className='page'>
        <div className='choice'>
          <button onClick={openEng} className='button button__eng'>
            Vijesti na engleskom
          </button>
          <button onClick={openRus} className=' button button__rus'>
            Vijesti na ruskom
          </button>
        </div>
        <div className='search-bar'>
          {
            articles.length > 0 && <SearchBar />
          }
        </div>
        <div className='page-table'>
          {
            articles.length > 0 && <Article />
          }
        </div>
      </div>
    )
  }
}

export default View
