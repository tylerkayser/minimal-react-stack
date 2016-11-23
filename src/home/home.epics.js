import { combineEpics } from 'redux-observable'
import { PING, pong } from './home.actions'

import 'rxjs/add/operator/delay'
import 'rxjs/add/operator/filter'
import 'rxjs/add/operator/mapTo'

const pingEpic = action$ =>
  action$
    .filter(action => action.type === PING)
    .delay(1000)
    .mapTo(pong())

export default combineEpics(
  pingEpic
)
