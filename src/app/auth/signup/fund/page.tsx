import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function () {
  return (
    <main>
      <h1 className='mb-3'>
        Чтобы подать заявку на участие в программе, введите данные
        фонда
      </h1>

      <form className={authStyle.form}>
        <Input placeholder='Название фонда' />
        <Input placeholder='e-mail' />
        <Input placeholder='ИНН' />
        <Input placeholder='ИНН' />
        <Input placeholder='ОГРН' />
        <Input placeholder='Контакты для связи' />
        <Input placeholder='Юридический адрес' />
        <Input placeholder='Сайт фонда' />

        <Button className='m-5'>Продолжить</Button>
      </form>
    </main>
  )
}
