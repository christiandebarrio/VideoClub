// @flow
import React from 'react'
import MovieCard from './MovieCard'

type MoviesListProps = {
  movies: Array<Object>
}

const MoviesList = (props: MoviesListProps) => {
  const renderMovies = props.movies.map(movie => (
    <MovieCard movie={movie} key={movie.id} />
  ))
  return <div>{renderMovies}</div>
}

export default MoviesList
