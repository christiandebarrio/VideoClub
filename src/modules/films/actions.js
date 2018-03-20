import { SET_FILMS } from './actionsTypes'
import { API_URL, API_KEY } from '../../constants'

const setFilms = films => ({
  type: SET_FILMS,
  payload: films
})

export const fetchPopularFilms = () => async (dispatch, getState) => {
  try {
    const API = `${API_URL}/movie/popular?api_key=${API_KEY}`

    const films = await fetch(API)
      .then(res => res.json())
      .then(json => json.results)

    console.log(films, '<------ films in fetch ------')

    dispatch(setFilms(films))
    return true
  } catch (error) {
    console.warn('error fetching films', error)
    return false
  }
}
