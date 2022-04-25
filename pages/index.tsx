import Head from 'next/head'
import useSWR from 'swr'
import useTranslation from 'next-translate/useTranslation'

import { Wrapper } from "styles/Layout"
import { Sources } from "components/Sources"
import { Average } from "components/Average"

import { calcSlippage, calcAverage } from 'utilities'
import type { Average as AverageType, Source } from 'interfaces'

export default function Home() {
  const { t } = useTranslation('common')

  const { data, error } = useSWR<Source[]>('/api/scrapped')
  const isLoading: boolean = !data && !error
  let processedData : any = { 'sources' : data }

  if (data){
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
    const lastUpdate = data[0].date
    processedData = { 'sources': dataWithSlippage, 'averages': processedAverage, 'lastUpdate': lastUpdate }
  }

  return (
    <>
      <Head>
        <title>{t('title')}</title>
      </Head>

      <Wrapper className={isLoading && t('loading')}>
        {isLoading && <p>Loading...</p>}
        {!isLoading && <Average averages={processedData.averages} lastUpdate={processedData.lastUpdate} />}
        {error && <p>{t('errorPrefix')} {error.info}</p>}
        {!isLoading && <Sources sources={processedData.sources} />}
      </Wrapper>
    </>
  )
}
