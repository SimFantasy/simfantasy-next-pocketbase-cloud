import { ListTitlebar, PortfolioList } from '@/components'
import Head from 'next/head'
import fetchApi from '@/service/apis'
import { siteName } from '@/constants/settings'

const PortfoliosPage = ({ portfolios, page, portfolioCategories }) => {
  return (
    <>
      <Head>
        <title>作品 - {siteName}</title>
      </Head>
      <div className='flex flex-col gap-10'>
        <ListTitlebar title='作品' categories={portfolioCategories} />
        <PortfolioList portfolios={portfolios} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const pageParams = +page === undefined || +page === 1 ? 1 : page
  const portfolios = await fetchApi.fetchPortfolios(pageParams)

  const portfolioCategories = await fetchApi.fetchPortfolioCategories()
  return {
    props: {
      portfolios,
      page: +page,
      portfolioCategories,
    },
  }
}

export default PortfoliosPage
