export const calcAverage = (arr, column) => {
  const result = arr.reduce((acc, el) => acc + el[column], 0) / arr.length
  return Math.round(result * 100) / 100;
}

export const calcSlippage = (average, original) => {
  const result = ((original - average) / average) * 100;
  return Math.round(result * 100) / 100;
}

export const fetcher = async url => {
  const res = await fetch(url)
  if (!res.ok) {
    const error = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}