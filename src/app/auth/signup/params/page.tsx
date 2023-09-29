import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  RadioGroup,
  RadioGroupItem,
} from '@/components/ui/radio-group'

export default function () {
  return (
    <main className='text-center'>
      <h1 className='mb-3'>Пол</h1>
      <RadioGroup
        defaultValue='male'
        className='flex gap-10 justify-center w-100% mb-8 mt-3'
      >
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='male' id='male' />
          <Label htmlFor='male'>Мужчина</Label>
        </div>

        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='female' id='female' />
          <Label htmlFor='female'>Женщина</Label>
        </div>
      </RadioGroup>

      <form className={authStyle.form}>
        <div className='flex flex-col gap-1 items-start space-x-2'>
          <Label className='ml-3' htmlFor='height'>
            Рост
          </Label>
          <Input id='height' placeholder='183.0 см' />
        </div>
        <div className='flex flex-col gap-1 items-start space-x-2'>
          <Label className='ml-3' htmlFor='weight'>
            Вес
          </Label>
          <Input id='weight' placeholder='80 кг' />
        </div>
        <div className='flex flex-col gap-1 items-start space-x-2'>
          <Label className='ml-3' htmlFor='bmi'>
            ИМТ
          </Label>
          <Input id='bmi' placeholder='25.4' />
        </div>

        <div className='flex items-center space-x-2 text-left font-normal ml-3 mt-2'>
          <Checkbox id='hide' />
          <Label htmlFor='hide'>
            Скрывать эту информацию от других пользователей
          </Label>
        </div>

        <Button className='m-5'>Продолжить</Button>
      </form>
    </main>
  )
}
