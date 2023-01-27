import '../styles/style.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {

const [showChild, setShowChild] = useState(false);
  
useEffect(() => {
  setShowChild(true);
}, []);

if (!showChild) {
  return null;
}

  return(
    <ChakraProvider>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}
