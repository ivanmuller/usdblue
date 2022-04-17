import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient(); 

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) {
  if (req.method != 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
  try {
    const result = await prisma.scrapped.findMany();
    return res.status(200).json(result)
  } catch(error){
    return res.status(404).json({ 'error': error.toString() })
  }
  
}
