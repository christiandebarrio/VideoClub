import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './services/Home'

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  </BrowserRouter>
)

export default Router
