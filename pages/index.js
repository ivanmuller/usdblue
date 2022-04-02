import Head from 'next/head'
import { Wrapper } from "@root/styles/Layout"
import { Quotes } from "@root/components/Quotes"
import { Average } from "@root/components/Average"
import { Text } from '@root/styles/Layout';

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
