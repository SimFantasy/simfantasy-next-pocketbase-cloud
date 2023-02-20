import { PortfolioItem, Pagination } from '@/components'

const PortfolioList = ({ portfolios, page }) => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='pb-10 w-full grid grid-cols-2 md:grid-cols-3 gap-6'>
        {portfolios?.items?.map(portfolio => (
          <PortfolioItem key={portfolio.id} {...portfolio} />
        ))}
      </div>
      {page && <Pagination page={page} totalPages={portfolios.totalPages} />}
    </div>
  )
}

export default PortfolioList
