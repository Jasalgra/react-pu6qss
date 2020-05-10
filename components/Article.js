import React, {Component} from 'react'

class Article extends Component {
  constructor(props) {
    super(props) 

    this.state = {
      isOpen: false
    }
  }

  render() {
    const {article} = this.props
    console.log('---', this.props)
    let bodylet = this.state.isOpen && <section>{article.text}</section>
    return (
      <div className='hello' style={{color: 'red'}}>
        <h2>
          {article.title}
          <button onClick={this.handleClick}>
            {this.state.isOpen ? "close" : "open"}
          </button>
        </h2>
        {bodylet}
        <h3>creation data: {(new Date(article.date)).toDateString()}</h3>
      </div>
    ) 
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

function Article(props) {
  
}

function handleClick() {
  console.log('---', "clicked")


}

export default  Article