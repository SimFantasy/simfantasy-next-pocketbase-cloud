import Image from 'next/image'
import { use } from 'react'

const Author = ({ name, bio, avatar }) => {
  return (
    <div className='w-full h-20 flex justify-between items-center gap-6'>
      <div className='gap-6 w-20 h-20 p-2 rounded-full shadow-xl bg-white dark:bg-gray-600'>
        <Image
          alt={name}
          src={avatar}
          width={60}
          height={60}
          className='w-auto h-auto rounded-full hover:animate-spin cursor-pointer'
          priority
        />
      </div>
      <div className='flex-1 flex flex-col gap-2'>
        <h2 className='text-xl font-semibold'>{name}</h2>
        <p className='w-full text-gray-500 dark:text-gray-400 text-sm'>{bio}</p>
      </div>
    </div>
  )
}

export default Author
