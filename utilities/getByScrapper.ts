import settings from "settings"
const cheerio = require('cheerio')

const getByScrapper = (item:any,index:number) => {
  const { source, sourceName, selectionKey1, selectionKey2, selectionFilter } = item
  let today = new Date()
  today.setHours(today.getHours() - settings.timeZoneOffsetHours)
  today.toLocaleString()
  
  return fetch(source)
  .then((response : any) => {
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
      sourceName,
      'date': today,
      'sourceId': (index + 1),
      'buy_price': parseFloat(buyValue),
      'sell_price': parseFloat(sellValue)
    })
  });
}

export default getByScrapper;