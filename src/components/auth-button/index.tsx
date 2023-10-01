import { ReactElement } from 'react'
import { Button } from '../ui/button'

export function AuthButton(props: { children: ReactElement } & any) {
  return (
    <Button
      {...props}
      className='m-3 block w-full text-[1.1em]'
      type='submit'
    >
      {props.children}
    </Button>
  )
}
