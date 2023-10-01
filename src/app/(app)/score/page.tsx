'use client'
import style from './style.module.css'
import Image from 'next/image'
import { AuthButton } from '@/components/auth-button'

export default function Score() {
  let score = 1012

  let funds = [
    {
      id: '1',
      name: 'Подари жизнь',
      budget: 240,
      descr:
        'Благотворительный фонд помощи детям с онкологическими, гематологическими и иными тяжелыми заболеваниями «Подари жизнь». Фонд помогает детям и взрослым до 25 лет получить самую эффективную и современную медицинскую помощь, а также психологическую и социальную поддержку.',
    },
    {
      id: '1',
      name: 'Ника',
      budget: 128,
      descr:
        'Благотворительный фонд помощи бездомным животным «НИКА» реализует различные программы помощи животным. У фонда есть два собственных приюта , в которых проживает около 800 животных.',
    },
  ]

  return (
    <main>
      <h1>{score}</h1>
      <div className='flex justify-between py-5 px-9 bg-slate-400'>
        <div>
          <span>{329}</span>
          <span className='titleSecond'>{'за сетябрь'}</span>
        </div>
        <div>
          <span>{888}</span>
          <span className='titleSecond'>{'за все время'}</span>
        </div>
      </div>
      <div>
        {funds.map(f => (
          <div className={style.section}>
            <h2 className='font-bold text-[1.1em]'>{f.name}</h2>
            <div className='text-[0.9em]'>{f.descr}</div>
            <AuthButton>Статистика фонда</AuthButton>
          </div>
        ))}
      </div>
    </main>
  )
}

function FundCard(props: {
  name: string
  description: string
  logo: string
}) {
  return (
    <div>
      <Image alt='fund logo' src={props.logo} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <AuthButton>Помочь фонду</AuthButton>
      </div>
    </div>
  )
}
