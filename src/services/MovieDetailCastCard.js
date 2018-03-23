// @flow
import type { CastPerson } from '../modules/movies/types'
import { compose, withProps } from 'recompose'
import { getImageSrc } from '../modules/images/utils'

type InitProps = { castPerson: CastPerson }

const withMovieDetailCastCardData = withProps((props: InitProps) => {
  const { profile_path } = props.castPerson
  const imageWidthSize = 200
  const photoSrc = getImageSrc(profile_path, imageWidthSize)
  return { photoSrc }
})

const MovieDetailCastCardEnhancer = compose(withMovieDetailCastCardData)

export default MovieDetailCastCardEnhancer
