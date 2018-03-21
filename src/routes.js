import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './services/Home'
import Detail from './services/Detail'

const Router = props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/movie/:id' component={Detail} />
    </Switch>
  </BrowserRouter>
)

export default Router
