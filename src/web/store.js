import DevTools from './common/dev-tools';
import epics from './epics'
import reducers from './reducers'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'

function configureStore(initialState) {
  const epicMiddleware = createEpicMiddleware(epics)

  const store = createStore(
    reducers,
    DevTools.instrument(),
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

export default configureStore
