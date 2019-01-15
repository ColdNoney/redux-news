import React, { Component } from 'react'
import { connect } from "react-redux"
import '../page/App.css'

import SingleArticle from './SingleArticle'

class Article extends Component {
  render() {
    return (
      <div className='table'>
        {this.props.items.map((article) => (
          <SingleArticle key={article.title} article={article}/>
        ))}
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        items: state.openNews.articles,
    }
}

export default connect (mapStateToProps)(Article)
