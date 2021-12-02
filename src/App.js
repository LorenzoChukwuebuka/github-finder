import React, { Component } from 'react'
import './App.css'
import './Components/Layouts/NavBar'
import NavBar from './Components/Layouts/NavBar'
import Users from './Components/User/Users'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Users />
        </div>
      </div>
    )
  }
}

export default App
