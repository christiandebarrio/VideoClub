// @flow
import type { AppState } from '../core/types'
import { compose, lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { fetchPopularMovies, getMovies } from '../modules/movies'
import Home from '../components/Home'
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

const withOnGoToMovieDetail = withProps(props => ({
  onGoToMovieDetail: id => () => {
    props.history.push(`/movie/${id}`)
    window.scroll(0, 0)
  }
}))

const HomeEnhancer = compose(
  withMoviesData,
  fetchPopularMoviesOnMount,
  withLoadingUntilProps('areMoviesLoaded'),
  withOnGoToMovieDetail
)

export default HomeEnhancer(Home)
