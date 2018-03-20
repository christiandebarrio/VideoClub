// @flow
import React from 'react'

type MovieCardProps = {
  movie: Object
}

const MovieCard = (props: MovieCardProps) => <p>{props.movie.title}</p>

export default MovieCard
