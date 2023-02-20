import Image from 'next/image'
import Link from 'next/link'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import fetchApi from '@/service/apis'
import { MarkdownContent } from '@/components'
import { dateFormat } from '@/utils'

const Post = ({ post }) => {
  const {
    title,
    coverImage,
    created,
    createDate,
    expand: { category },
    content,
    collectionName,
  } = post
  return (
    <div className='flex flex-col gap-6'>
      {coverImage && (
        <div className='w-full max-h-[320px] mb-10 overflow-hidden rounded'>
          <Image
            src={coverImage}
            alt={title}
            width={768}
            height={320}
            priority
            className='w-auto h-auto rounded object-cover object-left-top'
          />
        </div>
      )}
      <h2 className='flex justify-start items-center w-full h-8 text-ellipsis text-xl text-block dark:title-gray-200 hover:text-gray-600'>
        {title}
      </h2>
      <div className='flex justify-start items-center gap-6 h-10 text-gray-400'>
        <div className='flex justify-start items-center gap-2 h-full'>
          <RiCalendar2Line />
          {createDate ? dateFormat(createDate) : dateFormat(created)}
        </div>
        <div className='flex justify-start items-center gap-2 h-full'>
          <RiFolder2Line />
          <Link
            href={`/${collectionName}/category/${category.id}/${category.slug}`}
          >
            {category?.name}
          </Link>
        </div>
      </div>
      <div className='text-md leading-8 text-gray-500'>
        <MarkdownContent source={content} />
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const posts = await fetchApi.fetchPosts()
  const paths = posts.items.map(post => ({
    params: { id: post.id, slug: post.slug },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { id, slug } }) => {
  const post = await fetchApi.fetchPost(id)
  return {
    props: { post },
    revalidate: 10,
  }
}

export default Post
