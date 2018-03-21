// @flow
import React from 'react'
import logo from '../logo.svg'
import MoviesList from './MoviesList'

type HomeProps = {
  movies: Array<Object>,
  onGoToMovieDetail: number => () => void
}

const Home = (props: HomeProps) => (
  <div className='App'>
    <header className='App-header'>
      <img src={logo} className='App-logo' alt='logo' />
      <h1 className='App-title'>Welcome to React</h1>
    </header>
    <MoviesList
      movies={props.movies}
      onGoToMovieDetail={props.onGoToMovieDetail}
    />
  </div>
)

export default Home
