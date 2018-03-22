// @flow
import { GET_IMAGE_URL_BASE } from '../../constants'

type GetImageSrc = (urlPath: string, widthSize?: number | 'original') => string

export const getImageSrc: GetImageSrc = (urlPath, widthSize = 'original') => {
  const size = isNaN(widthSize) ? widthSize : 'w' + widthSize
  return GET_IMAGE_URL_BASE + size + urlPath
}
