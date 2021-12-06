import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import './Components/Layouts/NavBar'
import NavBar from './Components/Layouts/NavBar'
import Users from './Components/User/Users'
import Search from './Components/User/Search'
import axios from 'axios'
import Alert from './Components/Layouts/Alert'

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }

  searchUsers = async text => {
    this.setState({ loading: true })
    const res = await axios.get(
      `https://api.github.com/users?q=${text}&client_id=${process.env.REACT_APP_CLIENT_KEY}&client_secret=${process.env.REACT_APP_SECRET_KEY}`
    )

    this.setState({ users: res.data, loading: false })
  }
  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 3000)
  }

  render () {
    const { users, loading } = this.state
    return (
      <Router>
        <div className='App'>
          <NavBar />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => {
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }}
              />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App
