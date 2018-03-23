// @flow
import type { CrewPerson } from '../modules/movies/types'
import React from 'react'
import MovieMainCrewPerson from './MovieMainCrewPerson'

type MovieMainCrewProps = {
  crew: Array<CrewPerson>
}

const MovieMainCrew = (props: MovieMainCrewProps) => (
  <div className='jumbo-team'>
    <h3 className='jumbo-title'>Equipo Destacado</h3>
    <ul>
      {props.crew.map((person, index) => (
        <MovieMainCrewPerson person={person} key={`${index}-${person.id}`} />
      ))}
    </ul>
  </div>
)

export default MovieMainCrew
