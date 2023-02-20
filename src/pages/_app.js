import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider forcedTheme={Component.theme || undefined} attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
