export type Quote = {
  sourceId: number
  source: string
  sourceName: string
  buy_price: string
  sell_price: string
}

export type Slippage = {
  sourceId: number
  buy_price_slippage: number
  sell_price_slippage: number
  source: string
}

export type Average = {
  average_buy_price: number,
  average_sell_price: number
}