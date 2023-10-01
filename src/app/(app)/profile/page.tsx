'use client'

import Image from 'next/image'

import { User } from '@/store/features/current-user'
import { UserCircle2 } from 'lucide-react'
import { InputLabel } from '@/components/input-label'
import { GFitBar, GFitButton } from '@/components/gfit-button'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { AuthButton } from '@/components/auth-button'
import { useAppDispatch } from '@/store/utils'
import { authModel } from '@/store/features'
import { useRouter } from 'next/navigation'

export default function Profile() {
  let user: User = {
    id: '1',
    name: 'Роман',
    surname: 'Петрова',
    score: 102,
    team: 'Фронт Solution',
  }

  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPass] = useState('')
  const dispatch = useAppDispatch()

  return (
    <main>
      <div className='flex flex-col justify-center items-center'>
        {user.photo ? (
          <Image alt={'user photo'} src={user.photo} />
        ) : (
          <UserCircle2 size={100} />
        )}
        <span>{user.name}</span>
        <span className='titleSecond'>{user.team}</span>
      </div>
      <div className='flex flex-col gap-2 mt-7 items-center'>
        <div>Личная информация</div>
        <InputLabel
          type='email'
          label='E-mail'
          value={email}
          setValue={setEmail}
        />
        <InputLabel
          type='password'
          label='Пароль'
          value={password}
          setValue={setPass}
        />

        <div className='mt-4 w-full'>
          <GFitBar connected={!!user.gfit} />
        </div>
        <AuthButton
          onClick={() => {
            router.push('/admin/stat')
          }}
        >
          Перейти в админку
        </AuthButton>

        <Button
          style={{
            background: 'white',
            color: 'black',
            border: '2px solid black',
          }}
          onClick={() => {
            dispatch(authModel.operations.signout())
          }}
        >
          Выйти из аккаунта
        </Button>
      </div>
    </main>
  )
}
