import { pb } from '@/constants/config'
import fetcher from '@/service/fetcher'

export const pbApi = {
  all: async (collection, options) =>
    await pb.collection(collection).getFullList(200, options),
  list: async (collection, page, perPage, options) =>
    await pb.collection(collection).getList(page, perPage, options),
  view: async (collection, id, options) =>
    await pb.collection(collection).getOne(id, options),
  create: async (collection, data, options) =>
    await pb.collection(collection).create(data, options),
  update: async (collection, id, data, options) =>
    await pb.collection(collection).update(id, data, options),
  delete: async (collection, id) => await pb.collection(collection).delete(id),
}

export const fetchApi = {
  list: async (collection, page, perPage, options) => {
    const response = await fetcher({
      url: `/collections/${collection}/records`,
      params: {
        page,
        perPage,
        ...options,
      },
    })
    return response
  },
  view: async (collection, id, options) => {
    const response = await fetcher({
      url: `/collections/${collection}/records/${id}`,
      params: {
        ...options,
      },
    })
    return response
  },
  create: async (collection, data, options) => {
    const response = await fetcher({
      method: 'POST',
      url: `/collections/${collection}/records`,
      params: {
        ...options,
      },
      data,
    })
    return response
  },
  update: async (collection, id, data, options) => {
    const response = await fetcher({
      method: 'PATCH',
      url: `/collections/${collection}/records/${id}`,
      params: {
        ...options,
      },
      data,
    })
    return response
  },
  delete: async (collections, id) => {
    const response = await fetcher({
      method: 'DELETE',
      url: `/api/collections/${collections}/records/${id}`,
    })
    return response
  },
}
