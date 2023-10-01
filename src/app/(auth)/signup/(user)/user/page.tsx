'use client'

import { AuthHeader } from '@/components/auth-header'
import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { InputLabel } from '@/components/input-label'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { currentUserModel } from '@/store/features'
import { useRouter } from 'next/navigation'

export default function () {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [team, setTeam] = useState('')
  const [post, setPost] = useState('')

  const dispatch = useDispatch()
  const router = useRouter()

  return (
    <>
      <AuthHeader text='Представьтесь' progress={40} />

      <form className={authStyle.form}>
        <InputLabel
          label='Имя'
          type='name'
          value={firstname}
          setValue={setFirstname}
        />
        <InputLabel
          label='Фамилия'
          type='surname'
          value={lastname}
          setValue={setLastname}
        />

        <InputLabel
          label='Команда'
          type='team'
          value={team}
          setValue={setTeam}
        />
        <InputLabel
          label='Должность'
          type='post'
          value={post}
          setValue={setPost}
        />

        {/* <Select>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label
              style={{ fontSize: '20px' }}
              className='text-slate-500 font-normal ml-3'
              htmlFor='team'
            >
              Команда
            </Label>
            <SelectTrigger id='team'>
              <SelectValue />
            </SelectTrigger>
          </div>
          <SelectContent>
            <SelectItem value='light'>Дизайн</SelectItem>
            <SelectItem value='dark'>Фронт</SelectItem>
            <SelectItem value='system'>Бэк</SelectItem>
          </SelectContent>
        </Select> */}

        {/* <Select>
          <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label
              style={{ fontSize: '20px' }}
              className='text-slate-500 font-normal ml-3'
              htmlFor='position'
            >
              Должность
            </Label>
            <SelectTrigger id='position'>
              <SelectValue />
            </SelectTrigger>
          </div>
          <SelectContent>
            <SelectItem value='light'>Light</SelectItem>
            <SelectItem value='dark'>Dark</SelectItem>
            <SelectItem value='system'>System</SelectItem>
          </SelectContent>
        </Select> */}
      </form>

      <div className='flex flex-col items-center mb-2 px-2 w-full max-w-[350px]'>
        <Button
          onClick={() => {
            dispatch(
              currentUserModel.actions.setUserName({
                firstname,
                lastname,
                team,
                post,
              })
            )
            router.push('/signup/gender')
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
