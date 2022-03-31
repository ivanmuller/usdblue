export const calcAverage = (arr, column) => {
  const result = arr.reduce((acc, el) => acc + el[column], 0) / arr.length;
  return Math.round(result * 100) / 100;
}

export const calcSlippage = (average, original) => {
  const result = ((average - original) / original) * 100;
  return Math.round(result * 100) / 100;
}