import { ListTitlebar, PortfolioList, Pagination } from '@/components'
import fetchApi from '@/service/apis'

const PortfoliosPage = ({ portfolios, page, portfolioCategories }) => {
  return (
    <div className='flex flex-col gap-10'>
      <ListTitlebar title='作品集' categories={portfolioCategories} />
      <PortfolioList portfolios={portfolios} page={page} />
    </div>
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
