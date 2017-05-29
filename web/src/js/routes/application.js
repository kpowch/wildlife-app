import React from 'react'
import { Route } from 'react-router'

import Login from 'app-routes/login'
import Signup from 'app-routes/signup'
import Data from 'app-routes/data'

class Application extends React.Component {
  render () {
    return (
      <div className='Application'>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/data' component={Data} />
      </div>
    )
  }
}

export default Application
