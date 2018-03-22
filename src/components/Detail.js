// @flow
import type { MovieDetail, CrewPerson } from '../modules/movies/types'
import React from 'react'
import DetailHeader from './DetailHeader'

type DetailProps = { movie: MovieDetail, mainCrew: Array<CrewPerson> }

const Detail = (props: DetailProps) => {
  const { movie } = props
  return (
    <div className='detail-wrapper'>
      <DetailHeader {...props} />
      <p>{movie.title}</p>
      <p>{movie.overview}</p>
    </div>
  )
}

export default Detail
