// @flow
import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => (
  <div>
    <span>404</span>
    <p>PAGE NOT FOUND</p>
    <Link to='/' className='back'>
      Back To Home
    </Link>
  </div>
)

export default Error404
