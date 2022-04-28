import settings from 'settings'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) { 
  
  // Only POST allowed
  if (req.method != 'POST') {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
    return
  }

  // Only SAME-ORIGIN allowed
  if (req.headers.origin != settings.host) {
    res.status(403).end('Origin forbidden');
    return
  }

  try {
    const result = await prisma.averages.findMany({
      orderBy: [
        {
          date: 'desc',
        }
      ],
      take: 8
    });
    res.setHeader('Cache-Control', 's-maxage=1800');
    res.status(200).json(result)
  } catch(error) {
    res.status(404).json({ 'error': error.toString() })
  }

}
