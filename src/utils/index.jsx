import { pocketBaseApiUrl } from '@/constants/config'
import { authId } from '@/constants/settings'
import dayjs from 'dayjs'

export const imagePath = image =>
  `${pocketBaseApiUrl}/api/files/users/${authId}/${image}`

export const dateFormat = date => dayjs(date).format('YYYY-MM-DD')

export const pathnameRouter = router => {
  const pathnameArr = router.split('/').slice(1, 2)
  if (pathnameArr.length === 1) {
    return `/${pathnameArr[0]}`
  } else {
    return `/${pathnameArr[0]}/${pathnameArr[1]}`
  }
}
