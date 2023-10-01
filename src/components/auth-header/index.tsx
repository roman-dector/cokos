import style from './style.module.css'

import { Circle } from './circle'
import { Progress } from '../ui/progress'

export function AuthHeader(props: {
  text: string
  progress: number
}) {
  return (
    <header className={style.header}>
      <Circle />
      <div className='mb-4 mt-8' style={{ lineHeight: 1 }}>
        <h1 className='mb-3 ml-3'>{props.text}</h1>

        <div style={{ width: '90%', margin: 'auto' }}>
          <div style={{ fontSize: '17px' }} className='mb-1'>
            {props.progress}%
          </div>
          <Progress value={props.progress} />
        </div>
      </div>
    </header>
  )
}
