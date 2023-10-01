'use client'
import { Circle } from 'lucide-react'
import style from './style.module.css'

export default function Stat() {
  return (
    <main>
      <h1>Статистика</h1>
      <GenStat value={80} />
      <History
        funds={[
          {
            id: '1',
            name: 'Подари жизнь',
            budget: 240,
          },
          {
            id: '1',
            name: 'Ника',
            budget: 128,
          },
          {
            id: '1',
            name: 'Подари шанс',
            budget: 128,
          },
        ]}
      />
    </main>
  )
}

function GenStat(props: { value: number }) {
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>Общая статистика</header>
      <div className='flex justify-between items-center'>
        <div>
          <ul>
            <li>
              <span className={style.titleSecond}>Всего сожжено</span>
              <div>{`${82198} ккал`}</div>
            </li>
            <li>
              <span className={style.titleSecond}>
                Общее расстояние
              </span>
              <div>{`${490} км`}</div>
            </li>
            <li>
              <span className={style.titleSecond}>
                Всего пожертвовано
              </span>
              <div>{`${822} рублей`}</div>
            </li>
          </ul>
        </div>
        <div className='text-center'>
          <div className='relative'>
            <Circle color='var(--main-orange-2)' size={'6em'} />
            <div className='absolute left-0 right-0 top-0 bottom-0 m-auto flex justify-center items-center'>
              <span className={style.titleFirst}>{props.value}</span>
            </div>
          </div>
          <span className='titleSecond'>участников</span>
        </div>
      </div>
    </section>
  )
}
interface Fund {
  id: string
  name: string
  budget: number
}

function History(props: { funds: Fund[] }) {
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>
        Пожертвования по фондам
      </header>

      <div className='mb-2'>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>Всего фондов</span>
          <span>{19}</span>
        </div>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>Пожертвовано</span>
          <span>{`${8219} рублей`}</span>
        </div>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>
            Заработанные баллы
          </span>
          <span>{}</span>
        </div>
      </div>

      <div className='flex flex-col'>
        {props.funds.map(i => (
          <div key={i.id} className={style.histItem}>
            <span className={style.titleSecond}>{'28.09.2023'}</span>
            <span className={style.titleSecond}>{i.name}</span>
            <span className={style.titleSecond}>{i.budget}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
