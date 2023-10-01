'use client'

import { AuthHeader } from '@/components/auth-header'
import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { InputLabel } from '@/components/input-label'
import { useState } from 'react'
import { AuthButton } from '@/components/auth-button'
import { useAppDispatch } from '@/store/utils'
import { authModel, currentUserModel } from '@/store/features'

export default function () {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')

  const dispatch = useAppDispatch()

  return (
    <>
      <AuthHeader text='Ваши данные' progress={80} />

      <form className={authStyle.form}>
        <InputLabel
          label='Рост'
          type='height'
          placeholder='183.0 см'
          value={height}
          setValue={setHeight}
        />

        <InputLabel
          label='Вес'
          type='weight'
          placeholder='80 кг'
          value={weight}
          setValue={setWeight}
        />
      </form>

      <AuthButton
        onClick={() => {
          dispatch(authModel.operations.signup())
        }}
      >
        Далее
      </AuthButton>
    </>
  )
}
