// @flow
import type { AsyncThunk } from '../../core/types'
import type { Movies, Movie } from './types'
import { SET_MOVIES, SET_MOVIE_DETAIL } from './actionsTypes'
import { API_URL, API_KEY } from '../../constants'

const setMovies = (movies: Movies) => ({
  type: SET_MOVIES,
  payload: movies
})

const setMovieDetail = (movie: Movie) => ({
  type: SET_MOVIE_DETAIL,
  payload: movie
})

export const fetchPopularMovies = (): AsyncThunk => async (
  dispatch,
  getState
) => {
  try {
    const apiPath = `${API_URL}/movie/popular?api_key=${API_KEY}`
    const movies: Movies = await fetch(apiPath)
      .then(res => res.json())
      .then(json => json.results)
    dispatch(setMovies(movies))
    return true
  } catch (error) {
    console.warn('error fetching popular movies', error)
    return false
  }
}

export const fetchMovie = (id: number): AsyncThunk => async (
  dispatch,
  getState
) => {
  try {
    const apiPath = `${API_URL}/movie/${id}?api_key=${API_KEY}`
    const movie: Movie = await fetch(apiPath).then(res => res.json())
    dispatch(setMovieDetail(movie))
    return true
  } catch (error) {
    console.warn(`error fetching movie ${id}`, error)
    return false
  }
}
