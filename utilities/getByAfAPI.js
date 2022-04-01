const getByAfAPI = (item,index) => {

  return fetch(item.source)
  .then(response => {
    if (!response.ok) {
      return {'error':response.status}
    } else {
      return response.json()
    }
  })
  .then(data => {
    const filtered = data.filter((el)=> el.nombre === item.selectionFilter)[0]
    const { source, sourceName } = item
    return ({  
      source, 
      sourceName,
      'sourceId': (index + 1),
      'buy_price': parseFloat(filtered[item.selectionKey1]),
      'sell_price': parseFloat(filtered[item.selectionKey2])
    })
  });
}

export default getByAfAPI;