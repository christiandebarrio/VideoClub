// @flow
import type { AppState } from '../../core/types'
import type { Movies } from './types'

export const getMovies = (state: AppState): Movies => state.movies
