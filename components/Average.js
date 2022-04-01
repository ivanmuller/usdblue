import { React, useEffect, useState } from 'react';
import { Text } from '@root/styles/Layout';
import { AverageStyled } from '@root/styles/Average';

export const Average = () => {
  const [averages, setAverages] = useState()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{
    const fetchData = fetch('/api/average')
    fetchData.then(response => {
      if (!response.ok) {
        setError(response.status)
        setIsLoading(false)
      } else {
        return response.json()
      }      
    })
    .then(json => {
      setAverages(json)
      setIsLoading(false)
    });
  },[]);

  return (
    <AverageStyled>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <Text as="h2" fs="lg" fw="900">USD BLUE<br /> <Text as="span" fs="sm">Price Average</Text></Text> 
      <Text as="p" fs="md">
        Buy at<br />
        <Text as="span" fs="lg" fw="900">{averages ? averages.average_buy_price : '...'}</Text>            
      </Text>
      <Text as="p" fs="md">
        Sell at<br />
        <Text as="span" fs="lg" fw="900">{averages ? averages.average_sell_price : '...'}</Text>
      </Text>
      <div className="date">01-04-2022</div>
    </AverageStyled>
  )
}
