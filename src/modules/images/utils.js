// @flow

type GetImageSrc = (urlPath: string, widthSize?: number | 'original') => string

export const getImageSrc: GetImageSrc = (urlPath, widthSize = 'original') => {
  const size = isNaN(widthSize) ? widthSize : 'w' + widthSize
  return process.env.REACT_APP_GET_IMAGE_URL_BASE + size + urlPath
}
