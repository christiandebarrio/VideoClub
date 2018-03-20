import { SET_MOVIES } from './actionsTypes'
import { API_URL, API_KEY } from '../../constants'

const setMovies = movies => ({
  type: SET_MOVIES,
  payload: movies
})

export const fetchPopularMovies = () => async (dispatch, getState) => {
  try {
    const API = `${API_URL}/movie/popular?api_key=${API_KEY}`

    const movies = await fetch(API)
      .then(res => res.json())
      .then(json => json.results)

    dispatch(setMovies(movies))
    return true
  } catch (error) {
    console.warn('error fetching movies', error)
    return false
  }
}
