import { FC } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/store'

export const withStore = (Component: FC<any>) => (props: any) =>
  (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
