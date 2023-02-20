import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import cx from 'clsx'
import { TbRoute } from 'react-icons/tb'

import { siteName } from '@/constants/settings'
import { headerNavs } from '@/constants/navs'
import { ThemeSwitch } from '@/components'

const Header = () => {
  const { asPath } = useRouter()
  const [mounted, setMounted] = useState(false)
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stickyHeader = () => {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader)
    return () => {
      window.removeEventListener('scroll', stickyHeader)
    }
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className={cx('w-screen h-14', {
        'sticky top-0 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 shadow-xl md:static md:bg-transparent':
          isScroll,
      })}
    >
      <div className='container flex justify-between gap-4 items-center h-full'>
        <div className='flex justify-start items-center gap-2 text-black dark:text-white'>
          <TbRoute size={32} />
          <h1 className='text-2xl font-sans'>{siteName}</h1>
        </div>
        <nav className='flex-1 flex justify-end items-center gap-4 text-gray-500'>
          {headerNavs.map(nav => (
            <Link
              key={nav.route}
              href={nav.route}
              className={cx('hover:text-black dark:hover:text-white', {
                'text-black dark:text-white': nav.route === asPath,
              })}
            >
              {nav.name}
            </Link>
          ))}
        </nav>
        <ThemeSwitch />
      </div>
    </div>
  )
}

export default Header
