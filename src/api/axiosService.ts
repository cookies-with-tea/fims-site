import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';

import { ElMessage } from 'element-plus'
import type {AxiosResponseType} from "@/types/axiosSerivce.type";
export class AxiosService {

    private axiosInstance!: AxiosInstance
    constructor(config?: AxiosRequestConfig) {
        this.axiosInstance = axios.create(config)

        this.axiosInstance.interceptors.request.use((config: any) => {
        const token = localStorage.getItem('token') || ''

        config.headers = {
            Authorization: `Bearer ${token}`,
        }

    return config
})

this.axiosInstance.interceptors.response.use(
    (response: any) => {
        const status = response?.status

        switch (status) {
            case 200:
            {
                if (response?.data?.message) {
                    ElMessage({
                        type: 'success',
                        message: response?.data?.message,
                    })
                } else {
                    break
                }
            }
                break

            default:
                break
        }

        return response
    },
    (error: any) => {
        const response: Record<string, string[]> = error?.response?.data

        switch (error?.response?.status) {
            case 400: {
                Object.entries(response).forEach(([key, value]) => {
                    if (key) {
                        ElMessage({
                            type: 'error',
                            message: `${key}: ${value[0]}`,
                        })
                    }
                })

                break
            }
            case 401:
                break
            case 403:
                ElMessage({
                    type: 'error',
                    message: response.message,
                })

                break
            case 404:
                break
            case 422:
                break
            case 500:
                ElMessage({
                    type: 'error',
                    message: response.message,
                })

            default:
                break
        }

        return Promise.reject(response)
    }
)
}

protected async axiosCall<T = any>(config: AxiosRequestConfig): AxiosResponseType<T> {
    try {
        const { data } = await this.axiosInstance.request<T>(config)

        return [null, data]
    } catch (error: any) {
        return [error]
    }
}
}