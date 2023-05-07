import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts.js'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

const Website = ({ Component, pageProps, router }) => {
  return (
    useEffect(() => {
      const threeScript = document.createElement('script')
      threeScript.setAttribute('id', 'threeScript')
      threeScript.setAttribute(
        'src',
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js'
      )
      document.getElementsByTagName('head')[0].appendChild(threeScript)
      return () => {
        if (threeScript) {
          threeScript.remove()
        }
      }
    }, []),
    (
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    )
  )
}

export default Website
