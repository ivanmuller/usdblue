import settings from 'settings'

import type { NextApiRequest, NextApiResponse } from 'next'

import gSheetsUpdater from 'utilities/gSheetsUpdater'
import { calcAverage } from 'utilities'
import formatAveragesForGsheets from "utilities/formatAveragesForGsheets"

export default async function Updater(req: NextApiRequest, res: NextApiResponse) {

  fetch(`${settings.host}/api/scrapped`).then(resp =>{
    return resp.json()
  }).then(response => {
    console.log(response)
    const average_buy_price = calcAverage(response, 'buy_price')
    const average_sell_price = calcAverage(response, 'sell_price')
    const rowsToUpdate = formatAveragesForGsheets(average_buy_price, average_sell_price, settings.google_sheet_tabs.averages)
    gSheetsUpdater(rowsToUpdate)
    res.status(200).json({ 'message': 'Done' })
  }).catch(error => {
    res.status(404).json({ 'Error': error })
  })

}