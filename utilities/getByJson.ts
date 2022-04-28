const getByJson = (item:any,index:number) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item
  const today = new Date()
  
  return fetch(source)
  .then(response => response.json())
  .then(data => {
    let filtered = data
    if (selectionFilter){
      filtered = data.filter((el) => el.nombre === selectionFilter)[0]
    }
    const buyValue = parseFloat(filtered[selectionKey1])
    const sellValue = parseFloat(filtered[selectionKey2])
    if (!isNaN(buyValue) && !isNaN(sellValue)) {
      return ({  
        sourceName,
        'date': today,
        'sourceId': (index + 1),
        'buy_price': buyValue,
        'sell_price': sellValue
      })
    } throw new Error();
  }).catch( null );
}

export default getByJson;