import React from 'react'
import classnames from 'classnames'
import './navbar.scss'

class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleInputChange = (event) => {
    this.setState({
      checked: event.target.checked
    })
  }

  render () {
    const menuclass = classnames({
      open: this.state.checked
    })

    return (
      <nav className='navbar'>
        <div className='navbar-wrapper'>
          <div className='navbar-content-left'>
            <div><a className='navbar-logo'href='/'>WildLife App</a></div>
          </div>

          <div className='navbar-content-right'>
            <label className='show-menu'>
              Show Menu
              <input type='checkbox' checked={this.state.checked} onChange={this.handleInputChange} />
            </label>

            <ul id='navbar-items' className={menuclass}>
              <li className='navbar-item'>
                <a className='navbar-link' href='#'>Sighting Dashboard <i className='fa fa-angle-down' /></a>
                <ul className='navbar-dropdown-items'>
                  <li className='navbar-dropdown-item'>
                    <a className='navbar-link' href='#'>Add Sighting Entry</a>
                  </li>
                  <li className='navbar-dropdown-item'>
                    <a className='navbar-link' href='#'>View Sightings</a>
                  </li>
                </ul>
              </li>

              <li className='navbar-item'>
                <a className='navbar-link' href='/about'>Team <i className='fa fa-angle-down' /></a>
                <ul className='navbar-dropdown-items'>
                  <li className='navbar-dropdown-item'>
                    <a className='navbar-link' href='#'>Who We Are</a>
                  </li>
                  <li className='navbar-dropdown-item'>
                    <a className='navbar-link' href='#'>Contact</a>
                  </li>
                </ul>
              </li>

              <li className='navbar-item'>
                <a className='navbar-link' href='#'>Sign Out</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
