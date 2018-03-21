// @flow
import React from 'react'
import MoviesList from './MoviesList'

type HomeProps = {
  movies: Array<Object>,
  onGoToMovieDetail: number => () => void
}

const Home = (props: HomeProps) => (
  <MoviesList
    movies={props.movies}
    onGoToMovieDetail={props.onGoToMovieDetail}
  />
)

export default Home
