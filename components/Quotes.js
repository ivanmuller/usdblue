import { React } from 'react';
import { Text } from '@root/styles/Layout';
import { QuotesListStyled } from '@root/styles/Quotes';
import { QuoteStyled } from '@root/styles/Quotes';
import useSWR from 'swr';

export const Quotes = () => {
  const { data : quotes, error : errorQuotes } = useSWR('/api/quotes')
  const { data : slippages, error: errorSlippage } = useSWR('/api/slippage')
  const isLoading = !quotes && !slippages

  return (
    <QuotesListStyled>
      {isLoading && <p>Loading...</p>}
      {errorQuotes && <p>{errorQuotes.message}</p>}
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
