import React from 'react'
import { Text } from 'styles/Layout'
import { AverageStyled } from 'styles/Average'
import useSWR from 'swr'
import type { Average as AverageType } from 'interfaces'

export const Average = () => {
  const today = new Date().toLocaleDateString()
  const { data, error } = useSWR<AverageType>('/api/average')
  const averages: AverageType = data
 
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
      <div className="date"><span suppressHydrationWarning={true}>{today}</span> {error && <span>{error.message}</span>}</div>
    </AverageStyled>
  )
}