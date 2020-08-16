import * as React from 'react'
import { AppProps } from 'next/app'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '../lib/apolloClient'
import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  const apolloClient = useApollo(pageProps.initialApolloState)

  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
