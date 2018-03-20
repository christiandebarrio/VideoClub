import React from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import films from './modules/films/index'
import './App.css'
import Router from './routes'

const middleware = applyMiddleware(thunk)
const store = createStore(
  combineReducers({ films }),
  composeWithDevTools(middleware)
)

const App = props => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
