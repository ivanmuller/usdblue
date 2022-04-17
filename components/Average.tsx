import React from 'react'
import { Text } from 'styles/Layout'
import { AverageStyled } from 'styles/Average'

export const Average = ({ averages, lastUpdate}) => {
  const today = new Date(lastUpdate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
 
  return (
    <AverageStyled>
      <Text {...{'as':'h2','fs':'lg','fw':'900'}}>USD BLUE <Text {...{'as':'span','fs':'sm'}}>Price Average</Text></Text>
      <div>
        <Text {...{'as':'p','fs':'md','color':'brand1'}}>
          Buying at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900'}}>{averages ? averages.average_buy_price : '...'}</Text>            
        </Text>
        <Text {...{'as':'p','fs':'md','color':'brand2'}}>
          Selling at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_sell_price : '...'}</Text>
        </Text>
      </div>
      <div className="date"><span suppressHydrationWarning={true}>Last Update: {today}hs</span></div>
    </AverageStyled>
  )
}