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
        <div className='navbar-wrapper-wrapper'>
          <div className='navbar-wrapper'>
            <div className='navbar-logo-wrapper navbar-logo-wrapper-mobile'>
              <div><Link className='navbar-logo text-center' to='/'>
                <img src='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' /></Link>
              </div>

              <label className='show-menu'>
                Show Menu
                <input type='checkbox' checked={this.state.checked} onChange={this.handleInputChange} />
              </label>
            </div>

            <ul id='navbar-items' className={menuclass}>
              <li className='navbar-item text-left'>
                <Link className='navbar-link' to='/'>Home</Link>
              </li>
              <li className='navbar-item text-left'>
                <Link className='navbar-link' to='/'>About</Link>
              </li>
              <li className='navbar-item text-left'>
                <Link className='navbar-link' to='/'>Stats</Link>
              </li>

              <div className='navbar-logo-wrapper navbar-logo-wrapper-browser'>
                <div><Link className='navbar-logo text-center' to='/'>
                  <img src='http://cumbrianrun.co.uk/wp-content/uploads/2014/02/default-placeholder-300x300.png' /></Link>
                </div>
              </div>

              <li className='navbar-item text-right'>
                <Link className='navbar-link' to='/sightings'><i className='fa fa-angle-down' /> Profile</Link>
                <ul className='navbar-items-dropdown'>
                  <li className='navbar-item-dropdown'>
                    <Link className='navbar-link navbar-link-dropdown' to='/sightings/add'>Add Sightings</Link>
                  </li>
                  <li className='navbar-item-dropdown'>
                    <Link className='navbar-link navbar-link-dropdown' to='/sightings/edit'>Edit Sightings</Link>
                  </li>
                </ul>
              </li>

              <li className='navbar-item text-right'>
                <Link className='navbar-link' to='/who-we-are'><i className='fa fa-angle-down' /> Contact</Link>
                <ul className='navbar-items-dropdown'>
                  <li className='navbar-item-dropdown'>
                    <Link className='navbar-link navbar-link-dropdown' to='/who-we-are'>Who We Are</Link>
                  </li>
                  <li className='navbar-item-dropdown'>
                    <Link className='navbar-link navbar-link-dropdown' to='/contact'>Contact</Link>
                  </li>
                </ul>
              </li>

              <li className='navbar-item text-right'>
                <Link className='navbar-link' to='/signout'>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
