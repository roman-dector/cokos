'use client'

import { useSelector } from 'react-redux'
import style from './style.module.css'
import { useAppDispatch } from '@/store/utils'
import { authModel } from '@/store/features'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const token = useSelector(authModel.selectors.selectToken)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(authModel.operations.checkAuth())
  }, [])

  if (token) {
    return redirect('/main')
  }

  return <div className={style.authPage}>{children}</div>
}
