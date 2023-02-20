import Link from 'next/link'
import { RiCalendar2Line, RiFolder2Line } from 'react-icons/ri'
import { dateFormat } from '@/utils'

const PostItem = ({
  title,
  id,
  slug,
  description,
  created,
  createdate,
  expand,
  collectionName,
}) => {
  return (
    <div className='w-full flex flex-col'>
      <Link
        href={`/posts/${id}/${slug}`}
        className='flex justify-start items-center w-full h-8 text-ellipsis text-xl text-black dark:text-gray-300 hover:text-gray-600'
      >
        {title}
      </Link>
      <div className='flex justify-start items-center gap-6 h-10 text-gray-400 dark:text-gray-600'>
        <div className='flex justify-start items-center gap-2 h-full'>
          <RiCalendar2Line />
          {createdate ? dateFormat(createdate) : dateFormat(created)}
        </div>
        <div className='flex justify-start items-center gap-2 h-full'>
          <RiFolder2Line />
          <Link
            href={`/${collectionName}/category/${expand.category.id}/${expand.category.slug}`}
          >
            {expand?.category?.name}
          </Link>
        </div>
      </div>
      <div className='text-md leading-8 text-gray-500 line-clamp-2'>
        {description}
      </div>
    </div>
  )
}

export default PostItem
