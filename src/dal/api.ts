import axios, { AxiosResponse } from 'axios'

const authInst = axios.create({
  baseURL: 'https://fitdonation.onrender.com',
})

export interface UserCreds {
  email: string
  password: string
}

export interface UserData extends UserCreds {
  firstname: string
  lastname: string
  team: string
  post: string
  gender: string
}

export interface User extends UserData {
  id: string
}

export const authApi = {
  async signup(
    user: UserData
  ): Promise<AxiosResponse<{ token: string }>> {
    return await authInst.post('/auth/signup', user)
  },

  async signin(
    creds: UserCreds
  ): Promise<AxiosResponse<{ token: string }>> {
    return await authInst.post('/auth/signin', creds)
  },
}

export const userApi = {
  async getUsers(
    accessToken: string
  ): Promise<AxiosResponse<User[]>> {
    return await authInst.get('/users', {
      headers: { Authorization: accessToken },
    })
  },
}
