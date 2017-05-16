import React from 'react'
import { Route } from 'react-router'

import Login from 'app-routes/login'
import Signup from 'app-routes/signup'

class Application extends React.Component {
  render () {
    return (
      <div>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
      </div>
    )
  }
}

export default Application
