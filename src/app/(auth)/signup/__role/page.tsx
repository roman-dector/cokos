import { AuthHeader } from '@/components/auth-header'
import style from './style.module.css'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'

export default function Role() {
  return (
    <>
      <AuthHeader text='Ваша роль' progress={20} />

      <h1>Кто вы?</h1>
      <RadioGroup defaultValue='user'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='user' id='user' />
          <Label htmlFor='user'>Я сотрудник</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='fund' id='fund' />
          <Label htmlFor='fund'>Я представитель фонда</Label>
        </div>
      </RadioGroup>

      <div
        className='flex flex-col items-center mb-6 px-2'
        style={{ maxWidth: '350px', width: '100%' }}
      >
        <Button className='m-3 block w-full' type='submit'>
          Далее
        </Button>
      </div>
    </>
  )
}
