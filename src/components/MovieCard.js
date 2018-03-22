// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'
import { getImageSrc } from '../modules/images/utils'
type MovieCardProps = {
  movie: Movie,
  onGoToMovieDetail: number => () => void
}

const MovieCard = (props: MovieCardProps) => {
  const { id, title, poster_path, overview, vote_average } = props.movie
  const imageWidthSize = 500
  const imageSrc = getImageSrc(poster_path, imageWidthSize)
  return (
    <a className='mycard' onClick={props.onGoToMovieDetail(id)}>
      <img src={imageSrc} alt={title} className='mycard-poster' />
      <div className='mycard-content'>
        <div className='header'>
          <div className='vote-average'>
            <span>{vote_average * 10}</span>
          </div>
          <div className='title'>
            <h3 className='title-text'>{title}</h3>
            <div className='meta'>
              <span className='date'>Joined in 2015</span>
            </div>
          </div>
        </div>
        <div className='description'>{overview.substring(0, 170) + '...'}</div>
        <div className='more-info'>
          <p>Mas Información...</p>
        </div>
      </div>
    </a>
  )
}

export default MovieCard
