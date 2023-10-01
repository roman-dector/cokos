import { UserCreds, UserData, authApi } from '@/dal/api'
import { localStore } from '@/dal/local'

import { createAppThunk } from '../../utils'

export const checkAuth = createAppThunk<string>(
  'auth/check',
  async (_, thAPI) => {
    let token = await localStore.getToken()

    if (!token) {
      return ''
    }

    return token
  }
)

export const signup = createAppThunk<string>(
  'auth/signup',
  async (_, thAPI) => {
    let data = thAPI.getState().currenUser
    try {
      let res = await authApi.signup(data)

      if (res.status === 200) {
        console.log('Token is' + res.data.token)
        await localStore.saveToken(res.data.token)

        return res.data.token
      }
    } catch (err) {
      console.log(err)
    }

    return ''
  }
)

export const signin = createAppThunk<string, UserCreds>(
  'auth/signin',
  async (data, thAPI) => {
    try {
      let res = await authApi.signin(data)

      if (res.status === 200) {
        console.log('Token is' + res.data.token)
        await localStore.saveToken(res.data.token)

        return res.data.token
      } else {
        console.log('Status is' + res.status)
      }
    } catch (err) {
      console.log(err)
    }

    return ''
  }
)

export const signout = createAppThunk(
  'auth/signout',
  async (_, thAPI) => {
    await localStore.removeToken()
  }
)
