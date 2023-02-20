import PocketBase from 'pocketbase'

export const pocketApiUrl = process.env.POCKETBASE_API_URL

export const pb = new PocketBase(pocketApiUrl)
