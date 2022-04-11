export type Quote = {
  sourceId: number
  source: string
  sourceName: string
  buy_price: number
  sell_price: number
  buy_price_slippage: number
  sell_price_slippage: number
}

export type QuoteSetting = {
  enabled: boolean
  source: string
  sourceName: string
  method: string
  selectionKey1: string
  selectionKey2: string
  selectionFilter: string
}

export type Average = {
  average_buy_price: number,
  average_sell_price: number
}