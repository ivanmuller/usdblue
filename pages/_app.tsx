import type { AppProps } from 'next/app'
import '/styles/_globals.css'
import { SWRConfig } from 'swr'
import { fetcher } from '/utilities';
import Footer from "/components/Footer";
import { MainStyled } from "/styles/Layout";

function MyApp({ Component, pageProps }: AppProps) {
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