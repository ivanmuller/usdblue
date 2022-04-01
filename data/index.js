export default {
  "quotes" : [
    {
      "source": "https://mercados.ambito.com/home/general",  
      "sourceName": "Ambito Financiero",
      "selectionFilter": "Dólar Informal",
      "method": 'getByAfAPI',
      "selectionKey1": "val1",
      "selectionKey2": "val2"
    },
    {
      "source": "https://api.coingecko.com/api/v3/simple/price?ids=busd&vs_currencies=ars",
      "sourceName": "Dolar Hoy",
      "selectionKey": "busd",
      "method": 'getByCrypto'
    },
    {
      "source": "https://api.coingecko.com/api/v3/simple/price?ids=anchorust&vs_currencies=ars",
      "sourceName": "Cronista",
      "selectionKey": "anchorust",
      "method": 'getByCrypto'
    }
  ]
}

/*
{
  "source": "https://api.coingecko.com/api/v3/simple/price?ids=anchorust&vs_currencies=ars",
  "sourceName": "Terra UST",
  "selectionKey": "anchorust",
  "method": 'getByCrypto'
}
*/