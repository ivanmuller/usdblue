export const calcAverage = (arr: any, column: string): number => {
  const result = arr.reduce((acc, el) => acc + el[column], 0) / arr.length
  return Math.round(result * 10) / 10
}

export const calcSlippage = (average: number, original: any): number => {
  const result = ((original - average) / average) * 100
  return Math.round(result * 10) / 10
}

export const formatSlippage = (data) => {
  return (data == 0) ? "Same of average" : (data > 0) ? `+${data}% of average` : `${data}% of average`
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
    // ordering data
    data.sort((a, b) => {
      return a.date > b.date ? 1 : -1
    })
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

export const lastUpdateFormat = (lastUpdate) => {
  const today = new Date()
  const theLastUpdate = new Date(lastUpdate)
  if (today.getDate() === theLastUpdate.getDate()) {
    return theLastUpdate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }) + "hs"
  } else {
    return theLastUpdate.toLocaleString('en-us', { weekday: 'long' }) + " " + theLastUpdate.toLocaleString('en-us', { day: 'numeric' })
  }
}