import Head from 'next/head'
import useSWR from 'swr'

import { Wrapper } from "styles/Layout"
import { Quotes } from "components/Quotes"
import { Average } from "components/Average"

import { calcSlippage, calcAverage } from 'utilities'
import type { Average as AverageType, Quote } from 'interfaces'

export default function Home() {

  const { data, error } = useSWR<Quote[]>('/api/scrapped')
  const isLoading: boolean = !data
  let processedData = { 'quotes' : data }

  if (!isLoading){
    const processedAverage: AverageType = {
      'average_buy_price': calcAverage(data, 'buy_price'),
      'average_sell_price': calcAverage(data, 'sell_price')
    }
    const dataWithSlippage: Quote[] = data.map((item: Quote, index: number) => {
      return ({
        ...item,
        'sourceId': index,
        'buy_price_slippage': calcSlippage(processedAverage.average_buy_price, item.buy_price),
        'sell_price_slippage': calcSlippage(processedAverage.average_sell_price, item.sell_price)
      });
    });
    processedData = { 'quotes': dataWithSlippage, 'averages': processedAverage }
  }

  return (
    <>
      <Head>
        <title>Usd Blue</title>
      </Head>

      <Wrapper>
        {!isLoading && <Average averages={processedData.averages} />}
        {!isLoading && <Quotes quotes={processedData.quotes} />}
      </Wrapper>
    </>
  )
}
