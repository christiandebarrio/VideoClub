// @flow
import React from 'react'
import MovieCard from './MovieCard'
import { Container } from 'semantic-ui-react'

type MoviesListProps = {
  movies: Array<Object>,
  onGoToMovieDetail: number => () => void
}

const MoviesList = (props: MoviesListProps) => {
  const renderMovies = props.movies.map(movie => (
    <MovieCard
      movie={movie}
      onGoToMovieDetail={props.onGoToMovieDetail}
      key={movie.id}
    />
  ))
  return (
    <Container className='movie-card-list'>
      <h1 className='title'>Películas populares</h1>
      {renderMovies}
    </Container>
  )
}

export default MoviesList
