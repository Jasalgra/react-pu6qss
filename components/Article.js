import React from 'react'

function Article(props) {
  const {article} = props
  console.log('---', props)
  let bodylet = <section>{article.text}</section>
  return (
    <div className='hello' style={{color: 'red'}}>
      <h2>
        {article.title}
        <button onClick={handleClick}>close</button>
      </h2>
      {bodylet}
      <h3>creation data: {(new Date(article.date)).toDateString()}</h3>
    </div>
  )
}

function handleClick() {
  console.log('---', "clicked")
  
}

export default  Article