import Head from 'next/head'
import fetchApi from '@/service/apis'
import { PostList, ListTitlebar } from '@/components'
import { siteName } from '@/constants/settings'

const Posts = ({ posts, page, postCategories }) => {
  return (
    <>
      <Head>
        <title>文章 - {siteName}</title>
      </Head>
      <div className='flex flex-col gap-10'>
        <ListTitlebar title='文章' categories={postCategories} />
        <PostList posts={posts} page={page} />
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const pageParams = +page === undefined || +page === 1 ? 1 : page
  const posts = await fetchApi.fetchPosts(pageParams)

  const postCategories = await fetchApi.fetchPostCategories()

  return {
    props: {
      posts,
      page: +page,
      postCategories,
    },
  }
}

export default Posts
