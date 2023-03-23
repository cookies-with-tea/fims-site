import type { AxiosRequestConfig } from 'axios'
import { AxiosService } from '@/api/axiosService'
import { MovieType } from '@/types/MoviesParamsType.type'

class MovieApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  async getAll(payload?: MovieType) {
    return this.axiosCall<any>({
      method: 'get',
      url: '/',
    })
  }
}

export default new MovieApi({
  baseURL: '/api/movies',
  withCredentials: false,
})
