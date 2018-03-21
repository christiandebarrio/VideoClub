// @flow
import React from 'react'
import logo from '../logo.svg'

const Layout = (props: Object) => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
    </header>
    {props.children}
  </div>
)

export default Layout
