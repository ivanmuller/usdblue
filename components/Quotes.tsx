import React from 'react'
import { Text } from 'styles/Layout'
import { QuotesListStyled } from 'styles/Quotes'
import { QuoteStyled } from 'styles/Quotes'
import type { Quote,Slippage } from 'interfaces'

export const Quotes = ({quotes}) => {

  return (
    <>
      <Text as="h3" fw="900" fs="md" margin="0 0 2.4rem">📰 Sources</Text>    
      <QuotesListStyled>
        {(quotes) && quotes.map((item: Quote) => {
          const { sourceId, sourceName, buy_price, sell_price, buy_price_slippage, sell_price_slippage } = item
          
          return(
            <QuoteStyled direction="column" key={sourceId}>
              <Text {...{ 'as': 'h4', 'fw': '900' }}>&bull; {sourceName}</Text>
              <Text {...{ 'as': 'p', 'color': 'brand1' }}>
                Buy<br />
                <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{buy_price}</Text><br />
                {<Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{buy_price_slippage > 0 && "+"}{buy_price_slippage}% of average</Text>}
              </Text>
              <Text {...{ 'as': 'p', 'color': 'brand2' }}>
                Sell<br />
                <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{sell_price}</Text><br />
                  {<Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{sell_price_slippage > 0 && "+"}{sell_price_slippage}% of average</Text>}
              </Text>
            </QuoteStyled>
          )}
        )}
      </QuotesListStyled>
    </>
  )
}
