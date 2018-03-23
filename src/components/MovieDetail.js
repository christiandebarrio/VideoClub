// @flow
import type { MovieDetail, CrewPerson } from '../modules/movies/types'
import React from 'react'
import MovieDetailHeader from './MovieDetailHeader'
import MovieDetailCast from './MovieDetailCast'

type DetailProps = { movie: MovieDetail, mainCrew: Array<CrewPerson> }

const Detail = (props: DetailProps) => {
  const { movie } = props
  return (
    <div className='detail-wrapper'>
      <MovieDetailHeader {...props} />
      <MovieDetailCast cast={movie.credits.cast} />
    </div>
  )
}

export default Detail
