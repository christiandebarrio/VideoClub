import { SET_FILMS } from './actionsTypes'

export * from './actions'
export * from './selectors'

const films = (state = [], action) => {
  switch (action.type) {
    case SET_FILMS:
      const films = action.payload
      return [...films]
    default:
      return state
  }
}

export default films
