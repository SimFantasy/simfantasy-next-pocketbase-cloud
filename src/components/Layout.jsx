import { Header, Footer } from '@/components'

const Layout = ({ children }) => {
  return (
    <div className='w-screen h-full min-h-screen'>
      <Header />
      <main className='container content-area'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
