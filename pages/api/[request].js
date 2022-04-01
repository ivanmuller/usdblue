import mainData from '../../data/';
import { calcAverage, calcSlippage } from "../../utilities";

export default async function handler(req, res) {

  const promises = mainData.quotes.map((item,index)=>{
    return fetch(`${item.source}`)
      .then(response => response.json())
      .then(data => {
        return ({
          ...item,
          'sourceId': (index + 1),
          'buy_price' : data[item.selectionKey].usd,
          'sell_price': data[item.selectionKey].usd
        })
      });
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
      return res.status(200).json(processedData)//[req.query.request]
    })
    .catch(response => res.status(404).json({ 'Error': 'Error retrieving information' }));

}
