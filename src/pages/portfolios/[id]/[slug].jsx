import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import fetchApi from '@/service/apis'
import { RiCalendar2Line, RiFolder2Line, RiLink } from 'react-icons/ri'
import { MarkdownContent } from '@/components'
import { dateFormat } from '@/utils'
import { siteName } from '@/constants/settings'

const Portfolio = ({ portfolio }) => {
  const {
    title,
    content,
    coverImage,
    gallery,
    expand: { category },
    collectionName,
    link,
    created,
    createDate,
  } = portfolio
  return (
    <>
      <Head>
        <title>
          {title} - {category.name} - {siteName}
        </title>
      </Head>
      <div className='w-full flex flex-col gap-6'>
        {coverImage && (
          <div className='w-full max-h-[320px] mb-10 overflow-hidden rounded'>
            <Image
              src={coverImage}
              alt={title}
              width={768}
              height={320}
              priority
              className='w-full h-auto rounded object-cover object-left-top aspect-video'
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
        <div className='mb-10 text-md leading-8 text-gray-500'>
          <MarkdownContent source={content} />
        </div>
        {link && (
          <div className='flex justify-center items-center py-10 border-t'>
            <Link
              href={link}
              target='_blank'
              className='flex justify-center items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded text-sm'
            >
              <RiLink />
              产品文档
            </Link>
          </div>
        )}
        <div className='divider-line'></div>
        <div className='mt-10 flex flex-col gap-10'>
          {gallery.images.map(item => (
            <div className='flex flex-col items-center' key={item.image}>
              <Image
                src={item.image}
                alt={item.title}
                width={768}
                height={480}
                priority
                className='w-full h-auto rounded aspect-[16/10]'
              />
              <h2 className='flex justify-center items-center h-10 text-gray-700 dark:text-white'>
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export const getStaticPaths = async () => {
  const portfolios = await fetchApi.fetchPortfolios()
  const paths = portfolios.items.map(portfolio => ({
    params: { id: portfolio.id, slug: portfolio.slug },
  }))

  return {
    paths,
    fallback: 'blocking',
  }
}

export const getStaticProps = async ({ params: { id, slug } }) => {
  const portfolio = await fetchApi.fetchPortfolio(id)
  return {
    props: {
      portfolio,
    },
    revalidate: 10,
  }
}

export default Portfolio
