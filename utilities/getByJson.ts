const getByJson = (item:any,index:number) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item
  const today = new Date()
  
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
      sourceName,
      'date': today,
      'sourceId': (index + 1),
      'buy_price': parseFloat(filtered[selectionKey1]),
      'sell_price': parseFloat(filtered[selectionKey2])
    })
  });
}

export default getByJson;