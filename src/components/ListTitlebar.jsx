import Link from 'next/link'
import { useRouter } from 'next/router'
import { pathnameRouter } from '@/utils'
import cx from 'clsx'

const ListTitlebar = ({ title, categories }) => {
  const router = useRouter()
  const pathname = pathnameRouter(router.pathname)
  const currentCategory =
    router.query.slug !== undefined ? router.query.slug : ''

  return (
    <div className='mb-10 md:mb-0 w-full h-12 flex flex-col md:flex-row justify-between items-center'>
      <h2 className='text-xl text-black mb-6 md:mb-0 dark:text-white'>
        {title}
      </h2>
      <nav className='flex-1 flex justify-end items-center gap-4 h-full'>
        <Link
          href={`${pathname}`}
          className={cx('px-2 py-1 bg-gray-300 rounded text-sm text-white', {
            'bg-gray-700': currentCategory === '',
          })}
        >
          全部
        </Link>
        {categories?.items.map(category => (
          <Link
            href={`${pathname}/category/${category.id}/${category.slug}`}
            key={category.id}
            className={cx(
              'px-2 py-1 bg-gray-300 dark:bg-gray-800 rounded text-sm text-white dark:text-gray-400',
              {
                'bg-gray-700': currentCategory === category.slug,
              }
            )}
          >
            {category.name}
          </Link>
        ))}
      </nav>
    </div>
  )
}

export default ListTitlebar
