'use client'

import style from './style.module.css'
import authStyle from '../style.module.css'
import Link from 'next/link'
import { AuthHeader } from '@/components/auth-header'
import { InputLabel } from '@/components/input-label'
import { AuthButton } from '@/components/auth-button'
import { useDispatch } from 'react-redux'
import { currentUserModel } from '@/store/features'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SignUpForm() {
  const dispatch = useDispatch()
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')

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
        <div>
          <InputLabel
            label='Пароль'
            type='password'
            value={password}
            setValue={setPass}
          />
          <div className='text-slate-500 ml-2 text-[0.85em]'>
            Введите пароль, выданный вам менеджером
          </div>
        </div>
      </form>

      <div className='flex flex-col items-center mb-6 px-2 w-full max-w-[350px]'>
        <AuthButton
          onClick={() => {
            dispatch(
              currentUserModel.actions.setCreds({ email, password })
            )
            router.push('/signup/user')
          }}
        >
          Зарегистрироваться
        </AuthButton>
        <Link className='text-[1.1em]' href={'/signin'}>
          Есть аккаунт?{' '}
          <span className='text-blue-600'>Войдите.</span>
        </Link>
      </div>
    </>
  )
}
