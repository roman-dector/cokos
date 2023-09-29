import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function () {
  return (
    <main>
      <h1 className='mb-3'>
        Привет, Name!
        <br />
        Вы вошли как администратор. Пожалуйста, заполните:
      </h1>

      <form className={authStyle.form}>
        <Input placeholder='e-mail' type='email' />
        <Input placeholder='Команда' />
        <Input placeholder='Должность' />
        <Input
          style={{ width: '300px' }}
          placeholder='Кому хотите переводить помощь?'
        />
        <span style={{ marginLeft: '10px', fontSize: '0.7em' }}>
          Можно изменить в любой момент
        </span>
        <Button className='m-5'>Продолжить</Button>
      </form>
    </main>
  )
}
