// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'
import MovieCardEnhancer from '../services/MovieCard'

type MovieCardProps = {
  movie: Movie,
  posterSrc: string,
  voteFormated: string,
  dateFormated: string,
  description: string,
  onGoToMovieDetail: number => () => void
}

const MovieCard = (props: MovieCardProps) => {
  const {
    movie: { id, title },
    posterSrc,
    voteFormated,
    dateFormated,
    description
  } = props
  return (
    <a className='mycard' onClick={props.onGoToMovieDetail(id)}>
      <img src={posterSrc} alt={title} className='mycard-poster' />
      <div className='mycard-content'>
        <div className='header'>
          <div className='vote-average'>
            <span>{voteFormated}</span>
          </div>
          <div className='title'>
            <h3 className='title-text'>{title}</h3>
            <div className='meta'>
              <span className='date'>{dateFormated}</span>
            </div>
          </div>
        </div>
        <div className='description'>{description}</div>
        <div className='more-info'>
          <p>Mas Información...</p>
        </div>
      </div>
    </a>
  )
}

export default MovieCardEnhancer(MovieCard)
