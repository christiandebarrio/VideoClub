// @flow
import React from 'react'
import MovieCard from './MovieCard'
import { Container } from 'semantic-ui-react'

type MoviesListProps = {
  movies: Array<Object>
}

const MoviesList = (props: MoviesListProps) => {
  return (
    <Container className='movie-card-list'>
      <h1 className='title'>Películas populares</h1>
      {props.movies.map((movie, index) => (
        <MovieCard movie={movie} key={`${index}-${movie.id}`} />
      ))}
    </Container>
  )
}

export default MoviesList
