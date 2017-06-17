import React from 'react'
import { Route } from 'react-router'

import Home from 'app-routes/home'
import Login from 'app-routes/login'
import Signup from 'app-routes/signup'
import Sightings from 'app-routes/sightings'

import WhoWeAre from 'app-routes/who-we-are'
import Contact from 'app-routes/contact'

class Application extends React.Component {
  render () {
    return (
      <div className='Application'>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />

        <Route path='/sightings' component={Sightings} />

        <Route path='/who-we-are' component={WhoWeAre} />
        <Route path='/contact' component={Contact} />
      </div>
    )
  }
}

export default Application
