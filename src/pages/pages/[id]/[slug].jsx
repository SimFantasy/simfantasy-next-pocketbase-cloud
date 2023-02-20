import Image from 'next/image'
import Head from 'next/head'
import fetchApi from '@/service/apis'
import { MarkdownContent } from '@/components'
import { siteName } from '@/constants/settings'

const SlugPage = ({ page }) => {
  const { title, content, coverImage } = page
  return (
    <>
      <Head>
        <title>
          {title} - {siteName}
        </title>
      </Head>
      <div className='flex flex-col gap-6'>
        {coverImage && (
          <div className='w-full max-h-[320px] mb-10 overflow-hidden rounded'>
            <Image
              src={coverImage}
              alt={title}
              width={768}
              height={432}
              priority
              className='w-full h-auto rounded object-cover object-left-top aspect-video'
            />
          </div>
        )}
        <h2 className='flex justify-start items-center w-full h-8 text-ellipsis text-xl text-block dark:title-gray-200 hover:text-gray-600'>
          {title}
        </h2>
        <div className='text-md leading-8 text-gray-500'>
          <MarkdownContent source={content} />
        </div>
      </div>
    </>
  )
}

export const getServerSideProps = async ({ query: { id, slug } }) => {
  const page = await fetchApi.fetchPage(id)
  return {
    props: { page },
  }
}

export default SlugPage
