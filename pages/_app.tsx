import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { theme  } from '@chakra-ui/pro-theme' 
import '@fontsource/inter/variable.css'


export default function App({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>  )
}
