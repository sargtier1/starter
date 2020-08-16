import * as React from 'react'
import { AppProps } from 'next/app'
import {
  theme,
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
} from '@chakra-ui/core'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <ThemeProvider theme={theme}>
        <ColorModeProvider>
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

export default MyApp
