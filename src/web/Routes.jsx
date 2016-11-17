import About from './about/About'
import Contact from './contact/Contact'
import Home from './home/Home'
import Match from 'react-router/Match'
import React from 'react'

const Routes = () => (
  <main>
    <Match exactly pattern="/" component={Home}/>
    <Match pattern="/about" component={About}/>
    <Match pattern="/contact" component={Contact}/>
  </main>
)

export default Routes
