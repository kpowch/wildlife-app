// LIBRARIES
import React from 'react'
import { Route } from 'react-router'

// MY THANGS
import Navbar from 'app-routes/navbar'
import Application from 'app-routes/application'

export default (
  <div>
    <Route component={Navbar} />
    <Route path='/' component={Application} />
  </div>
)
