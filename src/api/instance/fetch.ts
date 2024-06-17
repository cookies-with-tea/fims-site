import { ResponseType } from '@/types'

export const fakeFetch = async <T>(url: string, params: { method: 'get' | 'post' }, data: T): Promise<ResponseType<T>> => {
  return await new Promise((resolve) => setTimeout(() => resolve({
    data,
    errors: [],
    messages: [],
  }), 300))
}