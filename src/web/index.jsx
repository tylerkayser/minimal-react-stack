import configureStore from './store'
import React from 'react'
import Root from './common/root'
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
  module.hot.accept('./common/root', () => {
    const NextRoot = require('./common/root').default
    render(
      <AppContainer>
        <NextRoot store={store}/>
      </AppContainer>,
      root
    )
  })
}
