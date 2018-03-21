// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Layout = (props: Object) => (
  <div className='App'>
    <header>
      <Link to='/'>
        <img src={logo} className='App-logo' alt='logo' />
      </Link>
    </header>
    {props.children}
    <footer />
  </div>
)

export default Layout
