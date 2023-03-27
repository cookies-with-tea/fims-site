import type { AxiosRequestConfig } from 'axios'
import { AxiosService } from '@/api/axiosService'
import { ApiMoviesResponseType, MoviesParamsType } from '@/types/movie.type'

class MovieApi extends AxiosService {
  constructor(config?: AxiosRequestConfig) {
    super(config)
  }

  async getAll(payload?: MoviesParamsType) {
    return this.axiosCall<ApiMoviesResponseType>({
      method: 'get',
      url: '/',
    })
  }
}

export default new MovieApi({
  baseURL: '/api/movies',
  withCredentials: false,
})
