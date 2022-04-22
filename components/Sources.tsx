import React from 'react'
import { TextMdBold, TextBold, TextBrand1, TextBrand2, TextXsNeutral } from 'styles/Text'
import { SourcesListStyled } from 'styles/Sources'
import { SourceStyled } from 'styles/Sources'
import type { Source } from 'interfaces'
import { formatSlippage } from 'utilities'

export const Sources = ({sources}) => {
  return (
    <>
      {sources && 
        <TextMdBold as="h3">📰 Sources</TextMdBold>
      }
      <SourcesListStyled>
        {(sources) && sources.map((item: Source) => {
          const { sourceId, sourceName, buy_price, sell_price, buy_price_slippage, sell_price_slippage } = item
          return(
            <SourceStyled direction="column" key={sourceId}>
              <TextBold as="h4">&bull; {sourceName}</TextBold>
              <div className="wrapPrices">
                <TextBrand1 as='p'>
                  Buy<br />
                  <TextMdBold>{buy_price}</TextMdBold><br />
                  <TextXsNeutral>{formatSlippage(buy_price_slippage)}</TextXsNeutral>
                </TextBrand1>
                <TextBrand2 as='p'>
                  Sell<br />
                  <TextMdBold>{sell_price}</TextMdBold><br />
                  <TextXsNeutral>{formatSlippage(sell_price_slippage)}</TextXsNeutral>
                </TextBrand2>
              </div>
            </SourceStyled>
          )}
        )}
      </SourcesListStyled>
    </>
  )
}
