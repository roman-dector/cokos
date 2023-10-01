'use client'

import { Home, Star, User2 } from 'lucide-react'
import style from './style.module.css'
import { useRouter, usePathname } from 'next/navigation'
import { useState } from 'react'

export function Footer() {
  const router = useRouter()
  const url = usePathname()
  const [currentUrl, setUrl] = useState('')

  return (
    <footer className={style.footer}>
      <div
        className={style.item}
        style={{
          color: url === '/main' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/main')
        }}
      >
        <Home />
        <span>Главная</span>
      </div>

      <div
        className={style.item}
        style={{
          color: url === '/score' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/score')
        }}
      >
        <Score
          color={url === '/score' ? 'red' : 'var(--main-gray)'}
        />
        <span>Баллы</span>
      </div>
      <div
        className={style.item}
        style={{
          color: url === '/rating' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/rating')
        }}
      >
        <Star />
        <span>Рейтинг</span>
      </div>
      <div
        className={style.item}
        style={{
          color: url === '/profile' ? 'red' : 'var(--main-gray)',
        }}
        onClick={() => {
          router.push('/profile')
        }}
      >
        <User2 />
        <span>Профиль</span>
      </div>
    </footer>
  )
}

function Score(props: { color?: string }) {
  return (
    <div {...props}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='21'
        height='21'
        viewBox='0 0 21 21'
        fill='none'
      >
        <path
          d='M8.48916 10.5L13.9517 14.9947M8.48916 10.5L14.2525 7.31557M8.48916 10.5V14.9947C8.48916 13.4272 8.48916 6.09112 8.48916 4.40223M20 10.5C20 15.7467 15.7467 20 10.5 20C5.2533 20 1 15.7467 1 10.5C1 5.2533 5.2533 1 10.5 1C15.7467 1 20 5.2533 20 10.5Z'
          stroke={props.color || '#818691'}
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </svg>
    </div>
  )
}
