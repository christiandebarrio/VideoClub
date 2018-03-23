// @flow
import type { AppState } from '../core/types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPopularMovies, getMovies } from '../modules/movies'
import MoviesList from '../components/MoviesList'
import withLoadingUntilProps from './withLoadingUntilProps'

const mapStateToProps = (state: AppState): Object => {
  const movies = getMovies(state)
  const areMoviesLoaded = !!movies
  return { areMoviesLoaded, movies }
}

const withMoviesData = connect(mapStateToProps, { fetchPopularMovies })

const fetchPopularMoviesOnMount = lifecycle({
  componentDidMount() {
    this.props.fetchPopularMovies()
  }
})

const MoviesListEnhancer = compose(
  withMoviesData,
  fetchPopularMoviesOnMount,
  withLoadingUntilProps('areMoviesLoaded')
)

export default MoviesListEnhancer(MoviesList)
