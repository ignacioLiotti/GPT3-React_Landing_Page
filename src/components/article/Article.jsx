import React from 'react'
import './article.css'

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container-article-image'>
        <img src={imgUrl} alt='blog' loading='lazy' />
      </div>
      <div className='gpt3__blog-container_article-container'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <a>Read Full Article</a>
      </div>
    </div>
  )
}

export default Article