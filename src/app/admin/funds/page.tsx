import style from './style.module.css'
import { AuthButton } from '@/components/auth-button'
import { Plus } from 'lucide-react'

export default function Funds() {
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
      <h1>
        Зарегистрированные
        <br />
        фонды
      </h1>
      <AuthButton>
        <div className='flex items-center gap-3 justify-center'>
          <Plus /> Новый фонд
        </div>
      </AuthButton>
      {funds.map(f => (
        <div className={style.section}>
          <h2 className='font-bold text-[1.1em]'>{f.name}</h2>
          <div className='text-[0.9em]'>{f.descr}</div>
          <AuthButton>Статистика фонда</AuthButton>
        </div>
      ))}
    </main>
  )
}
