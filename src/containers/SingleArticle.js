import React from 'react'
import '../page/App.css'

export const SingleArticle = (article) => {
  return (
    <div className='news'>
      <div className='news-image'>
        <img src={article.article.urlToImage} alt='slika vijesti'/>
      </div>
      <div className='news-details'>
        <p className='news-title'>{article.article.title}</p>
        <div className='news-description'>
          <p className='author'>{article.article.author}</p>
          <a className="url" href={article.article.url}>Link</a>
        </div>
      </div>
    </div>
  )
}

export default SingleArticle
