import type { NextApiRequest, NextApiResponse } from 'next'
import { transformToObject } from "utilities"
import gSheetsRequester from 'utilities/gSheetsRequester'

export default async function handler(req: NextApiRequest | any, res: NextApiResponse) {

  const result = await gSheetsRequester('Sources')
  if (result.error) {
    return res.status(404).json({ 'error': result.error.message })
  } else {
    const transformed = transformToObject(result.values)
    return res.status(200).json(transformed)
  }
}
