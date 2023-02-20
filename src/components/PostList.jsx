import { Pagination, PostItem } from '@/components'

const PostList = ({ posts, page }) => {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col gap-8'>
        {posts?.items?.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
      {page && <Pagination page={page} totalPages={posts.totalPages} />}
    </div>
  )
}

export default PostList
