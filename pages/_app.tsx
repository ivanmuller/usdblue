import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from 'utilities'
import Footer from "components/Footer"
import { MainStyled } from "styles/Layout"
import { GlobalStyle } from "styles/GlobalStyle"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher, refreshInterval: 15000 }}>
      <GlobalStyle />
      <MainStyled>
        <Component {...pageProps} />
      </MainStyled>
      <Footer />
    </SWRConfig>
  )
}

export default MyApp