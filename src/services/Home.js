// @flow
import { compose, lifecycle } from 'recompose'
import { connect } from 'react-redux'
import { fetchPopularFilms, getFilms } from '../modules/films'
import Home from '../components/Home'

const mapStateToProps = state => {
  const films = getFilms(state)
  return { films }
}

const withFilmsData = connect(mapStateToProps, { fetchPopularFilms })

const fetchPopularFilmsOnMount = lifecycle({
  componentDidMount() {
    this.props.fetchPopularFilms()
  }
})

const HomeEnhancer = compose(withFilmsData, fetchPopularFilmsOnMount)

export default HomeEnhancer(Home)
