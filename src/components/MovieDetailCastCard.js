// @flow
/* eslint-disable react/jsx-no-bind */
import type { CastPerson } from '../modules/movies/types'
import React from 'react'
import MovieDetailCastCardEnhancer from '../services/MovieDetailCastCard'
import blankPhoto from '../blankCastPersonPhoto.gif'

type MovieDetailCastCardProps = { castPerson: CastPerson, photoSrc: string }

const MovieDetailCastCard = (props: MovieDetailCastCardProps) => {
  const { castPerson, photoSrc } = props
  return (
    <div className='cast-card'>
      <img
        src={photoSrc}
        className='cast-card-photo'
        alt={castPerson.name}
        onError={e => (e.target.src = blankPhoto)}
      />
      <div className='cast-card-content'>
        <div className='cast-card-name'>{castPerson.name}</div>
        <div className='cast-card-character'>{castPerson.character}</div>
      </div>
    </div>
  )
}

export default MovieDetailCastCardEnhancer(MovieDetailCastCard)
