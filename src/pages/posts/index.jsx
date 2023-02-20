import { useRouter } from 'next/router'
import fetchApi from '@/service/apis'
import { PostList, ListTitlebar } from '@/components'

const Posts = ({ posts, page, postCategories }) => {
  return (
    <div className='flex flex-col gap-10'>
      <ListTitlebar title='文章集' categories={postCategories} />
      <PostList posts={posts} page={page} />
    </div>
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
