import React from 'react'
import { Text } from 'styles/Layout'
import { AverageStyled } from 'styles/Average'
import { AverageChart } from  'components/AverageChart'
import { lastUpdateFormat } from 'utilities'

export const Average = ({ averages, lastUpdate }) => {

  return (
    <AverageStyled>
      <Text {...{ 'as': 'h2', 'fs': 'lg', 'fw': '900' }}>USD BLUE <Text {...{ 'as': 'span', 'fs': 'sm' }}>AR$ Price Average</Text></Text>
      <div>
        <Text {...{ 'as': 'p', 'fs': 'md', 'color': 'brand1' }}>
          Buying at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_buy_price : '...'}</Text>
        </Text>
        <Text {...{ 'as': 'p', 'fs': 'md', 'color': 'brand2' }}>
          Selling at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_sell_price : '...'}</Text>
        </Text>
      </div>
      <AverageChart />
      <div className="date">
        <span suppressHydrationWarning={true}>
          {lastUpdate && 
            <>
            <span className="liveIndicator blink-1">•</span> Last update: {lastUpdateFormat(lastUpdate)}
            </>
          }
        </span>
      </div>
    </AverageStyled>
  )
}