import Link from 'next/link'
import { RiArrowDropRightLine } from 'react-icons/ri'

const Titlebar = ({ title, link }) => {
  return (
    <div className='w-full h-10 flex justify-start items-center group mb-6'>
      <h2 className='text-xl text-gray-800 dark:text-white font-medium'>
        {title}
      </h2>
      <Link
        href={link}
        className='text-sm text-gray-500 flex justify-start items-center gap-2 h-full
        transform
        duration-300
        ease-linear
        opacity-100
        md:opacity-0
        ml-6
        md:ml-0
        group-hover:translate-x-0
        md:group-hover:translate-x-6
        group-hover:opacity-100'
      >
        查看更多
        <RiArrowDropRightLine size={16} />
      </Link>
    </div>
  )
}

export default Titlebar
