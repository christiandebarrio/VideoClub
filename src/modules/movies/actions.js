// @flow
import type { AsyncThunk } from '../../core/types'
import type { Movies, MovieDetail, Credits } from './types'
import { SET_MOVIES, SET_MOVIE_DETAIL } from './actionsTypes'

const setMovies = (movies: Movies) => ({
  type: SET_MOVIES,
  payload: movies
})

export const fetchPopularMovies = (): AsyncThunk => async (
  dispatch,
  getState
) => {
  try {
    const languagePath = '&language=es-ES'
    const pagePath = '&page=1'
    const popularMoviesPath = `${
      process.env.REACT_APP_API_URL
    }/movie/popular?api_key=${
      process.env.REACT_APP_API_KEY
    }${languagePath}${pagePath}`
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
    const languagePath = '&language=es-ES'
    const moviePath = `${process.env.REACT_APP_API_URL}/movie/${id}?api_key=${
      process.env.REACT_APP_API_KEY
    }${languagePath}`
    const movie: MovieDetail = await fetch(moviePath).then(res => res.json())
    const creditsPath = `${
      process.env.REACT_APP_API_URL
    }/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
    const credits: Credits = await fetch(creditsPath).then(res => res.json())
    movie.credits = credits
    dispatch(setMovieDetail(movie))
    return true
  } catch (error) {
    console.warn(`error fetching movie ${id}`, error)
    return false
  }
}
