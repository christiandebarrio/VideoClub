// @flow
import type { Movie } from '../modules/movies/types'
import { compose, withProps } from 'recompose'
import { withRouter } from 'react-router-dom'
import { getImageSrc } from '../modules/images/utils'
import { formatMovieCardDate } from '../core/dateFormater'
import { truncateText } from '../core/truncateText'

type InitProps = { movie: Movie }

const withMovieCardData = withProps((props: InitProps) => {
  const { poster_path, overview, vote_average, release_date } = props.movie
  const imageWidthSize = 500
  const posterSrc = getImageSrc(poster_path, imageWidthSize)
  const dateFormated = formatMovieCardDate(new Date(release_date))
  const voteFormated = vote_average * 10
  const description = truncateText(overview, 170)
  return { description, posterSrc, dateFormated, voteFormated }
})

const withOnGoToMovieDetail = withProps(props => ({
  onGoToMovieDetail: id => () => {
    props.history.push(`/movie/${id}`)
    window.scroll(0, 0)
  }
}))

const MovieCardEnhancer = compose(
  withRouter,
  withMovieCardData,
  withOnGoToMovieDetail
)

export default MovieCardEnhancer
