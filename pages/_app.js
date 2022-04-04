import '@root/styles/_globals.css'
import { SWRConfig } from 'swr'
import { fetcher } from '@root/utilities';
import Footer from "@root/components/Footer";
import { MainStyled } from "@root/styles/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 15000 }}>
      <MainStyled>
        <Component {...pageProps} />
      </MainStyled>
      <Footer />
    </SWRConfig>
  )
}

export default MyApp
