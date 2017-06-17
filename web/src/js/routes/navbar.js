import React from 'react'
import { Link } from 'react-router-dom'
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
            <div><Link className='navbar-logo' to='/'>WildLife App</Link></div>
          </div>

          <div className='navbar-content-right'>
            <label className='show-menu'>
              Show Menu
              <input type='checkbox' checked={this.state.checked} onChange={this.handleInputChange} />
            </label>

            <ul id='navbar-items' className={menuclass}>
              <li className='navbar-item'>
                <Link className='navbar-link' to='/sightings'>Sightings Dashboard <i className='fa fa-angle-down' /></Link>
                <ul className='navbar-dropdown-items'>
                  <li className='navbar-dropdown-item'>
                    <Link className='navbar-link' to='/sightings/add'>Add Sightings</Link>
                  </li>
                  <li className='navbar-dropdown-item'>
                    <Link className='navbar-link' to='/sightings/edit'>Edit Sightings</Link>
                  </li>
                </ul>
              </li>

              <li className='navbar-item'>
                <Link className='navbar-link' to='/who-we-are'>Team <i className='fa fa-angle-down' /></Link>
                <ul className='navbar-dropdown-items'>
                  <li className='navbar-dropdown-item'>
                    <Link className='navbar-link' to='/who-we-are'>Who We Are</Link>
                  </li>
                  <li className='navbar-dropdown-item'>
                    <Link className='navbar-link' to='/contact'>Contact</Link>
                  </li>
                </ul>
              </li>

              <li className='navbar-item'>
                <Link className='navbar-link' to='/signout'>Sign Out</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
