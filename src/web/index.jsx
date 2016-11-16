import App from './App'
import configureStore from './configureStore'
import React from 'react'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

let store = configureStore()

render(
  <AppContainer>
    <App store={store}/>
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(
      <AppContainer>
        <NextApp store={store}/>
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
