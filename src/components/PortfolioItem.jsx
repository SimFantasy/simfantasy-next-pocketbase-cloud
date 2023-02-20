import Image from 'next/image'
import Link from 'next/link'

const PortfolioItem = ({ title, coverImage, id, slug, expand }) => {
  return (
    <Link
      href={`/portfolios/${id}/${slug}`}
      className='w-full flex flex-col group bg-white dark:bg-gray-800 rounded hover:shadow-xl'
    >
      <div className='w-full max-h-[240px] relative'>
        <Image
          src={coverImage}
          alt={title}
          width={240}
          height={135}
          className='object-contain object-center w-auto h-auto rounded rounded-b-none'
          priority
        />
        <div className='absolute top-2 right-2 px-2 py-1 bg-white dark:bg-black rounded text-sm'>
          {expand.category.name}
        </div>
      </div>
      <h2 className='w-full px-2 leading-10 text-md text-black dark:text-gray-300 text-center line-clamp-1 overflow-hidden group-hover:text-gray-600 dark:group-hover:text-white'>
        {title}
      </h2>
    </Link>
  )
}

export default PortfolioItem
