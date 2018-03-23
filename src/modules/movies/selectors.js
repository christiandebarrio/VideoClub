// @flow
import type { AppState } from '../../core/types'
import type { MovieDetail, CrewPerson } from './types'

export const getMovies = (state: AppState) => Object.values(state.movies)

export const getMovieDetail = (id: number, state: AppState): MovieDetail =>
  state.movieDetail[id]

export const getMovieDirector = (movie: MovieDetail): ?CrewPerson =>
  movie.credits.crew.find(person => (person.job = 'director'))

export const getMainCrew = (movie: MovieDetail): Array<CrewPerson> =>
  movie.credits.crew.slice(0, 6) || []
