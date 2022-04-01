const getByCrypto = (item,index) => {

  return fetch(item.source)
  .then(response => {
    if (!response.ok) {
      return {'error':response.status}
    } else {
      return response.json()
    }
  })
  .then(data => {
    const { source, sourceName } = item
    return ({
      source,
      sourceName,
      'sourceId': (index + 1),
      'buy_price': data[item.selectionKey].ars,
      'sell_price': data[item.selectionKey].ars
    })
  });
}

export default getByCrypto;