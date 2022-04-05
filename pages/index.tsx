import Head from 'next/head'
import { Wrapper } from "styles/Layout"
import { Quotes } from "components/Quotes"
import { Average } from "components/Average"
import { Text } from 'styles/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>Usd Blue</title>
      </Head>

      <Wrapper>
        <Average />
        <Text as="h3" fw="900" fs="md" margin="0 0 2.4rem">📰 Sources</Text>
        <Quotes />
      </Wrapper>
    </>
  )
}
