const dev = process.env.NODE_ENV !== 'production'

const settings = {
  host: dev ? 'http://localhost:3000' : 'https://usdblue.vercel.app',
  swrRefreshInterval: 1800000,
  chart: {
    height: '200px',
    tooltipsColors: {
      '#333591': '#4C4D86',
      '#f308b8': '#820263'
    }
  },
  styles: {
    headerHeight: '70px',
    wrapperWidth: '840px',
    gap: '3rem',
    chart: {
      height: '170px'
    },
    fs: {
      xs: '1.6rem',
      sm: '1.8rem',
      md: '2.6rem',
      lg: '3.5rem'
    },
    colors: {
      neutral: '#222',
      brand1: '#4C4D86',
      brand2: '#820263',
      brandLight: '#ccebf1',
      white: '#FFF',
      light: '#EEEEEE'
    }
  },
  mainData: [
    {
      enabled: true,
      source: 'https://mercados.ambito.com/home/general',
      sourceName: 'Ambito Financiero',
      method: 'getByJson',
      selectionKey1: 'val1',
      selectionKey2: 'val2',
      selectionFilter: 'Dólar Informal'
    },
    {
      enabled: true,
      source: 'https://dolarhoy.com/',
      sourceName: 'Dólar Hoy',
      method: 'getByScrapper',
      selectionKey1: '.cotizacion .dolar > .tile:nth-child(1) .values div:nth-child(1) .val',
      selectionKey2: '.cotizacion .dolar > .tile:nth-child(1) .values div:nth-child(2) .val',
      selectionFilter: '\\$'
    },
    {
      enabled: true,
      source: 'https://www.cronista.com/MercadosOnline/moneda.html?id=ARSB',
      sourceName: 'Cronista',
      method: 'getByScrapper',
      selectionKey1: '.markets.boxed .buy .buy-value',
      selectionKey2: '.markets.boxed .sell .sell-value',
      selectionFilter: '\\$'
    },
    {
      enabled: true,
      source: 'https://api-contenidos.lanacion.com.ar/json/V3/economia/cotizacionblue/DBLUE',
      sourceName: 'La Nación',
      method: 'getByJson',
      selectionKey1: 'compra',
      selectionKey2: 'venta'
    }
  ]
}

export default settings
