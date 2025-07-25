import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export const useApi: typeof useFetch = <T>(url: MaybeRefOrGetter<string>, options: UseFetchOptions<T> = {}) => {
  const config = useRuntimeConfig()
  const accessToken = localStorage.getItem('access_token') || ''

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBaseUrl,
    key: toValue(url),
    headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
  }

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults)

  return useFetch(url, params)
}
