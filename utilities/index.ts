export const calcAverage = (arr: any, column: string): number => {
  const result = arr.reduce((acc, el) => acc + el[column], 0) / arr.length
  return Math.round(result * 100) / 100
}

export const calcSlippage = (average: number, original: any): number => {
  const result = ((original - average) / average) * 100
  return Math.round(result * 10) / 10
}

export const fetcher = async (url:string) => {
  const res = await fetch(url,{
      method: 'POST'
  })
  if (!res.ok) {
    const error : any = new Error('An error occurred while fetching the data.')
    error.info = res.statusText
    error.status = res.status
    throw error
  }
  return res.json()
}

export const buildDataForChart = (data, streamId, keyData, color) => {
  // adding first data
  const stream = { id: streamId, color: color, data: [] }
  //adding points of data
  if (data) {
    data.map((el,index, row) => {
      // removing first key string for styling puprose
      stream.data.push({ x: (index === 0) ? "" : el.date, y: el[keyData] })
      // adding last key string for styling puprose
      if (index + 1 === row.length){
        stream.data.push({ x: ".", y: el[keyData] })
      }
    })
  }
  return stream
}