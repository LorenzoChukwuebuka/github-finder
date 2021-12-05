import React, { Component } from 'react'
import './App.css'
import './Components/Layouts/NavBar'
import NavBar from './Components/Layouts/NavBar'
import Users from './Components/User/Users'
import Search from './Components/User/Search'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false
  }
  async componentDidMount () {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.CLIENT_KEY}&client_secret=${process.env.SECRET_KEY}`
    )

    this.setState({ users: res.data, loading: false })
  }
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${process.env.CLIENT_KEY}&client_secret=${process.env.SECRET_KEY}`
    )

    this.setState({ users: res.data.items, loading: false })
  }
  render () {
    return (
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Search searchUsers={this.searchUsers} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    )
  }
}

export default App
