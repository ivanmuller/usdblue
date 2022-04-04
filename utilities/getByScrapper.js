const cheerio = require('cheerio')

const getByScrapper = (item,index) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item

  return fetch(source)
  .then(response => {
    if (!response.ok) {
      return {'error': response.status}
    } else {
      return response.text()
    }
  })
  .then(data => {
    const $ = cheerio.load(data)
    const re = new RegExp(selectionFilter, "g")
    const buyValue = $(selectionKey1).text().replace(re, '')
    const sellValue = $(selectionKey2).text().replace(re, '')
    return ({  
      source, 
      sourceName,
      'sourceId': (index + 1),
      'buy_price': parseFloat(buyValue),
      'sell_price': parseFloat(sellValue)
    })
  });
}

export default getByScrapper;