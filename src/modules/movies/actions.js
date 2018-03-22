// @flow
import type { AsyncThunk } from '../../core/types'
import type { Movies, MovieDetail, Credits } from './types'
import { SET_MOVIES, SET_MOVIE_DETAIL } from './actionsTypes'
import { API_URL, API_KEY } from '../../constants'

const setMovies = (movies: Movies) => ({
  type: SET_MOVIES,
  payload: movies
})

export const fetchPopularMovies = (): AsyncThunk => async (
  dispatch,
  getState
) => {
  try {
    const popularMoviesPath = `${API_URL}/movie/popular?api_key=${API_KEY}`
    const movies: Movies = await fetch(popularMoviesPath)
      .then(res => res.json())
      .then(json => json.results)
    dispatch(setMovies(movies))
    return true
  } catch (error) {
    console.warn('error fetching popular movies', error)
    return false
  }
}

const setMovieDetail = (movie: MovieDetail) => ({
  type: SET_MOVIE_DETAIL,
  payload: movie
})

export const fetchMovie = (id: number): AsyncThunk => async (
  dispatch,
  getState
) => {
  try {
    const moviePath = `${API_URL}/movie/${id}?api_key=${API_KEY}`
    const movie: MovieDetail = await fetch(moviePath).then(res => res.json())
    const creditsPath = `${API_URL}/movie/${id}/credits?api_key=${API_KEY}`
    const credits: Credits = await fetch(creditsPath).then(res => res.json())
    movie.credits = credits
    dispatch(setMovieDetail(movie))
    return true
  } catch (error) {
    console.warn(`error fetching movie ${id}`, error)
    return false
  }
}
