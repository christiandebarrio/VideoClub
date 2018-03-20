// @flow
import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import movies from './modules/movies'
import './App.css'
import Router from './routes'

const middleware = applyMiddleware(thunk)
const store = createStore(
  combineReducers({ movies }),
  composeWithDevTools(middleware)
)

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
