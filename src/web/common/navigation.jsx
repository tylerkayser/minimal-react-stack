import Link from 'react-router/Link'
import React from 'react'
import './navigation.scss'

const Navigation = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default Navigation
