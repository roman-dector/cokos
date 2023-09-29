import { FC } from 'react'
import { SessionProvider } from 'next-auth/react'

export const withAuth = (Component: FC<any>) => (props: any) =>
  (
    <SessionProvider>
      <Component {...props} />
    </SessionProvider>
  )
