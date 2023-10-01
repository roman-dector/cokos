'use client'

import { Input } from '../ui/input'

import { Label } from '../ui/label'

export function InputLabel(props: {
  label: string
  type: string
  value: string
  setValue: (l: string) => void
  placeholder?: string
}) {
  return (
    <div className='grid w-full max-w-sm items-center gap-1.5'>
      <Label
        className='text-slate-500 font-normal ml-3 text-[0.9em]'
        htmlFor={props.type}
      >
        {props.label}
      </Label>
      <Input
        onChange={e => {
          props.setValue(e.target.value)
        }}
        value={props.value}
        className='border-slate-500 min-w-[334px]'
        type={props.type}
        id={props.type}
        placeholder={props.placeholder}
      />
    </div>
  )
}
