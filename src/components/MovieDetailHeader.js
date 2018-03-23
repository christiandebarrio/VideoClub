// @flow
import type { MovieDetail, CrewPerson } from '../modules/movies/types'
import React from 'react'
import MovieMainCrew from './MovieMainCrew'
import { getImageSrc } from '../modules/images/utils'
import { Icon } from 'semantic-ui-react'

type DetailProps = { movie: MovieDetail, mainCrew: Array<CrewPerson> }

const MovieDetailHeader = (props: DetailProps) => {
  const {
    title,
    overview,
    backdrop_path,
    poster_path,
    release_date,
    vote_average
  } = props.movie
  const { mainCrew } = props
  const posterImageSrc = getImageSrc(poster_path, 300)
  const backgroudsImageSrc = getImageSrc(backdrop_path)
  const year = new Date(release_date).getFullYear()
  return (
    <div className='jumbo'>
      <img
        className='jumbo-background'
        alt='background'
        src={backgroudsImageSrc}
      />
      <div className='wrapper'>
        <img className='jumbo-poster' alt={title} src={posterImageSrc} />
        <div className='jumbo-content'>
          <h1 className='jumbo-content-title'>
            {title}
            <span className='date'>({year})</span>
          </h1>
          <ul className='jumbo-actions'>
            <li className='vote'>{vote_average * 10}</li>
            <li>
              <Icon name='heart' size='large' />
            </li>
          </ul>
          <div className='jumbo-description'>
            <h3 className='jumbo-title'>General</h3>
            <p>{overview}</p>
          </div>
          <MovieMainCrew crew={mainCrew} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetailHeader
