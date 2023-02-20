import { siteName } from '@/constants/settings'

const Footer = () => {
  return (
    <div className='w-screen h-14'>
      <div className='container flex justify-between items-center h-full text-sm text-gray-400 dark:text-gray-500'>
        <div>© 2022 {siteName}</div>
        <div>Powered by: simz</div>
      </div>
    </div>
  )
}

export default Footer
