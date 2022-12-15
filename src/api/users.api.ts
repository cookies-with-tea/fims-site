import {AxiosService} from "@/api/axiosService";
import type {AxiosRequestConfig} from "axios";

class UsersApi extends AxiosService {
    constructor(config?: AxiosRequestConfig) {
        super(config)
    }

    async userRegister(payload: any) {
        return this.axiosCall<any>({
            method: 'post',
            url: 'http://localhost:8000/auth/users/',
            data: payload
        })
    }
}

export default new UsersApi({
    baseURL: '',
    withCredentials: false,
})