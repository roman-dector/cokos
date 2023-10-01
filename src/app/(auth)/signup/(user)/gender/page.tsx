'use client'

import { AuthHeader } from '@/components/auth-header'
import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { InputLabel } from '@/components/input-label'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { authModel, currentUserModel } from '@/store/features'
import { useRouter } from 'next/navigation'
import { useAppDispatch } from '@/store/utils'

export default function () {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')

  const router = useRouter()

  const dispatch = useAppDispatch()

  return (
    <>
      <AuthHeader text='Ваши данные' progress={60} />

      <form className={authStyle.form}>
        <div className='grid w-full max-w-sm items-center gap-1.5 mb-3'>
          <Label
            style={{ fontSize: '18px' }}
            className='text-slate-500 font-normal ml-3'
            htmlFor='age'
          >
            Выберите ваш пол
          </Label>
          <div className='flex justify-around'>
            <div
              onClick={() => {
                setGender('man')
              }}
            >
              <Gen gen={true} gender={gender === 'man'} />
            </div>
            <div
              onClick={() => {
                setGender('woman')
              }}
            >
              <Gen gen={false} gender={gender === 'woman'} />
            </div>
          </div>
        </div>

        <InputLabel
          label='Введите ваш возраст'
          type='age'
          value={age}
          setValue={setAge}
        />
      </form>

      <div
        className='flex flex-col items-center mb-2 px-2'
        style={{ maxWidth: '350px', width: '100%' }}
      >
        <Button
          onClick={() => {
            dispatch(currentUserModel.actions.setGender(gender))
            router.push('/signup/params')
          }}
          className='m-3  block w-full'
          type='submit'
        >
          Далее
        </Button>
      </div>
    </>
  )
}

const Gen = (props: { gen: boolean; gender: boolean }) => {
  return (
    <div
      className='w-[110px] h-[110px] flex items-center justify-center bg-slate-200'
      style={{
        borderRadius: '20px',
        background: props.gender
          ? 'var(--light-green)'
          : 'rgb(226 232 240 / var(--tw-bg-opacity)',
      }}
    >
      {props.gen ? '👨' : '👩'}
    </div>
  )
}
