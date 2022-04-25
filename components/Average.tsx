import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import { TextLgBold, TextSm, TextMdBrand1, TextMdBrand2 } from 'styles/Text'
import { AverageStyled } from 'styles/Average'
import { AverageChart } from 'components/AverageChart'
import { lastUpdateFormat } from 'utilities'

export const Average = ({ averages, lastUpdate }) => {
  const { t } = useTranslation('common')

  return (
    <AverageStyled>
      <TextLgBold as='h2'>{t('title')} <TextSm>{t('subTitle')}</TextSm></TextLgBold>
      <div>
        <TextMdBrand1 as='p'>
          {t('averages.buyTitle')}<br />
          <TextLgBold>{averages ? averages.average_buy_price : '...'}</TextLgBold>
        </TextMdBrand1>
        <TextMdBrand2 as='p'>
          {t('averages.sellTitle')}<br />
          <TextLgBold>{averages ? averages.average_sell_price : '...'}</TextLgBold>
        </TextMdBrand2>
      </div>
      <AverageChart />
      <div className='date'>
        <span suppressHydrationWarning={true}>
          {lastUpdate &&
            <>
            <span className='liveIndicator blink-1'>•</span>{t('averages.lastUpdate')} {lastUpdateFormat(lastUpdate)}
            </>}
        </span>
      </div>
    </AverageStyled>
  )
}
