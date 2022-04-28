const cheerio = require('cheerio')

const getByScrapper = (item:any,index:number) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item
  const today = new Date()
  
  return fetch(source)
  .then((response: any) => response.text())
  .then(data => {
    const $ = cheerio.load(data)
    const re = new RegExp(selectionFilter, "g")
    const buyValue = parseFloat($(selectionKey1).text().replace(re, ''))
    const sellValue = parseFloat($(selectionKey2).text().replace(re, ''))
    if (!isNaN(buyValue) && !isNaN(sellValue)){
      return ({
        sourceName,
        'date': today,
        'sourceId': (index + 1),
        'buy_price': buyValue,
        'sell_price': sellValue
      })
    } throw new Error();    
  }).catch(null);
}

export default getByScrapper;