import Head from 'next/head'
import useSWR from 'swr'
import { Wrapper } from "styles/Layout"
import { Sources } from "components/Sources"
import { Average } from "components/Average"

import { calcSlippage, calcAverage } from 'utilities'
import type { Average as AverageType, Source } from 'interfaces'

export default function Home() {
  
  const { data, error } = useSWR<Source[]>('/api/scrapped')
  const isLoading: boolean = !data
  let processedData = { 'sources' : data }

  if (!isLoading){
    const processedAverage: AverageType = {
      'average_buy_price': calcAverage(data, 'buy_price'),
      'average_sell_price': calcAverage(data, 'sell_price')
    }
    const dataWithSlippage: Source[] = data.map((item: Source, index: number) => {
      return ({
        ...item,
        'sourceId': index,
        'buy_price_slippage': calcSlippage(processedAverage.average_buy_price, item.buy_price),
        'sell_price_slippage': calcSlippage(processedAverage.average_sell_price, item.sell_price)
      });
    });
    processedData = { 'sources': dataWithSlippage, 'averages': processedAverage }
  }

  return (
    <>
      <Head>
        <title>Usd Blue</title>
      </Head>

      <Wrapper>
        {error && <p>{error.info.error}</p>}
        {!isLoading && <Average averages={processedData.averages} />}
        {!isLoading && <Sources sources={processedData.sources} />}
      </Wrapper>
    </>
  )
}
