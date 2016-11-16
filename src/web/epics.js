import { PING, pong } from './actions'
import { combineEpics } from 'redux-observable'

import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mapTo'

const pingEpic = action$ =>
  action$
    .filter(action => action.type === PING)
    .delay(1000)
    .mapTo(pong())

const appEpics = combineEpics(
  pingEpic
)

export default appEpics
