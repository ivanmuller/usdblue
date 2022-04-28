import settings from 'settings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { calcAverage } from 'utilities'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(); 

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

  fetch(`${settings.host}/api/scrapped`, {
    method: 'POST'
  }).then(resp =>{
    return resp.json()
  }).then(response => {
    const average_buy_price = calcAverage(response, 'buy_price')
    const average_sell_price = calcAverage(response, 'sell_price')
    const today = new Date()
    async function updateAverages() {
      await prisma.averages.create({
        data: ({date: today, buy_price : average_buy_price, sell_price : average_sell_price})
      })
    }
    updateAverages().then(() => {
      res.status(200).json({ 'message': 'Done' })
    })
  }).catch(error => {
    res.status(404).json({ 'Error': error.toString() })
  })

}
