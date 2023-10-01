import { FC } from 'react'
import { useSelector } from 'react-redux'
import { authModel } from '@/store/features'
import { redirect } from 'next/navigation'

// export const withAuth = (Component: FC<any>) => (props: any) =>
//   (
//     <SessionProvider>
//       <Component {...props} />
//     </SessionProvider>
//   )

export const withAuth = (Component: FC<any>) => (props: any) => {
  let token = useSelector(authModel.selectors.selectToken)

  if (!!token) {
    return redirect('/signup')
  }

  return <Component {...props} />
}
