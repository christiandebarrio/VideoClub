// ™flow
const monthsMap = {
  1: { es: 'Enero' },
  2: { es: 'Febrero' },
  3: { es: 'Marzo' },
  4: { es: 'Abril' },
  5: { es: 'Mayo' },
  6: { es: 'Junio' },
  7: { es: 'Julio' },
  8: { es: 'Agosto' },
  9: { es: 'Septiembre' },
  10: { es: 'Octubre' },
  11: { es: 'Noviembre' },
  12: { es: 'Diciembre}' }
}

type FormatMovieCardDate = ({
  date: date,
  language: string
}) => string

export const formatMovieCardDate: FormatMovieCardDate = (
  date,
  language = 'es'
) => {
  const month = monthsMap[date.getMonth()].es
  const day = date.getDay()
  const year = date.getFullYear()
  return `${month} ${day}, ${year}`
}
