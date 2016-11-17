import { PING, PONG } from './home-actions'

function homeReducers(state = {}, action) {
  console.log(state, action)
  switch(action.type) {
    case PING:
      return {
        ...state,
        pingPong: 'Ping'
      }
    case PONG:
      return {
        ...state,
        pingPong: 'Pong'
      }
  }
  return state
}

export default homeReducers
