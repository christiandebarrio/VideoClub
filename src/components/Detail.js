// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'
import { getImageSrc } from '../modules/images/utils'

type DetailProps = { movie: Movie }

const Detail = (props: DetailProps) => {
  const { title, overview, backdrop_path } = props.movie
  const backgroudsImageSrc = getImageSrc(backdrop_path)
  return (
    <div className='detail-wrapper'>
      <div className='jumbo'>
        <img
          className='img-background'
          alt='background'
          src={backgroudsImageSrc}
        />
      </div>
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  )
}

export default Detail
