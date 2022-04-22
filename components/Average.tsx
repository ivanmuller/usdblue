import React from 'react'
import { TextLgBold, TextSm, TextMdBrand1, TextMdBrand2 } from 'styles/Text'
import { AverageStyled } from 'styles/Average'
import { AverageChart } from 'components/AverageChart'
import { lastUpdateFormat } from 'utilities'

export const Average = ({ averages, lastUpdate }) => {
  return (
    <AverageStyled>
      <TextLgBold as='h2'>USD BLUE <TextSm>AR$ Price Average</TextSm></TextLgBold>
      <div>
        <TextMdBrand1 as='p'>
          Buying at<br />
          <TextLgBold>{averages ? averages.average_buy_price : '...'}</TextLgBold>
        </TextMdBrand1>
        <TextMdBrand2 as='p'>
          Selling at<br />
          <TextLgBold>{averages ? averages.average_sell_price : '...'}</TextLgBold>
        </TextMdBrand2>
      </div>
      <AverageChart />
      <div className='date'>
        <span suppressHydrationWarning={true}>
          {lastUpdate &&
            <>
              <span className='liveIndicator blink-1'>•</span> Last update: {lastUpdateFormat(lastUpdate)}
            </>}
        </span>
      </div>
    </AverageStyled>
  )
}
