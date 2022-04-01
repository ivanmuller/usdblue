import { React, useEffect, useState } from 'react';
import { Text } from '@root/styles/Layout';
import { AverageStyled } from '@root/styles/Average';

export const Average = () => {
  const [averages, setAverages] = useState()
  const [error, setError] = useState("")
  const today = new Date().toLocaleDateString()

  const getAverages = () => {
    setAverages()
    const fetchData = fetch('/api/average')
    fetchData.then(response => {
      if (!response.ok) {
        setError(response.status)
      } else {
        return response.json()
      }
    })
    .then(json => {
      setAverages(json)
    });
  }

  useEffect(()=>{
    getAverages()
    const interval = setInterval(() => {
      getAverages()
    }, 15000);
    return () => clearInterval(interval)
  },[]);

  return (
    <AverageStyled>
      {error && <p>{error}</p>}
      <Text {...{'as':'h2','fs':'lg','fw':'900'}}>USD BLUE <Text {...{'as':'span','fs':'sm'}}>Price Average</Text></Text>
      <div>
        <Text {...{'as':'p','fs':'md','color':'brand1'}}>
          Buying at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900'}}>{averages ? averages.average_buy_price : '...'}</Text>            
        </Text>
        <Text {...{'as':'p','fs':'md' }}>
          Selling at<br />
          <Text {...{ 'as': 'span', 'fs': 'lg', 'fw': '900' }}>{averages ? averages.average_sell_price : '...'}</Text>
        </Text>
      </div>
      <div className="date" suppressHydrationWarning={true}>{today}</div>
    </AverageStyled>
  )
}
