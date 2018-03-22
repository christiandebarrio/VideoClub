// @flow
import type { CrewPerson } from '../modules/movies/types'
import React from 'react'

type MovieMainCrewPersonProps = {
  person: CrewPerson
}

const MovieMainCrewPerson = (props: MovieMainCrewPersonProps) => {
  const { name, job } = props.person
  return (
    <li>
      <strong className='name'>{name}</strong>
      <p>{job}</p>
    </li>
  )
}

export default MovieMainCrewPerson
