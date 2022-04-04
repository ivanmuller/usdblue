export default {
  "quotes" : [
    {
      "source": "https://mercados.ambito.com/home/general",  
      "sourceName": "Ambito Financiero",
      "method": 'getByJson',
      "selectionKey1": "val1",
      "selectionKey2": "val2",
      "selectionFilter": "Dólar Informal",
    },
    {
      "source": "https://dolarhoy.com/",
      "sourceName": "Dólar Hoy",
      "method": 'getByScrapper',
      "selectionKey1": ".cotizacion .dolar > .tile:nth-child(1) .values div:nth-child(1) .val",
      "selectionKey2": ".cotizacion .dolar > .tile:nth-child(1) .values div:nth-child(2) .val",
      "selectionFilter": "\\$"
    },
    {
      "source": "https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB",
      "sourceName": "Cronista",
      "method": 'getByScrapper',
      "selectionKey1": ".markets.boxed .buy .buy-value",
      "selectionKey2": ".markets.boxed .sell .sell-value",
      "selectionFilter": "\\$"
    },
    /*{
      "source": "https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DBLUE",
      "sourceName": "La Nación",
      "method": 'getByJson',
      "selectionKey1": "compra",
      "selectionKey2": "venta"
    }*/
  ]
}