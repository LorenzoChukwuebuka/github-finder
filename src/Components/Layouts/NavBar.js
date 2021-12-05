import React from 'react'
import Proptypes from 'prop-types'

const NavBar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
    </nav>
  )
}

NavBar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
}

NavBar.propTypes = {
  title: Proptypes.string.isRequired,
  icon: Proptypes.string.isRequired
}

export default NavBar
