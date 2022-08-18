import React, { Component } from 'react'
import Header from './Components/Header'
import Movies from './Services/movies';

class App extends Component {

  render() {
    return (
      <div>
        <Movies />
      </div>
    )
  }
}

export default App;