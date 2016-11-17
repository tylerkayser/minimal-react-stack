import home from './home/home-epics'
import { combineEpics } from 'redux-observable'

const epics = combineEpics(
  home
)

export default epics
