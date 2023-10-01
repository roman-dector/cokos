import { AuthHeader } from '@/components/auth-header'
import authStyle from '../../style.module.css'
import { Button } from '@/components/ui/button'
import { GFitButton } from '@/components/gfit-button'

export default function () {
  return (
    <>
      <AuthHeader text='Почти всё!' progress={99} />

      <div className='flex flex-col gap-1 items-center w-full text-center'>
        <div>
          Для корректной работы приложения синхронизируйте его с
          Google Fit
        </div>
        <GFitButton />
      </div>

      <div
        className='flex flex-col items-center mb-2 px-2'
        style={{ maxWidth: '350px', width: '100%' }}
      >
        <Button className='m-3  block w-full' type='submit'>
          Далее
        </Button>
        <div className='text-slate-500' style={{ fontSize: '15px' }}>
          Пока пропустить
        </div>
      </div>
    </>
  )
}
