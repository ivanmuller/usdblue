export default {
  "quotes" : [
    {
      "source": "https://api.coingecko.com/api/v3/simple/price?ids=terra-luna&vs_currencies=usd",  
      "sourceName": "Ambito Financiero",
      "selectionKey": "terra-luna",
      "method": getCrypto()
    },
    {
      "source": "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd",
      "sourceName": "Dolar Hoy",
      "selectionKey": "binancecoin",
      "method": getCrypto()
    },
    {
      "source": "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
      "sourceName": "Cronista",
      "selectionKey": "solana",
      "method": getCrypto()
    }
  ]
}