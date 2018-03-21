// @flow
import type { AppState } from '../../core/types'
import type { Movie } from './types'

export const getMovies = (state: AppState) => Object.values(state.movies)

export const getMovieDetail = (id: number, state: AppState): Movie =>
  state.movieDetail[id]
