// @flow
import React from 'react'
import { Link } from 'react-router-dom'

type MovieCardProps = {
  movie: Object
}

const MovieCard = ({ movie }: MovieCardProps) => (
  <div>
    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
  </div>
)

export default MovieCard
