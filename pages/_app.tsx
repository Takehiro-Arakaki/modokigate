import '../styles/global.css'
import '../styles/playground.css'

import { useEffect, FC } from 'react'
import type { AppProps } from 'next/app'

const App: FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side')
    jssStyles?.parentElement?.removeChild(jssStyles)
  }, [])

  return <Component {...pageProps} />
}

export default App