// @flow
import type { AppState } from '../core/types'
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchMovie, getMovieDetail } from '../modules/movies'
import Detail from '../components/Detail'
import withLoadingUntilProps from './withLoadingUntilProps'

type RouterProps = { match: { params: { id: number } } }

const mapStateToProps = (state: AppState, props: RouterProps): Object => {
  const id = props.match.params.id
  const movie = getMovieDetail(id, state)
  return { id, movie }
}

const withMovieData = connect(mapStateToProps, { fetchMovie })

const fetchMovieOnMount = lifecycle({
  componentDidMount() {
    this.props.fetchMovie(this.props.id)
  }
})

const DetailEnhancer = compose(
  withMovieData,
  fetchMovieOnMount,
  withLoadingUntilProps('movie')
)

export default DetailEnhancer(Detail)
