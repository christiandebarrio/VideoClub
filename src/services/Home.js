// @flow
import type { AppState } from '../core/types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPopularMovies, getMovies } from '../modules/movies'
import Home from '../components/Home'

const mapStateToProps = (state: AppState): Object => {
  const movies = getMovies(state)
  return { movies }
}

const withMoviesData = connect(mapStateToProps, { fetchPopularMovies })

const fetchPopularMoviesOnMount = lifecycle({
  componentDidMount() {
    this.props.fetchPopularMovies()
  }
})

const HomeEnhancer = compose(withMoviesData, fetchPopularMoviesOnMount)

export default HomeEnhancer(Home)
