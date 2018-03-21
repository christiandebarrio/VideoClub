import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './services/Home'
import Detail from './services/Detail'
import Layout from './components/Layout'

const Router = props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/movie/:id' component={Detail} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Router
