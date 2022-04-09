import type { NextApiRequest, NextApiResponse } from 'next'

import sheetsUpdate from 'utilities/sheetsUpdate'
import mainData from 'data'
import formatRowsForGsheets from "utilities/formatRowsForGsheets"
import getByJson from 'utilities/getByJson'
import getByScrapper from 'utilities/getByScrapper'
import type { Average as AverageType, Slippage as SlippageType, Quote, QuoteSetting } from 'interfaces'

export default async function Updater(req: NextApiRequest | any, res: NextApiResponse) {

  const mainDataEnabled = mainData.filter((item: QuoteSetting) => item.enabled)

  const promises = mainDataEnabled.map((item: QuoteSetting, index: number) => {
    if (item.method == 'getByJson') {
      return getByJson(item, index)
    } else if (item.method == 'getByScrapper') {
      return getByScrapper(item, index)
    }
  });

  Promise.all(promises)
  .then(response => {
    sheetsUpdate(formatRowsForGsheets(response))
  })
    .catch(error => res.status(404).json({ 'Error': error }));
    
  return res.status(200).json({'message':'done'})

}