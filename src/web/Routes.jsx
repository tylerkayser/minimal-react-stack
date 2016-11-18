import About from './about/about'
import Contact from './contact/contact'
import Home from './home/home'
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
