import epics from './epics'
import reducers from './reducers'
import { createEpicMiddleware } from 'redux-observable'
import { applyMiddleware, createStore } from 'redux'

export default function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware(epics)

  const store = createStore(
    reducers,
    applyMiddleware(epicMiddleware)
  )

  if (module.hot) {
    module.hot.accept('./epics', () => {
      epicMiddleware.replaceEpic(require('./epics').default)
    })

    module.hot.accept('./reducers', () => {
      store.replaceReducer(require('./reducers').default)
    })
  }

  return store
}
