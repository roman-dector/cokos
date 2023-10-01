import Image from 'next/image'
import { Button } from '../ui/button'
import GFit from './g-fit.jpg'

export function GFitButton() {
  return (
    <Button
      className='w-[90%] max-w-[350px] rounded-[40px] border border-gray-700 h-fit p-0'
      style={{ background: 'white' }}
    >
      <Image alt='google fit logo' src={GFit} />
    </Button>
  )
}

export function GFitBar(props: { connected: boolean }) {
  return (
    <Button
      className='
        w-full max-w-[350px] border border-gray-700 h-fit py-0 pl-1 pr-4
        flex justify-between
      '
      style={{ background: 'white' }}
    >
      <Image alt='google fit logo' src={GFit} />
      <span className={'titleSecond'}>
        {props.connected ? 'Подключен' : 'Не подключен'}
      </span>
    </Button>
  )
}
