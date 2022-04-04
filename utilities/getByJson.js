const getByJson = (item,index) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item

  return fetch(source)
  .then(response => {
    if (!response.ok) {
      return {'error':response.status}
    } else {
      return response.json()
    }
  })
  .then(data => {
    let filtered = data
    if (selectionFilter){
      filtered = data.filter((el) => el.nombre === selectionFilter)[0]
    }
    return ({  
      source, 
      sourceName,
      'sourceId': (index + 1),
      'buy_price': parseFloat(filtered[selectionKey1]),
      'sell_price': parseFloat(filtered[selectionKey2])
    })
  });
}

export default getByJson;