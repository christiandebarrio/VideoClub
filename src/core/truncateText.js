// @flow

export const truncateText = (text: string, chars: number): string => {
  if (text.length > chars) {
    return text.substring(0, chars) + '...'
  }
  return text
}
