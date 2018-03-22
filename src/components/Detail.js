// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'
import { getImageSrc } from '../modules/images/utils'
import { Icon } from 'semantic-ui-react'

type DetailProps = { movie: Movie }

const Detail = (props: DetailProps) => {
  const { title, overview, backdrop_path, poster_path } = props.movie
  const posterImageSrc = getImageSrc(poster_path, 300)
  const backgroudsImageSrc = getImageSrc(backdrop_path)
  return (
    <div className='detail-wrapper'>
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
              <span className='date'>(2015)</span>
            </h1>
            <ul className='jumbo-actions'>
              <li className='vote'> 76 </li>
              <li>
                <Icon name='heart' size='large' />
              </li>
            </ul>
            <div className='jumbo-description'>
              <h3 className='jumbo-title'>General</h3>
              <p>{overview}</p>
            </div>
            <div className='jumbo-team'>
              <h3 className='jumbo-title'>Equipo Destacado</h3>
              <ul>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
                <li>
                  <strong className='name'>nombre</strong>
                  <p>director</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  )
}

export default Detail
