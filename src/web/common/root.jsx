import DevTools from './dev-tools'
import Navigation from './navigation'
import React from 'react'
import Router from 'react-router/BrowserRouter'
import Routes from '../routes'
import { Provider } from 'react-redux'

const Root = ({ store }) => (
  <Provider store={store}>
    {/*
      Todo - Implement react-router-redux@5.0
      https://github.com/reactjs/react-router-redux/pull/460
    */}
    <Router>
      <div>
        <Navigation/>
        <Routes/>
        <DevTools/>
      </div>
    </Router>
  </Provider>
)

export default Root
