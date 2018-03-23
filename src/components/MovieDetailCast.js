// @flow
import type { CastPerson } from '../modules/movies/types'
import React from 'react'
import MovieDetailCastCard from './MovieDetailCastCard'

type MovieDetailCastProps = { cast: Array<CastPerson> }

const MovieDetailCast = (props: MovieDetailCastProps) => {
  const { cast } = props
  return (
    <div className='detail-wrapper'>
      <h3>CAST:</h3>
      {cast
        .slice(0, 6)
        .map((person, index) => (
          <MovieDetailCastCard
            castPerson={person}
            key={`${index}-${person.id}`}
          />
        ))}
    </div>
  )
}

export default MovieDetailCast
