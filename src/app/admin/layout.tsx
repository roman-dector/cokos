'use client'

import { AdminFooter } from '@/components/admin-footer'
import { authModel } from '@/store/features'
import { useAppDispatch } from '@/store/utils'
import { redirect, useRouter } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function AdminLayout(props: { children: ReactNode }) {
  const token = useSelector(authModel.selectors.selectToken)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authModel.operations.checkAuth())
  }, [])

  if (!token) {
    return redirect('/signin')
  }

  return (
    <main
      className='flex flex-col justify-between'
      style={{ height: '100%' }}
    >
      <div className='p-[15px] overflow-auto'>{props.children}</div>
      <AdminFooter />
    </main>
  )
}
