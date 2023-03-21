import type { AxiosRequestConfig } from 'axios'
import { AxiosService } from '@/api/axiosService'

class MovieApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  async getAll(payload?: unknown) {
    return this.axiosCall<any>({
      method: 'get',
      url: '/movies/',
    })
  }
}

export default new MovieApi({
  baseURL: 'http://localhost:8000',
  withCredentials: false,
})
