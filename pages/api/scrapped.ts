import type { NextApiRequest, NextApiResponse } from 'next'
import { transformToObject } from "utilities"
import gSheetsRequester from 'utilities/gSheetsRequester'

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) {

  const result = await gSheetsRequester('Scrapped')
  if (result.error) {
    return res.status(404).json({ 'Error': result.error.message })
  } else {
    const transformed = transformToObject(result.values)
    return res.status(200).json(transformed)
  }
  
  /*Promise.all(promises)
    .then(response => {
      const processedAverage: AverageType = { 
        'average_buy_price': calcAverage(response, 'buy_price'),
        'average_sell_price': calcAverage(response, 'sell_price') 
      }
      const processedSlippage: SlippageType[] = response.map((item: Quote, index:number)=>{
        return ({ 
          'sourceId': index + 1, 
          'buy_price_slippage': calcSlippage(processedAverage.average_buy_price, item.buy_price), 
          'sell_price_slippage': calcSlippage(processedAverage.average_sell_price, item.sell_price), 
          'source': item.source
        });
      });
      const processedData = { 'quotes': response, 'average': processedAverage, 'slippage': processedSlippage }
      res.setHeader('Cache-Control', 's-maxage=60')
      return res.status(200).json(processedData[req.query.request])//[req.query.request]
    })
    .catch(error => res.status(404).json({ 'Error': error }));*/
}
