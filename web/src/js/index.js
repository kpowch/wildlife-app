import 'normalize.css/normalize.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Reactdom from 'react-dom'
import routes from 'app-root/router'

// this mounts the app in the index.html file body
const app = document.getElementById('app')

Reactdom.render(
  <BrowserRouter>{routes}</BrowserRouter>, app
)
