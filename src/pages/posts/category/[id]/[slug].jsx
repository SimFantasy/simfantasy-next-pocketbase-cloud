import Head from 'next/head'
import fetchApi from '@/service/apis'
import { PostList, ListTitlebar } from '@/components'
import { siteName } from '@/constants/settings'

const CategoryPosts = ({ posts, page, postCategories }) => {
  return (
    <>
      <Head>
        <title>文章 - {siteName}</title>
      </Head>
      <div>
        <ListTitlebar title='Posts' categories={postCategories} />
        <PostList posts={posts} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1, id } }) => {
  const pageParams = +page === undefined || +page === 1 ? 1 : page
  const posts = await fetchApi.fetchPosts(pageParams, `category = '${id}'`)

  const postCategories = await fetchApi.fetchPostCategories()

  return {
    props: { posts, page: +page, postCategories },
  }
}

export default CategoryPosts
