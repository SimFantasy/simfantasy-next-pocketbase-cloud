import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { TbMoonStars, TbSun } from 'react-icons/tb'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div
      className='w-10 h-full flex justify-center items-center text-gray-500 cursor-pointer'
      onClick={handleClick}
    >
      {theme === 'light' ? <TbSun size={24} /> : <TbMoonStars size={24} />}
    </div>
  )
}

export default ThemeSwitch
