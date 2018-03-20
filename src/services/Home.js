// @flow
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPopularMovies, getMovies } from '../modules/movies/index'
import Home from '../components/Home'

const mapStateToProps = state => {
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
