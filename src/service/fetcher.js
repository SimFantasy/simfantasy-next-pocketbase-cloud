import axios from 'axios'
import { pocketApiUrl } from '@/constants/config'

const createInstence = () => {
  const instence = axios.create({
    baseURL: `${pocketApiUrl}/api`,
    timeout: 50000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  instence.interceptors.request.use(handleRequest)
  instence.interceptors.response.use(handleResponse, handleError)

  return instence
}

const handleRequest = config => config

const handleResponse = response => {
  if (response && response.data) {
    return response.data
  }
  return response
}

const handleError = error => {
  const { response, message } = error
  return Promise.reject(
    response ? new Error(response.data.message || message) : error
  )
}

const fetcher = createInstence()

export default fetcher
