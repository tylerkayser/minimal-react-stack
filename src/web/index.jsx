import configureStore from './store'
import React from 'react'
import Root from './common/Root'
import { AppContainer } from 'react-hot-loader'
import { render } from 'react-dom'

const store = configureStore()
const root = document.getElementById('root')

render(
  <AppContainer>
    <Root store={store}/>
  </AppContainer>,
  root
)

if (module.hot) {
  module.hot.accept('./common/Root', () => {
    const NextRoot = require('./common/Root').default
    render(
      <AppContainer>
        <NextRoot store={store}/>
      </AppContainer>,
      root
    )
  })
}
