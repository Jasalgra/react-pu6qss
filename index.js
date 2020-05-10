// import React, { Component } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: 'React'
//     };
//   }

//   render() {
//     return (
//       <div>
//         <Hello name={this.state.name} />
//         <p>
//           Start editing to see some magic happen :)
//         </p>
//       </div>
//     );
//   }
// }

// render(<App />, document.getElementById('root'));

import React from 'react'
import {render} from 'react-dom'
import App from './components/App'





render( <App />, document.querySelector('#root'))
