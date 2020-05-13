import React from 'react'
import Article from './Article'
// import articles from './fixtures'


export default function ArticleList({articles}) {
  let articleLists = articles.map(elem => 
    <li key = {elem.id}><Article article = {elem} /></li>
  )
  return (
    <ul>
        {articleLists}
      
    </ul>

  )
}