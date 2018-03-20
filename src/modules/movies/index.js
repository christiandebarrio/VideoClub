// @flow
import { SET_MOVIES } from './actionsTypes'
export * from './actions'
export * from './selectors'

const movies = (state = [], action) => {
  switch (action.type) {
    case SET_MOVIES:
      const movies = action.payload
      return [...movies]
    default:
      return state
  }
}

export default movies
