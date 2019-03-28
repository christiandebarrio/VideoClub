// ™flow
const monthsMap = {
  0: { es: 'Enero' },
  1: { es: 'Febrero' },
  2: { es: 'Marzo' },
  3: { es: 'Abril' },
  4: { es: 'Mayo' },
  5: { es: 'Junio' },
  6: { es: 'Julio' },
  7: { es: 'Agosto' },
  8: { es: 'Septiembre' },
  9: { es: 'Octubre' },
  10: { es: 'Noviembre' },
  11: { es: 'Diciembre}' }
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
