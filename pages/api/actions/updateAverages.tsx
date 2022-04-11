import type { NextApiRequest, NextApiResponse } from 'next'

import gSheetsUpdater from 'utilities/gSheetsUpdater'
import { calcAverage } from 'utilities'
import formatAveragesForGsheets from "utilities/formatAveragesForGsheets"

export default async function Updater(req: NextApiRequest | any, res: NextApiResponse) {

  fetch(`http://localhost:3000/api/scrapped`).then(resp =>{
    return resp.json()
  }).then(response => {
    console.log(response)
    const average_buy_price = calcAverage(response, 'buy_price')
    const average_sell_price = calcAverage(response, 'buy_price')
    const rowsToUpdate = formatAveragesForGsheets(average_buy_price, average_sell_price, 193399632)
    gSheetsUpdater(rowsToUpdate)
    res.status(200).json({ 'message': 'done' })
  }).catch(error => {
    res.status(404).json({ 'Error': error })
  })

}