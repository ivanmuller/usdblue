import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

import settings from 'settings'
import getByJson from 'utilities/getByJson'
import getByScrapper from 'utilities/getByScrapper'
import type { SourceSetting } from 'interfaces'

const prisma = new PrismaClient()

export default async function Updater(req: NextApiRequest, res: NextApiResponse) {

  const mainDataEnabled = settings.mainData.filter((item: SourceSetting) => item.enabled)

  const promises = mainDataEnabled.map((item: SourceSetting, index: number) => {
    if (item.method == 'getByJson') {
      return getByJson(item, index)
    } else if (item.method == 'getByScrapper') {
      return getByScrapper(item, index)
    }
  });

  Promise.all(promises)
  .then(response => {
    async function deleteAndUpdateScrapped() {
      await prisma.scrapped.deleteMany({})
      response.forEach(async (respItem) => {
        await prisma.scrapped.create({
          data: respItem
        })
      })
    }
    deleteAndUpdateScrapped()
    return res.status(200).json({ 'message': 'done' })
  })
  .catch(error => res.status(404).json({ 'Error': error.toString() }));
}