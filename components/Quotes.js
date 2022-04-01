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

  useEffect(()=>{
    getQuotes();
    getSlippage();
  },[]);

  return (
    <QuotesListStyled>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {(quotes && slippages) && quotes.map((item) => {
        const slippageData = slippages.filter((slipEl) => slipEl.sourceId == item.sourceId)
        return(
          <QuoteStyled direction="column" key={item.sourceId}>
            <Text as="h4" fw="900">{item.sourceName}</Text>
            <Text as="p">
              Buy<br />
              <Text as="span" fs="md" fw="900">{item.buy_price}</Text><br />
              <Text as="span" fs="xs">{slippageData[0].buy_price_slippage}% of average</Text>
            </Text>
            <Text as="p">
              Sell<br />
              <Text as="span" fs="md" fw="900">{item.buy_price}</Text><br />
              <Text as="span" fs="xs">{slippageData[0].sell_price_slippage}% of average</Text>
            </Text>
          </QuoteStyled>
        )}
      )}
    </QuotesListStyled>
  )
}
