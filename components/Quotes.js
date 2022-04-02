import { React, useEffect, useState } from 'react';
import { Text } from '@root/styles/Layout';
import { QuotesListStyled } from '@root/styles/Quotes';
import { QuoteStyled } from '@root/styles/Quotes';

export const Quotes = () => {
  const [quotes, setQuotes] = useState()
  const [slippages, setSlippage] = useState()
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const getQuotes = () => {
    setQuotes()
    const fetchData = fetch('/api/quotes')
    fetchData.then(response => {
      if (!response.ok) {
        setError(response.status)
        setIsLoading(false)
      } else {
        return response.json()
      }
    })
    .then(json => {
      setQuotes(json)
      setIsLoading(false) // warning -> two loading and error handlers
    });
  }

  const getSlippage = () => {
    setSlippage()
    const fetchData = fetch('/api/slippage')
    fetchData.then(response => {
      if (!response.ok) {
        setError(response.status)
        setIsLoading(false)
      } else {
        return response.json()
      }
    })
    .then(json => {
      setSlippage(json)
      setIsLoading(false)
    });
  }

  useEffect(() => {
    getQuotes();
    getSlippage();
    const interval = setInterval(() => {
      getQuotes();
      getSlippage();
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <QuotesListStyled>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {(quotes && slippages) && quotes.map((item) => {
        const { sourceId,sourceName,buy_price,sell_price } = item
        const slippageData = slippages.filter((slipEl) => slipEl.sourceId == sourceId)[0]
        const { buy_price_slippage, sell_price_slippage } = slippageData;
        return(
          <QuoteStyled direction="column" key={sourceId}>
            <Text {...{ 'as': 'h4', 'fw': '900' }}>&bull; {sourceName}</Text>
            <Text {...{ 'as': 'p', 'color': 'brand1' }}>
              Buy<br />
              <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{buy_price}</Text><br />
              <Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{buy_price_slippage > 0 && "+"}{buy_price_slippage}% of average</Text>
            </Text>
            <Text {...{ 'as': 'p', 'color': 'brand2' }}>
              Sell<br />
              <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{sell_price}</Text><br />
              <Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{sell_price_slippage > 0 && "+"}{sell_price_slippage}% of average</Text>
            </Text>
          </QuoteStyled>
        )}
      )}
    </QuotesListStyled>
  )
}
