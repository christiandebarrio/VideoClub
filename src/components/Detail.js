// @flow
import type { Movie } from '../modules/movies/types'
import React from 'react'

type DetailProps = { ...Movie }

const Detail = (props: DetailProps) => {
  const { title, overview } = props
  return (
    <div>
      <p>{title}</p>
      <p>{overview}</p>
    </div>
  )
}

export default Detail
