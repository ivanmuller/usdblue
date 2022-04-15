import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) {

  /* call just 1 week */
  const result = await prisma.averages.findMany();
  if (result.error) {
    return res.status(404).json({ 'error': result.error.message })
  } else {
    return res.status(200).json(result)
  }
}
