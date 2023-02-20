import { fetchApi } from '@/service/pocketBaseApis'
import {
  featurePortfoliosLimit,
  featurePostsLimit,
  pagePortfoliosLimit,
  pagePostsLimit,
} from '@/constants/settings'

const fetchAuthor = async id => await fetchApi.view('users', id)

// Posts
const fetchFeaturePosts = async () =>
  await fetchApi.list('posts', 1, featurePostsLimit, {
    sort: '-created',
    filter: 'isFeature = true',
    expand: 'category',
  })

const fetchPosts = async (page, filter) =>
  await fetchApi.list('posts', page, pagePostsLimit, {
    sort: '-created',
    expand: 'category',
    filter,
  })

const fetchPost = async id =>
  await fetchApi.view('posts', id, { expand: 'category' })

const fetchPostCategories = async () => fetchApi.list('postCategory', 1, 100)

// Portfolios
const fetchFeaturePortfolios = async () =>
  await fetchApi.list('portfolios', 1, featurePortfoliosLimit, {
    sort: '-created',
    filter: 'isFeature = true',
    expand: 'category',
  })

const fetchPortfolios = async (page, filter) =>
  await fetchApi.list('portfolios', page, pagePortfoliosLimit, {
    sort: '-created',
    expand: 'category',
    filter,
  })

const fetchPortfolio = async id =>
  await fetchApi.view('portfolios', id, { expand: 'category' })

const fetchPortfolioCategories = async () =>
  fetchApi.list('portfolioCategory', 1, 100, {
    sort: '-created',
  })

// Pages
const fetchPage = async id => await fetchApi.view('pages', id)

export default {
  fetchAuthor,
  fetchFeaturePosts,
  fetchPosts,
  fetchPost,
  fetchPostCategories,
  fetchFeaturePortfolios,
  fetchPortfolios,
  fetchPortfolio,
  fetchPortfolioCategories,
  fetchPage,
}
