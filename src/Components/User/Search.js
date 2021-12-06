import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    if (this.state.text === '') {
      this.props.setAlert('Please enter something', 'light')
    } else {
      this.props.searchUsers(this.state.text)
      this.setState({ text: '' })
    }
  }

  render () {
    const { clearUsers, showClear } = this.props
    return (
      <div>
        <form className='form' onSubmit={this.onSubmit}>
          <input
            type='text'
            value={this.state.text}
            name='text'
            placeholder='search users...'
            onChange={this.onChange}
          />
          <input
            type='submit'
            value='Search'
            className='btn btn-dark btn-block'
          />
        </form>
        {showClear && (
          <button className='btn btn-light btn-block' onClick={clearUsers}>
            clear users
          </button>
        )}
      </div>
    )
  }
}

export default Search
