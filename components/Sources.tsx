import React from 'react'
import { Text } from 'styles/Layout'
import { SourcesListStyled } from 'styles/Sources'
import { SourceStyled } from 'styles/Sources'
import type { Source } from 'interfaces'
import { formatSlippage } from 'utilities'

export const Sources = ({sources}) => {
  return (
    <>
      {sources && 
        <Text as="h3" fw="900" fs="md" margin="0 0 2.4rem">📰 Sources</Text>
      }
      <SourcesListStyled>
        {(sources) && sources.map((item: Source) => {
          const { sourceId, sourceName, buy_price, sell_price, buy_price_slippage, sell_price_slippage } = item
          return(
            <SourceStyled direction="column" key={sourceId}>
              <Text {...{ 'as': 'h4', 'fw': '900' }}>&bull; {sourceName}</Text>
              <div className="wrapPrices">
                <Text {...{ 'as': 'p', 'color': 'brand1' }}>
                  Buy<br />
                  <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{buy_price}</Text><br />
                  {<Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{formatSlippage(buy_price_slippage)}</Text>}
                </Text>
                <Text {...{ 'as': 'p', 'color': 'brand2' }}>
                  Sell<br />
                  <Text {...{ 'as': 'span', 'fs': 'md', 'fw': '900' }}>{sell_price}</Text><br />
                  {<Text {...{ 'as': 'span', 'fs': 'xs', 'color': 'neutral' }}>{formatSlippage(sell_price_slippage)}</Text>}
                </Text>
              </div>
            </SourceStyled>
          )}
        )}
      </SourcesListStyled>
    </>
  )
}
