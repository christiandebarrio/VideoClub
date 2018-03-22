// @flow
export type Movie = {
  vote_count: number,
  id: number,
  video: boolean,
  vote_average: number,
  title: string,
  popularity: number,
  poster_path: string,
  original_language: string,
  original_title: string,
  genre_ids: Array<number>,
  backdrop_path: string,
  adult: boolean,
  overview: string,
  release_date: string
}

export type Movies = Array<Movie>

type Genre = {
  id: number,
  name: string
}

type Company = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

type Country = {
  iso_3166_1: string,
  name: string
}

type Language = {
  iso_639_1: string,
  name: string
}

export type CastPerson = {
  cast_id: number,
  character: string,
  credit_id: string,
  gender: number,
  id: number,
  name: string,
  order: number,
  profile_path: string
}

export type CrewPerson = {
  credit_id: string,
  department: string,
  gender: number,
  id: number,
  job: string,
  name: string,
  profile_path: string
}

export type Credits = {
  id: number,
  cast: Array<CastPerson>,
  crew: Array<CrewPerson>
}

export type MovieDetail = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection?: boolean,
  budget: number,
  genres: Array<Genre>,
  homepage?: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: Array<Company>,
  production_countries: Array<Country>,
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: Array<Language>,
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
  credits?: Credits
}
