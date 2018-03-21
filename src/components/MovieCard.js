// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import { getImageSrc } from '../modules/images/utils'
type MovieCardProps = {
  movie: Movie,
  onGoToMovieDetail: number => () => void
}

const MovieCard = (props: MovieCardProps) => {
  const { id, title, poster_path, overview, vote_average } = props.movie
  const imageWidthSize = 500
  const imageSrc = getImageSrc(poster_path, imageWidthSize)
  return (
    <Card onClick={props.onGoToMovieDetail(id)}>
      <div className='img-wrapper'>
        <Image src={imageSrc} className='image' floated='left' />
      </div>
      <Card.Content>
        <div className='vote-average'>
          <span>{vote_average * 10}</span>
        </div>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in 2015</span>
        </Card.Meta>
        <Card.Description>{overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <p>Mas Información...</p>
      </Card.Content>
    </Card>
  )
}

export default MovieCard

// <div>
//   <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
// </div>
