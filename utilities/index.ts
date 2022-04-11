export const calcAverage = (arr: any, column: string): number => {
  const result = arr.reduce((acc, el) => acc + el[column], 0) / arr.length
  return Math.round(result * 100) / 100
}

export const calcSlippage = (average: number, original: any): number => {
  const result = ((original - average) / average) * 100
  return Math.round(result * 100) / 100
}

export const fetcher = async (url:string) => {
  const res = await fetch(url)
  if (!res.ok) {
    const error : any = new Error('An error occurred while fetching the data.')
    error.info = await res.json()
    error.status = res.status
    throw error
  }
  return res.json()
}

export const transformToObject = (result) => {
  var rows = [];
  for (var i=1; i<result.length; i++) {
    var rowObject = {};
    for (var j=0; j<result[i].length; j++) {
      rowObject[result[0][j]] = result[i][j];
    }
    rows.push(rowObject);
  }
  return rows;
}