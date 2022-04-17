import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(); 

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) {
  if (req.method != 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return
  }
  try {
    const result = await prisma.scrapped.findMany();
    res.setHeader('Cache-Control', 's-maxage=1800');
    res.status(200).json(result)
  } catch(error){
    res.status(404).json({ 'error': error.toString() })
  }
  
}
