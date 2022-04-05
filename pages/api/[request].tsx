import type { NextApiRequest, NextApiResponse } from 'next'

import mainData from '/data'
import { calcAverage, calcSlippage } from "/utilities"
import getByJson from '/utilities/getByJson'
import getByScrapper from '/utilities/getByScrapper'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const promises = mainData.quotes.map((item,index:number)=>{
    if(item.method == 'getByJson') {
      return getByJson(item,index)
    } else if (item.method == 'getByScrapper') {
      return getByScrapper(item, index)
    }
  });

  Promise.all(promises)
    .then(response => {
      const processedAverage = { 
        'average_buy_price': calcAverage(response, 'buy_price'),
        'average_sell_price': calcAverage(response, 'sell_price') 
      }
      const processedSlippage = response.map((item, index)=>{
        return ({ 
          'sourceId': index + 1, 
          'buy_price_slippage': calcSlippage(processedAverage.average_buy_price, item.buy_price), 
          'sell_price_slippage': calcSlippage(processedAverage.average_sell_price, item.sell_price), 
          'source': item.source
        });
      });
      const processedData = { 'quotes': response, 'average': processedAverage, 'slippage': processedSlippage };
      res.setHeader('Cache-Control', 's-maxage=60')
      return res.status(200).json(processedData[req.query.request])//[req.query.request]
    })
    .catch(error => res.status(404).json({ 'Error': error }));
}
