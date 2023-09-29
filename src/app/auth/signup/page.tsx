import style from './style.module.css'
import authStyle from '../style.module.css'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SignUpForm() {
  return (
    <main>
      <form className={style.form}>
        <Input className={authStyle.input} placeholder='Имя' />
        <Input className={authStyle.input} placeholder='Фамилия' />
        <Input className={authStyle.input} placeholder='Пароль' />

        <Button className='m-5' type='submit'>
          Зарегистрироваться
        </Button>
      </form>

      <Link className={authStyle.link} href={'/auth/signin'}>
        Есть аккаунт? Войдите.
      </Link>
    </main>
  )
}
