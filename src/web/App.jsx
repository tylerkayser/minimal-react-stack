import ButtonContainer from './ButtonContainer'
import React from 'react'
import { Provider } from 'react-redux'

const App = ({ store }) => (
  <Provider store={store}>
    <ButtonContainer/>
  </Provider>
)

export default App
