import fetchApi from '@/service/apis'
import { PostList, ListTitlebar } from '@/components'

const CategoryPosts = ({ posts, page, postCategories }) => {
  return (
    <div>
      <ListTitlebar title='Posts' categories={postCategories} />
      <PostList posts={posts} page={page} />
    </div>
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
