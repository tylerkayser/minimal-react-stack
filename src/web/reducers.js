import common from './common/common-reducers'
import home from './home/home-reducers'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  common,
  home
})

export default reducers
