import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MoviesList from './services/MoviesList'
import MovieDetail from './services/MovieDetail'
import Layout from './components/Layout'

const Router = props => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={MoviesList} />
        <Route exact path='/movie/:id' component={MovieDetail} />
      </Switch>
    </Layout>
  </BrowserRouter>
)

export default Router
