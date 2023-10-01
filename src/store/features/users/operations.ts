import { createAppThunk } from '../../utils'
import { User, userApi } from '@/dal/api'

export const getUsers = createAppThunk<User[]>(
  'featureExample/getValue',
  async (_, thAPI) => {
    let token = thAPI.getState().auth.accessToken

    let res = await userApi.getUsers(token)

    if (res.status === 200) {
      return res.data
    }

    return []
  }
)
