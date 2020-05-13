import React from 'react'
import Article from './Article'
// import articles from './fixtures'

export default function ArticleList({articles}) {
  let articleLists = articles.map(elem => 
    <li><Article elem = {elem} /></li>
  )
  return (
    <ul>
        {articleLists}
      
    </ul>

  )
}