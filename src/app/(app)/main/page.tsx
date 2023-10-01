'use client'
import style from './style.module.css'

import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js'
import { Circle } from 'lucide-react'

import { Doughnut, Bar } from 'react-chartjs-2'

ChartJS.register(BarElement, ArcElement, CategoryScale, LinearScale)

export default function Main() {
  return (
    <main className='flex flex-col gap-2'>
      <Steps stepsCount={400} />
      <HeartRate heartRate={[]} />
      <Weight weight={80} />
      <History
        history={[
          {
            id: '1',
            date: '28.09.2023',
            activity: 'Ходьба',
            time: '1:23:02',
            distance: 1.5,
            score: 16,
          },
          {
            id: '2',
            date: '28.09.2023',
            activity: 'Ходьба',
            time: '1:23:02',
            distance: 1.5,
            score: 16,
          },
          {
            id: '3',
            date: '28.09.2023',
            activity: 'Ходьба',
            time: '1:23:02',
            distance: 1.5,
            score: 16,
          },
        ]}
      />
    </main>
  )
}

function Steps(props: { stepsCount: number }) {
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>Шаги</header>
      <div className='flex justify-between items-center'>
        <div>
          <ul>
            <li>
              <span className={style.titleSecond}>
                Количесво калорий
              </span>
              <div>{`${324} ккал`}</div>
            </li>
            <li>
              <span className={style.titleSecond}>Расстояние</span>
              <div>{`${6.1} км`}</div>
            </li>
            <li>
              <span className={style.titleSecond}>
                Баллы за сегодня
              </span>
              <div>{`${32} балла`}</div>
            </li>
          </ul>
        </div>
        <div className='relative'>
          <Circle color='var(--main-orange-2)' size={'6em'} />
          <div className='absolute left-0 right-0 top-0 bottom-0 m-auto flex justify-center items-center'>
            <span className={style.titleFirst}>
              {props.stepsCount}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function HeartRate(props: { heartRate: number[] }) {
  let hours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
    19, 20, 21, 22, 23, 24,
  ]
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>Пульс</header>
      <div>
        <div>
          <span className={style.titleSecond}>Среднее значение</span>
          <div>{`${82} BPM`}</div>
        </div>

        <Bar
          data={{
            labels: hours,
            datasets: [
              {
                data: [75, 80, 76, 75, 80, 76, 75, 95, 90, 80],
                backgroundColor: '#ff3f35',
              },
            ],
          }}
        />
      </div>
    </section>
  )
}

function Weight({ weight }: { weight: number }) {
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>Вес</header>
      <div className='flex justify-between items-center'>
        <span className={style.titleSecond}>Норма</span>
        <span className={style.titleFirst}>{weight} кг</span>
      </div>
      <div className='flex w-full mb-10'>
        <div
          style={{
            position: 'relative',
            width: '25%',
            height: '7px',
            background: '#87A2F1',
            borderRadius: '3px 0 0 3px',
          }}
        >
          <span
            className='absolute -right-2 -bottom-7 text-slate-500'
            style={{
              fontSize: '15px',
            }}
          >
            45
          </span>
        </div>
        <div
          style={{
            position: 'relative',
            width: '25%',
            height: '7px',
            background: '#14F9B4',
          }}
        >
          <span
            className='absolute -right-2 -bottom-7 text-slate-500'
            style={{
              fontSize: '15px',
            }}
          >
            70
          </span>
        </div>
        <div
          style={{
            position: 'relative',
            width: '25%',
            height: '7px',
            background: '#F99014',
          }}
        >
          <span
            className='absolute -right-2 -bottom-7 text-slate-500'
            style={{
              fontSize: '15px',
            }}
          >
            90
          </span>
        </div>
        <div
          style={{
            width: '25%',
            height: '7px',
            background: '#FF3F35',
            borderRadius: ' 0 3px 3px 0',
          }}
        />
      </div>
      <div className='flex justify-between'>
        <div>
          <div className='flex gap-1 items-center mb-2'>
            <Circle fill='#87A2F1' stroke='' size={12} />
            <span className={style.titleSecond}>
              Недостаточный вес
            </span>
          </div>
          <div className='flex gap-1 items-center'>
            <Circle fill='#14F9B4' stroke='' size={12} />
            <span className={style.titleSecond}>Нормальный вес</span>
          </div>
        </div>

        <div>
          <div className='flex gap-1 items-center mb-2'>
            <Circle fill='#F99014' stroke='' size={12} />
            <span className={style.titleSecond}>Избыточный вес</span>
          </div>

          <div className='flex gap-1 items-center'>
            <Circle fill='#FF3F35' stroke='' size={12} />
            <span className={style.titleSecond}>Ожирение</span>
          </div>
        </div>
      </div>
    </section>
  )
}

interface HistItem {
  id: string
  date: string
  activity: string
  time: string
  distance: number
  score: number
}

function History(props: { history: HistItem[] }) {
  return (
    <section className={style.section}>
      <header className={style.titleFirst}>История активности</header>

      <div className='mb-2'>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>
            Тренировок на этой неделе
          </span>
          <span>{}</span>
        </div>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>
            Время активности за неделю
          </span>
          <span>{}</span>
        </div>
        <div className='flex justify-between'>
          <span className={style.titleSecond}>
            Заработанные баллы
          </span>
          <span>{}</span>
        </div>
      </div>

      <div className='flex flex-col'>
        {props.history.map(i => (
          <div key={i.id} className={style.histItem}>
            <span className={style.titleSecond}>{i.date}</span>
            <span className={style.titleSecond}>{i.activity}</span>
            <span className={style.titleSecond}>{i.time}</span>
            <span className={style.titleSecond}>{i.distance}</span>
            <span className={style.titleSecond}>{i.score}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
