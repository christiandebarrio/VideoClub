// @flow
import { GET_IMAGE_URL_BASE } from '../../constants'

export const getImageSrc = (urlPath: string, widthSize: number): string => {
  const size = 'w' + widthSize
  return GET_IMAGE_URL_BASE + size + urlPath
}
