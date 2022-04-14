import type { NextApiRequest, NextApiResponse } from 'next'

import gSheetsUpdater from 'utilities/gSheetsUpdater'
import mainData from 'data'
import formatScrappedForGsheets from "utilities/formatScrappedForGsheets"
import getByJson from 'utilities/getByJson'
import getByScrapper from 'utilities/getByScrapper'
import type { SourceSetting } from 'interfaces'

export default async function Updater(req: NextApiRequest, res: NextApiResponse) {

  const mainDataEnabled = mainData.filter((item: SourceSetting) => item.enabled)

  const promises = mainDataEnabled.map((item: SourceSetting, index: number) => {
    if (item.method == 'getByJson') {
      return getByJson(item, index)
    } else if (item.method == 'getByScrapper') {
      return getByScrapper(item, index)
    }
  });

  Promise.all(promises)
  .then(response => {
    const rowsToUpdate = formatScrappedForGsheets(response);
    gSheetsUpdater(rowsToUpdate)
    return res.status(200).json({ 'message': 'done' })
  })
  .catch(error => res.status(404).json({ 'Error': error }));
}