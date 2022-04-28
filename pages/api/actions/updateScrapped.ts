import settings from 'settings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client';

import getByJson from 'utilities/getByJson'
import getByScrapper from 'utilities/getByScrapper'
import type { SourceSetting } from 'interfaces'

const prisma = new PrismaClient()

export default async function Updater(req: NextApiRequest, res: NextApiResponse) {

  // Only WITH SECRET KEY allowed
  const { authorization } = req.headers;
  if (authorization !== `Bearer ${process.env.API_SECRET_KEY}`) {
    res.status(401).end('Invalid Token');
    return
  }

  // Only POST allowed
  if (req.method != 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return
  }

  const mainDataEnabled = settings.mainData.filter((item: SourceSetting) => item.enabled)

  const promises = mainDataEnabled.map((item: SourceSetting, index: number) => {
    if (item.method == 'getByJson') {
      return getByJson(item, index)
    } else if (item.method == 'getByScrapper') {
      return getByScrapper(item, index)
    }
  });

  Promise.allSettled(promises)
  .then(response => {

    const fullFilledSources = response.reduce((acc,item) => {
      if (item.status === 'fulfilled') acc.push({...item.value})
      return acc;
    },[])

    async function deleteAndUpdateScrapped() {
      await prisma.scrapped.deleteMany({})
      await prisma.scrapped.createMany({
        data: fullFilledSources
      })
    }

    if(fullFilledSources.length>0){
      deleteAndUpdateScrapped().then(()=>{
        return res.status(200).json({ 'message': 'done' })
      })
    }
    
  })
  .catch(error => res.status(404).json({ 'Error': error.toString() }));
}