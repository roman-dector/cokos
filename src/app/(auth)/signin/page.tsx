'use client'

import style from './style.module.css'
import authStyle from '../style.module.css'
import Link from 'next/link'
import { AuthHeader } from '@/components/auth-header'
import { InputLabel } from '@/components/input-label'
import { AuthButton } from '@/components/auth-button'
import { useState } from 'react'
import { authModel } from '@/store/features'
import { useAppDispatch } from '@/store/utils'

export default function SignUpForm() {
  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

  const dispatch = useAppDispatch()

  return (
    <>
      <AuthHeader
        text={'Войдите или зарегистрируйтесь'}
        progress={0}
      />

      <form className={authStyle.form}>
        <InputLabel
          label='E-mail'
          type='email'
          value={email}
          setValue={setEmail}
        />
        <InputLabel
          label='Пароль'
          type='password'
          value={password}
          setValue={setPass}
        />
      </form>

      <div className='flex flex-col items-center mb-6 px-2 w-full max-w-[350px]'>
        <AuthButton
          onClick={() => {
            dispatch(authModel.operations.signin({ email, password }))
          }}
          className='m-3 block w-full'
          type='submit'
        >
          Войти
        </AuthButton>
        <Link className='text-[1.1em]' href={'/signup'}>
          Нет аккаунта?{' '}
          <span className='text-blue-600'>Зарегистрируйтесь.</span>
        </Link>
      </div>
    </>
  )
}
