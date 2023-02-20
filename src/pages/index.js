import { Author, Titlebar, PostList, PortfolioList } from '@/components'
import fetchApi from '@/service/apis'
import { authId } from '@/constants/settings'

const Home = ({ author, featurePosts, featurePortfolios }) => {
  return (
    <div className='w-full flex flex-col gap-10'>
      <Author {...author} />
      <div className='pb-10'>
        <Titlebar title='文章' link='/posts' />
        <PostList posts={featurePosts} />
      </div>
      <div>
        <Titlebar title='作品' link='/portfolios' />
        <PortfolioList portfolios={featurePortfolios} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const author = await fetchApi.fetchAuthor(authId)
  const featurePosts = await fetchApi.fetchFeaturePosts()
  const featurePortfolios = await fetchApi.fetchFeaturePortfolios()
  return {
    props: { author, featurePosts, featurePortfolios },
  }
}

export default Home
