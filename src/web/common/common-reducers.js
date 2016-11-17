import { LOCATION_CHANGE } from './common-actions'

const initialLocation = {
  hash: '',
  pathname: '/',
  search: ''
}

function commonReducers(state = initialLocation, action) {
  console.log(state, action)
  switch(action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.location
      }
  }
  return state
}

export default commonReducers
