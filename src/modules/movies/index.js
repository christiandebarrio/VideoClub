// @flow
import type { Movies, Movie } from './types'
import { SET_MOVIES, SET_MOVIE_DETAIL } from './actionsTypes'
export * from './actions'
export * from './selectors'

type ActionMovies = { type: string, payload: Movies }

export const movies = (state: Object = {}, action: ActionMovies): Object => {
  switch (action.type) {
    case SET_MOVIES:
      const movies = action.payload
      return movies.reduce((acc, movie) => {
        acc[movie.id] = movie
        return acc
      }, {})
    default:
      return state
  }
}

type ActionMovie = { type: string, payload: Movie }

export const movieDetail = (
  state: Object = {},
  action: ActionMovie
): Object => {
  switch (action.type) {
    case SET_MOVIE_DETAIL:
      const movie = action.payload
      return { ...state, [movie.id]: movie }
    default:
      return state
  }
}
