import localforage from 'localforage'

export const localStore = {
  async saveToken(accessToken: string) {
    return await localforage.setItem('token', accessToken)
  },

  async getToken() {
    return await localforage.getItem<string>('token')
  },

  async removeToken() {
    return await localforage.removeItem('token')
  },
}
