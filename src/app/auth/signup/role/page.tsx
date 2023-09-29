import style from './style.module.css'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'

export default function Role() {
  return (
    <main className={style.box}>
      <h1>Кто вы?</h1>
      <RadioGroup defaultValue='option-one'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='user' id='user' />
          <Label htmlFor='user'>Я сотрудник</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='admin' id='admin' />
          <Label htmlFor='admin'>Я руководитель</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='fund' id='fund' />
          <Label htmlFor='fund'>Я представитель фонда</Label>
        </div>
      </RadioGroup>

      <Button className='m-5'>Продолжить</Button>
    </main>
  )
}
