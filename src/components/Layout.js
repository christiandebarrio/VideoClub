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
    <main className='main-content'>{props.children}</main>
    <footer />
  </div>
)

export default Layout
